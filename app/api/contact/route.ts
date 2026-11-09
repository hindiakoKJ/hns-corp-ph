import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { screenContact, escapeHtml } from '@/components/contact/screen';

export const dynamic = 'force-dynamic';

// Per-IP rate limit: at most 3 messages per 10 minutes. In-memory, so it is per
// server instance; it slows floods down rather than stopping a determined sender.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > WINDOW_MS) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many messages in a short time. Please try again in a few minutes.' }, { status: 429 });
  }

  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

  const result = screenContact((body ?? {}) as Record<string, unknown>);
  if (!result.ok && result.kind === 'fix') {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  if (!result.ok) {
    // Bot: report success so it learns nothing, and send nothing.
    console.warn(`[contact] dropped submission (${result.reason}) from ${ip}`);
    return NextResponse.json({ success: true });
  }

  const { name, email, product, concern, message } = result;
  const e = { name: escapeHtml(name), email: escapeHtml(email), product: escapeHtml(product), concern: escapeHtml(concern), message: escapeHtml(message) };
  const recipient = process.env.CONTACT_RECIPIENT ?? 'support@hnscorpph.com';
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'HNS PH Solutions Contact <support@hnscorpph.com>',
      to: recipient,
      replyTo: email,
      subject: `[${product}] ${concern} — ${name}`.replace(/[\r\n]+/g, ' '),
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 580px; margin: 0 auto; color: #0f172a;">
          <div style="background: #0891B2; padding: 20px 28px; border-radius: 12px 12px 0 0;">
            <p style="margin: 0; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.1em;">HNS PH Solutions · Contact Form</p>
            <h1 style="margin: 6px 0 0; font-size: 20px; color: #fff;">${e.concern}</h1>
          </div>

          <div style="background: #f8fafc; padding: 24px 28px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 90px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${e.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${e.email}" style="color: #0891B2;">${e.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Product</td>
                <td style="padding: 8px 0;">${e.product}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Concern</td>
                <td style="padding: 8px 0;">${e.concern}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${e.message}</div>

            <p style="margin-top: 20px; font-size: 11px; color: #94a3b8;">
              Sent from hnscorpph.com/contact · Reply directly to this email to respond to ${e.name}.
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
