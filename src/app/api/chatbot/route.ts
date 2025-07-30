import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, mobile } = await req.json();

    const decodedBase64 = Buffer.from(
      process.env.GOOGLE_CREDENTIALS_BASE64 || "",
      "base64"
    ).toString("utf-8");

    const serviceAccount = JSON.parse(decodedBase64);

    const auth = new google.auth.JWT(
      serviceAccount.client_email,
      undefined,
      serviceAccount.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    // 👇 Append to ChatbotData tab
    const values = [[name, mobile, new Date().toLocaleString()]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "ChatbotData!A2", // 👈 target tab name
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chatbot Sheet Error:", err);
    return NextResponse.json(
      { success: false, message: "Sheet logging failed" },
      { status: 500 }
    );
  }
}
