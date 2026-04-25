import { BookOpen, PieChart, Percent, LineChart } from 'lucide-react';

export function Learn() {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="text-center pb-4 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Learning Center</h1>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">Master the fundamentals of Real Estate Investment Trusts to make smarter institutional-grade investment decisions.</p>
      </div>

      <div className="space-y-4">
        
        <article className="bg-white p-6 rounded shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
            <div className="w-8 h-8 bg-brand-primary/10 text-brand-primary rounded-sm flex items-center justify-center">
              <BuildingIcon className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">What is a REIT?</h2>
          </div>
          <div className="text-sm text-slate-700 leading-relaxed space-y-3">
            <p className="font-medium text-slate-900">A Real Estate Investment Trust (REIT) is a company that owns, operates, or finances income-generating real estate. Modeled after mutual funds, REITs pool the capital of numerous investors.</p>
            <p>This structure allows individual investors to earn dividends from real estate investments—without having to buy, manage, or finance any properties themselves.</p>
            <ul className="space-y-1.5 list-disc list-inside pt-2">
              <li><strong className="text-slate-900">Liquidity:</strong> Traded on open exchanges like Bursa Malaysia.</li>
              <li><strong className="text-slate-900">Dividends:</strong> Required by law to distribute at least 90% of taxable income to shareholders.</li>
              <li><strong className="text-slate-900">Accessibility:</strong> Requires much less capital than buying physical property.</li>
            </ul>
          </div>
        </article>

        <article className="bg-white p-6 rounded shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
            <div className="w-8 h-8 bg-brand-accent/10 text-brand-accent rounded-sm flex items-center justify-center">
              <PieChart className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Sector Focus: Hospitality vs Retail</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <h3 className="font-bold text-sm mb-2 text-slate-900 uppercase tracking-widest">Retail REITs</h3>
              <p className="text-xs text-slate-600 mb-3">Focus on shopping malls and commercial retail space.</p>
              <ul className="text-xs text-slate-700 space-y-1.5">
                <li className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" /> Highly dependent on domestic consumption</li>
                <li className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" /> Long-term anchor leases provide stability</li>
                <li className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" /> Subject to e-commerce disruption risks</li>
              </ul>
            </div>
            <div className="bg-brand-secondary/10 border border-brand-secondary/30 p-4 rounded">
              <h3 className="font-bold text-sm mb-2 text-brand-primary uppercase tracking-widest">Hospitality REITs</h3>
              <p className="text-xs text-brand-primary/80 mb-3">Hotels, resorts, and integrated tourism destinations.</p>
              <ul className="text-xs text-brand-primary/90 space-y-1.5">
                <li className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-brand-secondary mt-1.5 flex-shrink-0" /> Driven by international and domestic tourism</li>
                <li className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-brand-secondary mt-1.5 flex-shrink-0" /> Higher yield potential during boom cycles</li>
                <li className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-brand-secondary mt-1.5 flex-shrink-0" /> Can feature master leases or variable contracts</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="bg-white p-6 rounded shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
            <div className="w-8 h-8 bg-brand-secondary/20 text-brand-secondary rounded-sm flex items-center justify-center">
              <Percent className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Key Metrics Explained</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-brand-primary pl-3 bg-slate-50 p-2 rounded-r">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">NAV (Net Asset Value)</h4>
              <p className="text-xs text-slate-600 mt-1">The total value of the REIT's assets minus its liabilities. If a REIT trades below NAV (Price/NAV &lt; 1), it is considered "trading at a discount."</p>
            </div>
            <div className="border-l-2 border-brand-accent pl-3 bg-slate-50 p-2 rounded-r">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Distribution Yield</h4>
              <p className="text-xs text-slate-600 mt-1">The annual dividend payout divided by the current share price. A higher yield means more cash return, but extremely high yields can sometimes signal risk.</p>
            </div>
            <div className="border-l-2 border-slate-400 pl-3 bg-slate-50 p-2 rounded-r">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Gearing Ratio</h4>
              <p className="text-xs text-slate-600 mt-1">The proportion of debt compared to total equity. Malaysian authorities cap REIT gearing at 50%. Lower is generally safer in high-interest environments.</p>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="text-center bg-slate-900 text-white p-8 rounded shadow-sm">
          <BookOpen className="w-8 h-8 text-brand-secondary mx-auto mb-3" />
          <h2 className="text-lg font-bold mb-2 uppercase tracking-widest">Ready to apply your knowledge?</h2>
          <p className="text-xs text-slate-400 mb-6 max-w-lg mx-auto">Use our comparison tool to evaluate REITs based on the metrics you just learned.</p>
          <a href="/compare" className="inline-block px-6 py-2 bg-brand-primary text-xs font-bold uppercase tracking-widest rounded hover:bg-brand-primary/90 transition">
            Compare REITs Now
          </a>
        </div>

      </div>
    </div>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
}
