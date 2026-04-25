import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Building2, Ticket } from 'lucide-react';
import { reitsData } from '../data/reits';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell } from 'recharts';

export function Home() {
  const topYields = [...reitsData].sort((a, b) => b.yieldPercent - a.yieldPercent).slice(0, 5);
  
  // Data for the bubble chart. X = Market Cap, Y = Yield, Z = Price
  const bubbleData = reitsData.map(r => ({
    name: r.ticker,
    yield: r.yieldPercent,
    mcap: r.marketCapBillion,
    sector: r.sector,
    id: r.id
  }));

  const sectorColors: Record<string, string> = {
    'Hospitality': '#E8B83E',
    'Retail': '#0F3B5E',
    'Industrial': '#2E9A6E',
    'Office': '#64748B',
    'Diversified': '#3B82F6'
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Hero Section */}
      <section className="bg-white rounded p-6 shadow-sm border border-slate-100 flex flex-col xl:flex-row items-center gap-6">
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-brand-primary/10 text-brand-primary rounded text-[10px] uppercase font-bold tracking-wider">
            <TrendingUp className="w-3 h-3" /> Market Summary
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Track Yields. <span className="text-brand-primary">Analyze.</span> Invest Smart.
          </h1>
          <p className="text-sm text-slate-600 max-w-xl">
            Institutional-grade analytics for Malaysian Real Estate Investment Trusts, with a special focus on the lucrative hospitality and casino-adjacent sectors.
          </p>
          <div className="flex gap-3">
            <Link to="/reits" className="px-4 py-2 bg-brand-primary text-white text-xs uppercase tracking-widest rounded font-bold hover:bg-brand-primary/90 transition">
              View All REITs
            </Link>
            <Link to="/sectors/hospitality" className="px-4 py-2 bg-white text-brand-primary border border-brand-primary text-xs uppercase tracking-widest rounded font-bold hover:bg-slate-50 transition">
              Hospitality Focus
            </Link>
          </div>
        </div>
        
        {/* Quick Market Stats */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-brand-primary box-border">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Avg Market Yield</p>
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-mono text-brand-accent font-bold">5.8<span className="text-lg">%</span></p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-brand-secondary box-border">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Top Yield (Retail)</p>
               <div className="flex items-baseline gap-1">
                <p className="text-3xl font-mono text-brand-accent font-bold">7.2<span className="text-lg">%</span></p>
               </div>
            </div>
            <div className="bg-brand-secondary/10 p-4 rounded shadow-sm border-l-4 border-brand-secondary col-span-2 box-border">
               <div className="flex justify-between items-center">
                 <div>
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-brand-secondary mb-1"><Ticket className="w-3 h-3"/> Hospitality Sector</div>
                    <p className="text-sm text-slate-700 font-medium leading-tight">Tourism recovery driving record hotel occupancies near Genting.</p>
                 </div>
                 <ArrowRight className="text-brand-secondary w-5 h-5 ml-4" />
               </div>
            </div>
        </div>
      </section>

      {/* Specialty Banner */}
      <Link to="/sectors/hospitality" className="block">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-brand-primary text-white rounded p-6 flex flex-col md:flex-row justify-between items-center shadow-sm border-l-4 border-brand-secondary cursor-pointer"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
               <span className="text-[10px] font-bold bg-brand-secondary text-brand-primary px-2 py-0.5 rounded uppercase">Sector Spotlight</span>
            </div>
            <h3 className="text-lg font-bold mb-1">Hospitality REIT Deep Dive: Genting Area Properties</h3>
            <p className="text-xs text-slate-300 max-w-2xl">Discover how integrated resorts and casino proximity drive asymmetric returns for surrounding hospitality assets like Sunway REIT and others.</p>
          </div>
          <div className="hidden md:flex bg-white/10 p-3 rounded mt-4 md:mt-0">
            <TrendingUp className="w-6 h-6 text-brand-secondary" />
          </div>
        </motion.div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Bubble Chart */}
        <section className="lg:col-span-7 bg-white rounded p-5 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary">Market Overview (Yield vs Cap)</h2>
            <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">Size = Mkt Cap | Color = Yield</span>
          </div>
          <div className="h-[400px] w-full flex-grow relative border-2 border-dashed border-slate-50">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis type="number" dataKey="mcap" name="Market Cap" unit="B" tick={{fontSize: 10, fontFamily: 'var(--font-mono)'}} />
                <YAxis type="number" dataKey="yield" name="Yield" unit="%" tick={{fontSize: 10, fontFamily: 'var(--font-mono)'}} domain={['dataMin - 1', 'dataMax + 1']} />
                <ZAxis type="number" dataKey="mcap" range={[200, 1000]} name="Market Cap" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '4px', border: '1px solid #f1f5f9', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', fontSize: '12px' }} />
                <Scatter name="REITs" data={bubbleData}>
                  {bubbleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={sectorColors[entry.sector] || '#ccc'} fillOpacity={0.8} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Top Yields Table */}
        <section className="lg:col-span-5 bg-white rounded shadow-sm border border-slate-100 flex flex-col p-5">
          <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary">Top Yield Performers</h2>
            <Link to="/reits" className="text-[10px] text-brand-primary font-bold hover:underline uppercase">Full Directory &rarr;</Link>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 text-[10px] uppercase tracking-wider">
                <th className="py-2">REIT Name</th>
                <th className="py-2">Sector</th>
                <th className="py-2 text-right">Yield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {topYields.map((reit, index) => (
                <tr key={reit.id} className="hover:bg-slate-50 transition">
                  <td className="py-3">
                    <Link to={`/reits/${reit.id}`} className="font-bold text-brand-primary hover:underline">{reit.ticker}</Link>
                    <div className="text-[10px] text-slate-500 line-clamp-1">{reit.name}</div>
                  </td>
                  <td className="py-3">
                    <span className="text-[9px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded uppercase">{reit.sector}</span>
                  </td>
                  <td className="py-3 text-right">
                    <span className="font-mono font-bold text-brand-accent">{reit.yieldPercent.toFixed(1)}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

    </div>
  );
}
