import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, product, concern, message } = await req.json();

  if (!name || !email || !product || !concern || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const recipient = process.env.CONTACT_RECIPIENT ?? 'support@hnscorpph.com';

  try {
    await resend.emails.send({
      from: 'HNScorpPH Contact <support@hnscorpph.com>',
      to: recipient,
      replyTo: email,
      subject: `[${product}] ${concern} — ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 580px; margin: 0 auto; color: #0f172a;">
          <div style="background: #0891B2; padding: 20px 28px; border-radius: 12px 12px 0 0;">
            <p style="margin: 0; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.1em;">HNScorpPH · Contact Form</p>
            <h1 style="margin: 6px 0 0; font-size: 20px; color: #fff;">${concern}</h1>
          </div>

          <div style="background: #f8fafc; padding: 24px 28px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 90px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0891B2;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Product</td>
                <td style="padding: 8px 0;">${product}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Concern</td>
                <td style="padding: 8px 0;">${concern}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>

            <p style="margin-top: 20px; font-size: 11px; color: #94a3b8;">
              Sent from hnscorpph.com/contact · Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 });
  }
}
