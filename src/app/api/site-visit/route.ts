import { NextResponse } from "next/server";
//import nodemailer from "nodemailer";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

// Helper function for sending email (called in background)
/**async function sendEmail({
  name,
  phone,
  service,
  area,
}: Record<string, string>) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || "quadradev04@gmail.com",
      subject: "New Site Visit Booking",
      text: `New Booking:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nArea: ${area}`,
    };

    await transporter.sendMail(adminMailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error);
  }
}*/

function getISTDateTime() {
  return new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
}

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name = "Not specified",
    phone = "Not specified",
    service = "Not specified",
    area = "Not specified",
    email = "Not specified",
    message = "Not specified",
  } = body;

  // Validate phone number
  const phoneRegex = /^\+?[0-9\s\-]{9,}$/;
  if (!phoneRegex.test(phone)) {
    return NextResponse.json(
      { success: false, error: "Invalid phone number" },
      { status: 400 }
    );
  }

  // 1. Append to Google Sheet
  try {
    const base64Credentials = process.env.GOOGLE_CREDENTIALS_BASE64;

    if (!base64Credentials) {
      throw new Error("Missing GOOGLE_CREDENTIALS_BASE64 environment variable");
    }

    const credentials = JSON.parse(
      Buffer.from(base64Credentials, "base64").toString("utf-8")
    );

    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    // ---- NEW: Get next S. No. ----
    // Assuming header is in row 1, so data starts at row 2
    const sNoRange = "Sheet1!A:A"; // Column A is for S.No.
    const sNoRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: sNoRange,
    });
    // If sNoRes.data.values is undefined, set it as empty array
    const count = (sNoRes.data.values ? sNoRes.data.values.length : 0);
    // count will be 1 for just header, so next S.No. is count if header, or count+1 if not
    const nextSerial = count; // If you have a header row, this works fine

    // ---- /NEW: S. No. calculated ----

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A2", // start at A2 if header in row 1
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            nextSerial,
            name,
            phone,
            service,
            area,
            email,
            message,
            getISTDateTime(),
          ],
        ],
      },
    });

    // Fire and forget email
    // possibly env variable errors . For now removing this functionaity
    // sendEmail({ name, phone, service, area });

    return NextResponse.json({
      success: true,
      message: "Submitted successfully",
    });
  } catch (error) {
    console.error("Sheet error:", error);
    return NextResponse.json(
      { success: false, error: "Sheet append failed" },
      { status: 500 }
    );
  }
}
