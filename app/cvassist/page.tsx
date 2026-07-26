import '../home.css';
import ProductPage from '@/components/ui/ProductPage';
import CVAssistSim from '@/components/ui/sims/CVAssistSim';

export default function CVAssistPage() {
  return (
    <ProductPage
      name="CVAssist" logo="/logos/cvassist-icon.svg" accent="#8B7CF7"
      url="https://cvassist.cc"
      sim={<CVAssistSim />}
      h1="Your AI co-pilot for landing the next role."
      sub="Upload your CV, find matching jobs, and get a tailored CV, cover letter, and screening answers for each one. You always click submit — CVAssist just preps everything."
      primaryCta="Start free" secondaryCta={{ label: 'Request demo', href: '/contact' }}
      note="10 tailored applications free — no card required."
      featuresHeading="Everything a job seeker needs"
      features={[
        { icon: 'list', title: 'Live job search', body: 'Search real openings with real apply links — built for the Philippine market.' },
        { icon: 'checkCircle', title: 'Tailored to each role', body: 'CV, cover letter, and screening answers rewritten for the specific job — strictly from your CV.' },
        { icon: 'download', title: 'Tailored CV as PDF', body: 'Download a clean, job-specific resume PDF for the role you are applying to.' },
        { icon: 'bars', title: 'Real match scoring', body: 'Every role gets a match score and ranking, so you spend effort where you have the best shot.' },
        { icon: 'people', title: 'AI interview & improvement coach', body: 'Likely interview questions, CV improvement tips, and follow-up emails — on demand.' },
        { icon: 'calendar', title: 'Application tracker', body: 'A simple board — Saved, Applied, Interviewing, Offer — so nothing slips.' },
      ]}
      ctaHeading="Apply smarter, not harder." ctaSub="Start with 10 free tailored applications. No credit card."
      ctaButton="Open CVAssist"
    />
  );
}
