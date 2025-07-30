import { NextResponse } from "next/server";
//import nodemailer from "nodemailer";
import { google } from "googleapis";

function getISTDate() {
  return new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
}

function getISTTime() {
  return new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Parse service account from base64 env var
    const decodedBase64 = Buffer.from(
      process.env.GOOGLE_CREDENTIALS_BASE64 || "",
      "base64"
    ).toString("utf-8");

    const serviceAccount = JSON.parse(decodedBase64);

    // hanging mail functionality 
    // --- Send email ---
    //const transporter = nodemailer.createTransport({
     // service: "gmail",
     // auth: {
      //  user: process.env.GMAIL_USER,
      //  pass: process.env.GMAIL_APP_PASSWORD,
    //  },
   // });

    // Admin email
    /**const adminMailOptions = {
      from: `"Quadra Booking" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: body.email,
      subject: `🔔 New Service Request from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Mobile:</strong> ${body.mobile}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Address:</strong> ${body.address}</p>
        <p><strong>Pincode:</strong> ${body.pincode}</p>
        <p><strong>Date:</strong> ${getISTDate()}</p>
        <p><strong>Time Slot:</strong> ${getISTTime()}</p>
      `,
    };

    // Client confirmation email
    const clientMailOptions = {
      from: `"Quadra Booking" <${process.env.GMAIL_USER}>`,
      to: body.email,
      subject: "✅ Your Service Request Was Received",
      html: `
        <h2>Thank you, ${body.name}!</h2>
        <p>We've received your service request and our team will get in touch with you within 24 hours.</p>
        <p>Here's a summary of your request:</p>
        <ul>
          <li><strong>Service:</strong> ${body.service}</li>
          <li><strong>Date:</strong> ${getISTDate()}</li>
          <li><strong>Time Slot:</strong> ${getISTTime()}</li>
          <li><strong>Address:</strong> ${body.address}</li>
        </ul>
        <p>Need to reach us sooner? Just reply to this email.</p>
        <p>– The Quadra Booking Team</p>
      `,
    };

    // hanging the mail integartion for now
    //await transporter.sendMail(adminMailOptions);
    //await transporter.sendMail(clientMailOptions);
*/
    // --- Google Sheets integration ---
    const auth = new google.auth.JWT(
      serviceAccount.client_email,
      undefined,
      serviceAccount.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const range = "Sheet1!A:A"; // S. No. column
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const nextSerial = res.data.values ? res.data.values.length : 1;
    const values = [
      [
        nextSerial,
        body.name,
        body.mobile,
        body.service,
        body.address,
        body.email,
        body.message,
        `${getISTDate()}, ${getISTTime()}`
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A2",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({
      success: true,
      message: "Contact saved, email sent, and logged to Google Sheet!",
    });
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process contact form." },
      { status: 500 }
    );
  }
}
