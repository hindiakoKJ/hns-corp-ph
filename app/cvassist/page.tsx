import Link from 'next/link';
import SiteNav from '@/components/ui/SiteNav';
import SiteFooter from '@/components/ui/SiteFooter';
import { FeatureIcon } from '@/components/brand/FeatureIcons';

const ACC = '#4F46E5';
const APP_URL = 'https://cvassist.cc';

const STEPS = [
  { name: 'Upload', color: ACC, desc: 'Drop your CV (PDF or DOCX). CVAssist reads your skills and experience into a structured profile.' },
  { name: 'Match', color: '#7C5CF6', desc: 'Search real job listings and see them ranked by a match score against your profile.' },
  { name: 'Tailor', color: '#2BC4DE', desc: 'Generate a tailored CV, cover letter, and screening answers — then apply on the real site yourself.' },
];

const FEATURES = [
  { icon: 'list' as const,        title: 'Live job search', body: 'Search real openings with real apply links — not a canned demo board. Built for the Philippine market.' },
  { icon: 'checkCircle' as const, title: 'Tailored to each role', body: 'CV, cover letter, and screening answers rewritten for the specific job — strictly from facts in your CV.' },
  { icon: 'download' as const,    title: 'Tailored CV as PDF', body: 'Download a clean, job-specific resume PDF generated for the role you are applying to.' },
  { icon: 'bars' as const,        title: 'Real match scoring', body: 'Every role gets a match score and ranking, so you spend effort where you have the best shot.' },
  { icon: 'people' as const,      title: 'AI interview & improvement coach', body: 'Likely interview questions, CV improvement tips, and follow-up emails — on demand, per role.' },
  { icon: 'calendar' as const,    title: 'Application tracker', body: 'A simple board — Saved, Applied, Interviewing, Offer — so nothing slips through the cracks.' },
];

export default function CVAssistPage() {
  return (
    <>
      <SiteNav />
      <main style={{ '--acc': ACC } as React.CSSProperties}>

        {/* Hero */}
        <section style={{ padding: '90px 32px 70px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -160, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: `radial-gradient(ellipse, ${ACC}28 0%, transparent 65%)`, pointerEvents: 'none' }} />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, border: `1px solid ${ACC}40`, borderRadius: 12, padding: '10px 18px', background: `${ACC}0E`, marginBottom: 28 }}>
              <img src="/logos/cvassist-icon.svg" alt="" width={28} height={28} style={{ borderRadius: 7, display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: '#A9B0FF' }}>CVAssist</span>
            </div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.04, letterSpacing: '-.03em', maxWidth: 780, margin: '0 auto 22px' }}>
              Your AI co-pilot for landing the next role.
            </h1>
            <p style={{ fontSize: 18, color: '#94A2B6', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Upload your CV, find matching jobs, and get a tailored CV, cover letter, and screening answers for each one. You always click submit — CVAssist just preps everything.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={APP_URL} className="btn" style={{ background: `linear-gradient(180deg, ${ACC}, #4338CA)`, color: '#fff', boxShadow: `0 8px 24px -8px ${ACC}aa`, border: 'none' }}>
                Start free
              </a>
              <Link href="/contact" className="btn btn-ghost">Request demo</Link>
            </div>
            <p style={{ fontSize: 13, color: '#63718A', marginTop: 16 }}>10 tailored applications free — no card required.</p>

            {/* Co-pilot preview */}
            <div style={{ maxWidth: 760, margin: '56px auto 0', background: '#101724', border: '1px solid rgba(255,255,255,.10)', borderRadius: 18, padding: '28px 24px', textAlign: 'left' }}>
              {/* stepper */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 22, flexWrap: 'wrap' }}>
                {STEPS.map((s, i) => (
                  <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, border: `1px solid ${i === 2 ? ACC + '60' : 'rgba(255,255,255,.10)'}`, background: i === 2 ? ACC + '18' : 'transparent', color: i === 2 ? '#A9B0FF' : '#63718A', fontSize: 12.5, fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}>
                    <span style={{ width: 18, height: 18, borderRadius: '50%', background: i === 2 ? ACC : 'rgba(255,255,255,.07)', color: i === 2 ? '#fff' : '#63718A', fontSize: 11, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                    {s.name}
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, alignItems: 'center' }}>
                {/* matched role + ring */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#141D2D', borderRadius: 12, padding: '18px 16px' }}>
                  {/* match ring */}
                  <svg width={66} height={66} viewBox="0 0 66 66" style={{ flexShrink: 0 }}>
                    <circle cx="33" cy="33" r="28" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6" />
                    <circle cx="33" cy="33" r="28" fill="none" stroke={ACC} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 28}`} strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.86)}`} transform="rotate(-90 33 33)" />
                    <text x="33" y="37" textAnchor="middle" fontFamily="var(--font-space-grotesk)" fontWeight="700" fontSize="16" fill="#EAF1F9">86%</text>
                  </svg>
                  <div>
                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: '#EAF1F9', marginBottom: 4 }}>Financial Analyst</div>
                    <div style={{ fontSize: 12.5, color: '#63718A' }}>Makati · Full-time</div>
                    <div style={{ fontSize: 11.5, color: '#37D9A0', marginTop: 6 }}>Strong match</div>
                  </div>
                </div>

                {/* tailored snippet */}
                <div style={{ background: '#141D2D', borderRadius: 12, padding: '18px 16px' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                    {['Overview', 'Cover letter', 'Screening'].map((t, i) => (
                      <span key={t} style={{ fontSize: 11, fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: i === 1 ? '#A9B0FF' : '#63718A', borderBottom: i === 1 ? `2px solid ${ACC}` : '2px solid transparent', paddingBottom: 4 }}>{t}</span>
                    ))}
                  </div>
                  {[100, 92, 96, 70].map((w, i) => (
                    <div key={i} style={{ height: 7, width: `${w}%`, borderRadius: 4, background: 'rgba(255,255,255,.09)', marginBottom: 8 }} />
                  ))}
                  <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#A9B0FF' }}>
                    Open application form
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>How it works</span></div>
            <div className="sec-head">
              <h2>Upload. Match. Tailor.</h2>
              <p>Three steps from your CV to a job-ready application — you stay in control of every submit.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
              {STEPS.map((s, i) => (
                <div key={s.name} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 32 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: `${s.color}20`, border: `1px solid ${s.color}35`, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: s.color }}>{i + 1}</div>
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#EAF1F9' }}>{s.name}</h3>
                  <p style={{ color: '#94A2B6', fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '80px 0' }}>
          <div className="wrap">
            <div className="stab" style={{ marginBottom: 20 }}><span className="d" /><span>Features</span></div>
            <div className="sec-head">
              <h2>Everything a job seeker needs</h2>
              <p>From search to tailored application to interview prep — without losing the human in the loop.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
              {FEATURES.map((f) => (
                <div key={f.title} style={{ background: '#101724', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, padding: '26px 24px', display: 'flex', gap: 18 }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, background: `${ACC}18`, border: `1px solid ${ACC}28`, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FeatureIcon name={f.icon} size={22} color="#A9B0FF" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 15, fontWeight: 700, marginBottom: 6, color: '#EAF1F9' }}>{f.title}</h4>
                    <p style={{ color: '#94A2B6', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: '#0C111B', borderTop: '1px solid rgba(255,255,255,.07)', textAlign: 'center' }}>
          <div className="wrap">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: 16 }}>Apply smarter, not harder.</h2>
            <p style={{ color: '#94A2B6', marginBottom: 32, fontSize: 16 }}>Start with 10 free tailored applications. No credit card.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={APP_URL} className="btn btn-blue">Open CVAssist</a>
              <Link href="/contact" className="btn btn-ghost">Talk to us</Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
