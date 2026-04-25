import { Database, ShieldCheck, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="text-center pb-4 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">About REIT WATCH MY</h1>
        <p className="text-sm text-slate-600">Built to bring institutional-grade data visibility to everyday real estate investors in Malaysia.</p>
      </div>

      <div className="bg-white rounded shadow-sm border border-slate-100 p-6 space-y-6">
        
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-4 h-4 text-brand-primary" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">Data Methodology</h2>
          </div>
          <div className="text-slate-600 space-y-3 text-xs leading-relaxed pl-6 border-l border-slate-200">
            <p className="pl-3">
              The data presented on REIT WATCH MY is statically curated for demonstration and educational purposes. While it closely mimics real-world figures representing the Malaysian REIT sector, it is not connected to a live exchange API.
            </p>
            <p className="pl-3">
              <strong className="text-slate-900">Yield calculations</strong> are based on historical distribution per unit (DPU) divided by the mocked current price. <strong className="text-slate-900">NAV (Net Asset Value)</strong> figures represent property portfolio valuations net of debt liabilities.
            </p>
          </div>
        </section>

        <hr className="border-slate-100" />

        <section>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">Disclaimer</h2>
          </div>
          <div className="bg-slate-50 border-l-2 border-slate-400 p-3 text-[10px] uppercase tracking-wider text-slate-600 font-bold ml-6">
            <p className="leading-relaxed">
              The information provided by REIT WATCH MY is for educational and informational purposes only and does not constitute financial, investment, or legal advice. 
              Real estate investments are subject to market risks, including the possible loss of principal amount invested. 
              Always conduct your own due diligence or consult a licensed financial advisor before making any investment decisions.
            </p>
          </div>
        </section>

        <hr className="border-slate-100" />

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-slate-500" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">Contact</h2>
          </div>
          <div className="pl-6 border-l border-slate-200">
            <p className="text-slate-600 text-xs pl-3">
              For business inquiries, data partnerships, or to inquire about sponsorship opportunities on our Hospitality Focus segments, please reach out to our team.
            </p>
            <a href="mailto:contact@reitwatch.my" className="inline-block mt-3 text-brand-primary text-xs font-bold uppercase tracking-widest hover:underline pl-3">
              contact@reitwatch.my
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
