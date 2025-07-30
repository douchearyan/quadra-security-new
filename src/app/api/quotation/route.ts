import { NextResponse } from "next/server";
//import nodemailer from "nodemailer";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

function getISTDate() {
  return new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
}

function getISTTime() {
  return new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
}

const appendToSheet = async (
  name: string,
  phone: string,
  service: string,
  area: string,
  email: string,
  message: string
) => {
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

  // Get the next serial number
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A:A",
  });
  const nextSerial = res.data.values ? res.data.values.length : 1;

  const values = [
    [
      nextSerial,         // S. No.
      name,               // Name
      phone,              // Phone Number
      service,            // Service
      area,               // Area
      email,              // Email
      message,            // Message
      `${getISTDate()}, ${getISTTime()}` // Time of Entry
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A2",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
};

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Use default value "Not specified" if field is missing
    const name = data.name || "Not specified";
    const phone = data.phone || "Not specified";
    const service = data.service || "Not specified";
    const area = data.area || "Not specified";
    const email = data.email || "Not specified";
    const message = data.message || "Not specified";

    /**const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Admin email
    await transporter.sendMail({
      from: `"Quadra Quotation" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_MAIL,
      subject: "🔔 New Quotation Request",
      html: `
        <h2>New Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Area:</strong> ${area}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });


    // Optional: Client confirmation email
    // if (email !== "Not specified") {
    //   await transporter.sendMail({
    //     from: `"Quadra Booking" <${process.env.GMAIL_USER}>`,
    //     to: email,
    //     subject: "✅ Quotation Request Received",
    //     html: `
    //       <h2>Thank you, ${name}!</h2>
    //       <p>We've received your quotation request and will contact you shortly.</p>
    //       <p>– The Quadra Booking Team</p>
    //     `,
    //   });
    // }*/

    await appendToSheet(name, phone, service, area, email, message);


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quotation API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
