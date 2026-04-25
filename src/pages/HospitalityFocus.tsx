import { Link } from 'react-router-dom';
import { Ticket, MapPin, Building2, ExternalLink } from 'lucide-react';
import { reitsData } from '../data/reits';

export function HospitalityFocus() {
  const hospitalityReits = reitsData.filter(r => r.casinoProximity || r.sector === 'Hospitality');

  return (
    <div className="space-y-4 pb-12">
      {/* Hero */}
      <section className="bg-brand-primary rounded overflow-hidden relative shadow-sm border-l-4 border-brand-secondary">
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 flex items-center justify-center">
           <svg className="w-64 h-64" viewBox="0 0 24 24" fill="currentColor"><path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
        </div>
        <div className="relative z-20 p-6 md:p-8 md:w-2/3">
          <div className="flex items-center gap-2 mb-4">
             <span className="text-[10px] font-bold bg-brand-secondary text-brand-primary px-2 py-0.5 rounded uppercase">High-Yield Opportunity</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            The Genting Effect: Hospitality REITs
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
            Integrated resorts and major casinos serve as massive gravity wells for international tourism. Discover how surrounding REITs capture this spillover effect to maintain premium occupancy rates and robust distribution yields.
          </p>
        </div>
      </section>

      {/* Analysis Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded shadow-sm border border-slate-100">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Why Casino-Adjacent Real Estate?</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Integrated resorts like Resorts World Genting are fundamental drivers of the Malaysian tourism economy. The sheer volume of foot traffic—both domestic and international (particularly from Singapore, China, and Indonesia)—creates a unique micro-economy that heavily impacts local real estate.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              While direct investment in the casino operators themselves carries regulatory and operational risks, investing in REITs that own the adjoining luxury malls, feeder hotels, and transit hubs offers a high-yield, asset-backed alternative to capture the "Genting Effect."
            </p>
          </div>

          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary pt-2">Key Beneficiaries</h3>
          <div className="space-y-4">
            {hospitalityReits.map(reit => (
              <div key={reit.id} className="bg-white p-5 rounded shadow-sm border-l-4 border-slate-200 flex flex-col sm:flex-row gap-4 hover:border-brand-secondary transition duration-200">
                <div className="sm:w-1/3 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-slate-100 pb-4 sm:pb-0 sm:pr-4">
                  <h4 className="font-bold text-brand-primary">{reit.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">{reit.ticker}</p>
                  <div className="flex justify-between items-end">
                     <div>
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Dist. Yield</p>
                       <p className="text-2xl font-mono text-brand-accent font-bold">{reit.yieldPercent.toFixed(1)}%</p>
                     </div>
                     <Link to={`/reits/${reit.id}`} className="text-[10px] uppercase font-bold text-brand-primary hover:underline flex items-center gap-1">
                       View <ExternalLink className="w-3 h-3" />
                     </Link>
                  </div>
                </div>
                <div className="sm:w-2/3 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-snug">{reit.casinoProximity}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Exposure Assets</p>
                    <div className="flex flex-wrap gap-2">
                      {reit.majorTenants.slice(0,3).map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-white border border-slate-200 rounded font-medium text-slate-700 flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-slate-400" /> {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
           <div className="bg-white border-t-4 border-brand-primary p-5 rounded shadow-sm border-x border-b border-slate-100">
             <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Investment Strategy</h3>
             <ul className="space-y-3 text-sm text-slate-600">
               <li className="flex gap-2">
                 <div className="w-5 h-5 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px] flex-shrink-0">1</div>
                 <p className="text-xs leading-relaxed">Focus on REITs with diversified portfolios to cushion against seasonal tourism dips.</p>
               </li>
               <li className="flex gap-2">
                 <div className="w-5 h-5 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px] flex-shrink-0">2</div>
                 <p className="text-xs leading-relaxed">Look for assets with <span className="font-bold text-slate-900">triple-net leases</span> on hotel properties minimizing operational cost risks.</p>
               </li>
               <li className="flex gap-2">
                 <div className="w-5 h-5 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px] flex-shrink-0">3</div>
                 <p className="text-xs leading-relaxed">Monitor international flight capacities to KLIA as a leading indicator for these assets.</p>
               </li>
             </ul>
           </div>

           <div className="bg-brand-secondary text-brand-primary text-center p-6 rounded shadow-sm border-b-4 border-[#cfa235]">
              <Ticket className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Build Your Portfolio</h3>
              <p className="text-xs text-brand-primary/80 mb-5 leading-relaxed">Gain exposure to premium Malaysian hospitality assets through top brokerage platforms.</p>
              <button className="w-full py-2 bg-brand-primary text-white text-xs uppercase tracking-widest font-bold rounded hover:bg-brand-primary/90 transition shadow-sm">
                Open Brokerage Acc
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
