import { NextRequest, NextResponse } from 'next/server';
import { PLANS } from '@/components/pay/plans';

// Creates a Xendit hosted invoice and returns its payment URL.
// Requires XENDIT_SECRET_KEY (test or live) in the environment.
export async function POST(req: NextRequest) {
  let body: { plan?: string; name?: string; email?: string; phone?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const plan = body.plan ? PLANS[body.plan] : undefined;
  if (!plan) return NextResponse.json({ error: 'unknown_plan' }, { status: 400 });

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  if (!name || !email) {
    return NextResponse.json({ error: 'name_email_required' }, { status: 422 });
  }

  const key = process.env.XENDIT_SECRET_KEY;
  if (!key) {
    // Checkout page renders fully; this only trips when the merchant key isn't set yet.
    return NextResponse.json({ error: 'payment_unconfigured' }, { status: 503 });
  }

  const origin = req.nextUrl.origin;
  const external_id = `hnsopc-${plan.id}-${Date.now()}`;

  try {
    const res = await fetch('https://api.xendit.co/v2/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(key + ':').toString('base64'),
      },
      body: JSON.stringify({
        external_id,
        amount: plan.amount,
        currency: 'PHP',
        payer_email: email,
        description: plan.name,
        success_redirect_url: `${origin}/pay/success`,
        failure_redirect_url: `${origin}/pay/failed`,
        customer: {
          given_names: name,
          email,
          ...(phone ? { mobile_number: phone } : {}),
        },
      }),
    });

    if (!res.ok) {
      const detail = (await res.text()).slice(0, 400);
      return NextResponse.json({ error: 'xendit_error', detail }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json({ invoice_url: data.invoice_url });
  } catch {
    return NextResponse.json({ error: 'network_error' }, { status: 502 });
  }
}
