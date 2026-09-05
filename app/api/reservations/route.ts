import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, time, partySize, experience, name, email, phone, occasion, dietary, requests } = body;

    // Validate required fields
    if (!date || !time || !partySize || !experience || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Format experience label
    const experienceLabels: Record<string, string> = {
      tasting: "Tasting Menu ($295 pp)",
      "tasting-wine": "Tasting Menu + Wine Pairing ($480 pp)",
      vegetarian: "Vegetarian Tasting ($275 pp)",
      "chefs-table": "Chef's Table Experience ($450 pp)",
      private: "Private Dining Inquiry",
    };

    // Send confirmation email to customer
    await resend.emails.send({
      from: "PROVENANCE <reservations@provenance-restaurant.com>",
      to: email,
      subject: `Reservation Confirmed - PROVENANCE`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #16130e; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; padding: 40px 0; border-bottom: 1px solid #d6c4ad;">
            <h1 style="font-family: 'Libre Caslon Text', serif; font-size: 32px; color: #e5c476; margin: 0;">PROVENANCE</h1>
            <p style="color: #d0c5b4; margin: 8px 0 0;">Fine Dining Restaurant</p>
          </div>
          <div style="padding: 40px 0;">
            <h2 style="font-family: 'Libre Caslon Text', serif; font-size: 24px; color: #16130e; margin: 0 0 16px;">Reservation Confirmed</h2>
            <p style="font-size: 16px; color: #4d4639; margin: 0 0 24px;">Thank you for choosing PROVENANCE. Your reservation has been confirmed.</p>
            
            <div style="background: #16130e; border: 1px solid #d6c4ad; padding: 24px; margin: 24px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #d0c5b4; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Date</td>
                  <td style="padding: 8px 0; color: #e5c476; font-family: 'Libre Caslon Text', serif; font-size: 20px; text-align: right;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #d0c5b4; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Time</td>
                  <td style="padding: 8px 0; color: #e5c476; font-family: 'Libre Caslon Text', serif; font-size: 20px; text-align: right;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #d0c5b4; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Party Size</td>
                  <td style="padding: 8px 0; color: #e5c476; font-family: 'Libre Caslon Text', serif; font-size: 20px; text-align: right;">${partySize}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #d0c5b4; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Experience</td>
                  <td style="padding: 8px 0; color: #e5c476; font-family: 'Libre Caslon Text', serif; font-size: 20px; text-align: right;">${experienceLabels[experience] || experience}</td>
                </tr>
                ${occasion ? `
                <tr>
                  <td style="padding: 8px 0; color: #d0c5b4; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Occasion</td>
                  <td style="padding: 8px 0; color: #e5c476; font-family: 'Libre Caslon Text', serif; font-size: 20px; text-align: right;">${occasion}</td>
                </tr>
                ` : ""}
              </table>
            </div>

            <p style="font-size: 16px; color: #4d4639; margin: 24px 0;">We look forward to welcoming you. If you need to modify or cancel your reservation, please contact us at least 24 hours in advance.</p>
            
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://provenance-restaurant.com" style="display: inline-block; background: #e5c476; color: #3e2e00; padding: 16px 32px; text-decoration: none; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">View Reservation Details</a>
            </div>
          </div>
          <div style="border-top: 1px solid #d6c4ad; padding: 24px 0; text-align: center;">
            <p style="color: #737373; font-size: 12px; margin: 0;">123 Culinary Lane, Gastronomy District, NY 10001</p>
            <p style="color: #737373; font-size: 12px; margin: 8px 0 0;">+1 (212) 555-0199 | reservations@provenance-restaurant.com</p>
          </div>
        </body>
        </html>
      `,
    });

    // Send notification to restaurant
    await resend.emails.send({
      from: "PROVENANCE System <system@provenance-restaurant.com>",
      to: "reservations@provenance-restaurant.com",
      subject: `New Reservation: ${name} - ${date} at ${time}`,
      html: `
        <h2>New Reservation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Party Size:</strong> ${partySize}</p>
        <p><strong>Experience:</strong> ${experienceLabels[experience] || experience}</p>
        ${occasion ? `<p><strong>Occasion:</strong> ${occasion}</p>` : ""}
        ${dietary ? `<p><strong>Dietary:</strong> ${dietary}</p>` : ""}
        ${requests ? `<p><strong>Requests:</strong> ${requests}</p>` : ""}
      `,
    });

    return NextResponse.json({ success: true, message: "Reservation confirmed" });
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "Failed to process reservation" },
      { status: 500 }
    );
  }
}