import { useParams, Link } from 'react-router-dom';
import { reitsData } from '../data/reits';
import { ArrowLeft, Building2, TrendingUp, Info, Ticket } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export function ReitDetail() {
  const { id } = useParams<{ id: string }>();
  const reit = reitsData.find(r => r.id === id);

  if (!reit) {
    return <div className="p-8 text-center bg-white rounded shadow-sm border border-slate-100">REIT not found. <Link to="/reits" className="text-brand-primary underline">Go back</Link></div>;
  }

  return (
    <div className="space-y-4">
      {/* Back & Breadcrumb */}
      <Link to="/reits" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-primary transition">
        <ArrowLeft className="w-3 h-3 mr-1" /> Back to Directory
      </Link>

      {/* Header */}
      <div className="bg-white p-5 rounded shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-slate-900">{reit.name}</h1>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200">{reit.ticker}</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded">
            {reit.sector}
          </span>
        </div>
        <div className="flex gap-6">
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Current Price</p>
            <p className="text-2xl font-mono font-bold text-slate-900">RM {reit.price.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Distribution Yield</p>
            <p className="text-2xl font-mono font-bold text-brand-accent">{reit.yieldPercent.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <MetricCard label="Net Asset Value" value={`RM ${reit.nav.toFixed(2)}`} />
            <MetricCard label="Price to NAV" value={`${reit.priceToNav.toFixed(2)}x`} highlight={reit.priceToNav < 1} />
            <MetricCard label="Gearing Ratio" value={`${reit.gearingPercent.toFixed(1)}%`} />
            <MetricCard label="Market Cap" value={`RM ${reit.marketCapBillion}B`} />
            <MetricCard label="Occupancy Rate" value={`${reit.occupancyPercent}%`} highlight />
            {reit.waleYears && <MetricCard label="WALE" value={`${reit.waleYears} Years`} />}
          </div>

          {/* Chart */}
          <div className="bg-white p-5 rounded shadow-sm border border-slate-100">
             <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4 flex items-center gap-2">Historical Distribution Yield</h3>
             <div className="h-[250px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={reit.historicalYields} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                   <defs>
                     <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="var(--color-brand-primary)" stopOpacity={0.2}/>
                       <stop offset="95%" stopColor="var(--color-brand-primary)" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                   <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontFamily: 'var(--font-mono)', fontSize: 10}} dy={10} />
                   <YAxis tickFormatter={(val) => `${val}%`} axisLine={false} tickLine={false} tick={{fontFamily: 'var(--font-mono)', fontSize: 10}} />
                   <Tooltip 
                     contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', fontSize: '12px' }}
                     labelStyle={{ fontWeight: 'bold', color: '#1E293B', marginBottom: '4px' }}
                     formatter={(value: number) => [`${value}%`, 'Yield']}
                   />
                   <Area type="monotone" dataKey="yield" stroke="var(--color-brand-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorYield)" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </div>

          {/* Description & Overview */}
          <div className="bg-white p-5 rounded shadow-sm border border-slate-100 space-y-4 flex flex-col">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-2">Overview</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{reit.description}</p>
            </div>
            
            <div className="border-t border-slate-100 pt-4 flex-grow">
              <h4 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Investment Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {reit.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <div className="w-1 h-1 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-4">
          
          {/* Major Tenants */}
          <div className="bg-white p-5 rounded shadow-sm border border-slate-100 border-t-4 border-brand-primary">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Major Assets / Tenants</h3>
            <ul className="space-y-2">
              {reit.majorTenants.map((t, i) => (
                <li key={i} className="flex items-start gap-2 p-2 bg-slate-50 border border-slate-100 rounded text-xs text-slate-700">
                  <Building2 className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="font-medium leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

           {/* Casino/Hospitality Spotlight (Conditional) */}
          {reit.casinoProximity && (
            <div className="bg-brand-secondary text-brand-primary p-5 rounded border border-[#cfa235] relative shadow-sm">
               <div className="relative z-10">
                 <h3 className="font-bold flex uppercase tracking-wide text-xs items-center gap-1.5 mb-2">
                   <Ticket className="w-4 h-4" /> Tourism & Casino Prox.
                 </h3>
                 <p className="text-xs text-brand-primary/80 leading-relaxed mb-3">
                   {reit.casinoProximity}
                 </p>
                 <Link to="/sectors/hospitality" className="inline-flex items-center text-[10px] font-bold bg-white text-brand-primary px-2 py-1 rounded uppercase tracking-wider hover:bg-slate-50 transition">
                   Read Sector Analysis <ArrowRight className="w-3 h-3 ml-1" />
                 </Link>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className={`p-3 rounded border-l-2 ${highlight ? 'bg-white border-y border-r border-[#f1f5f9] border-l-brand-accent box-border' : 'bg-white border border-[#f1f5f9] border-l-slate-300 box-border'} shadow-sm`}>
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5 whitespace-nowrap">{label}</p>
      <p className={`text-lg font-mono font-bold ${highlight ? 'text-brand-accent' : 'text-slate-900'}`}>{value}</p>
    </div>
  );
}

// ArrowRight mock component if not imported
function ArrowRight({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
