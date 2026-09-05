import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, phone, subject, message } = body;

    // Validate required fields
    if (!type || !name || !email || !phone || !subject || !message) {
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

    // Validate message length
    if (message.trim().length < 20) {
      return NextResponse.json(
        { error: "Message must be at least 20 characters" },
        { status: 400 }
      );
    }

    // Format type label
    const typeLabels: Record<string, string> = {
      reservation: "Reservation Inquiry",
      "private-event": "Private Event",
      press: "Press / Media",
      careers: "Careers",
      general: "General Question",
    };

    // Send confirmation email to user
    await resend.emails.send({
      from: "PROVENANCE <contact@provenance-restaurant.com>",
      to: email,
      subject: `We Received Your Message - PROVENANCE`,
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
            <h2 style="font-family: 'Libre Caslon Text', serif; font-size: 24px; color: #16130e; margin: 0 0 16px;">Message Received</h2>
            <p style="font-size: 16px; color: #4d4639; margin: 0 0 24px;">Thank you for contacting PROVENANCE. We've received your inquiry and will respond within 24 hours.</p>
            
            <div style="background: #16130e; border: 1px solid #d6c4ad; padding: 24px; margin: 24px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #d0c5b4; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Inquiry Type</td>
                  <td style="padding: 8px 0; color: #e5c476; font-family: 'Libre Caslon Text', serif; font-size: 18px; text-align: right;">${typeLabels[type] || type}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #d0c5b4; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                  <td style="padding: 8px 0; color: #e5c476; font-family: 'Libre Caslon Text', serif; font-size: 18px; text-align: right;">${subject}</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 16px; color: #4d4639; margin: 24px 0;">For immediate assistance, please call us at +1 (212) 555-0199.</p>
          </div>
          <div style="border-top: 1px solid #d6c4ad; padding: 24px 0; text-align: center;">
            <p style="color: #737373; font-size: 12px; margin: 0;">123 Culinary Lane, Gastronomy District, NY 10001</p>
            <p style="color: #737373; font-size: 12px; margin: 8px 0 0;">+1 (212) 555-0199 | info@provenance-restaurant.com</p>
          </div>
        </body>
        </html>
      `,
    });

    // Send notification to restaurant
    await resend.emails.send({
      from: "PROVENANCE Contact <contact@provenance-restaurant.com>",
      to: "info@provenance-restaurant.com",
      subject: `New Contact: ${typeLabels[type] || type} - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Type:</strong> ${typeLabels[type] || type}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}