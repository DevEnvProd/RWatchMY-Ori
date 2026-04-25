import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { X, Search } from 'lucide-react';
import { reitsData, REITData } from '../data/reits';

export function Compare() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['sunway', 'pavilion']);
  const [search, setSearch] = useState('');

  const selectedReits = selectedIds.map(id => reitsData.find(r => r.id === id)!).filter(Boolean);
  
  const unselectedReits = reitsData.filter(r => !selectedIds.includes(r.id) && 
    (r.name.toLowerCase().includes(search.toLowerCase()) || r.ticker.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(x => x !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const colors = ['#0F3B5E', '#E8B83E', '#2E9A6E'];

  // Combine historical data for chart
  const years = ['2020', '2021', '2022', '2023', '2024'];
  const chartData = years.map(year => {
    const dataPoint: any = { year };
    selectedReits.forEach((reit) => {
      const yieldForYear = reit.historicalYields.find(y => y.year === year)?.yield || 0;
      dataPoint[reit.ticker] = yieldForYear;
    });
    return dataPoint;
  });

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Compare REITs</h1>
        <p className="text-sm text-slate-600">Side-by-side comparison of yields, NAVs, and fundamentals. (Max 3)</p>
      </div>

      {/* Selection Area */}
      <div className="bg-white p-5 rounded shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 border-r border-slate-100 pr-4">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Find REIT to add..." 
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-primary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {unselectedReits.map(reit => (
                <button
                  key={reit.id}
                  onClick={() => toggleSelect(reit.id)}
                  disabled={selectedIds.length >= 3}
                  className="w-full text-left px-3 py-2 rounded border border-slate-200 hover:bg-slate-50 hover:border-brand-primary disabled:opacity-50 disabled:cursor-not-allowed flex justify-between items-center transition-colors"
                >
                  <span className="text-xs font-bold text-slate-700">{reit.ticker}</span>
                  <span className="text-[10px] uppercase font-bold text-brand-primary">{reit.yieldPercent}% yld</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap gap-4 items-start">
            {selectedReits.map((reit, index) => (
              <div key={reit.id} className="bg-slate-50 border border-slate-200 rounded p-4 flex-1 min-w-[160px] relative">
                <button 
                  onClick={() => toggleSelect(reit.id)}
                  className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 rounded bg-white border border-slate-200"
                >
                  <X className="w-3 h-3" />
                </button>
                <div className="w-2 h-2 rounded-full mb-2" style={{ backgroundColor: colors[index] }}></div>
                <h3 className="font-bold text-sm text-slate-900">{reit.ticker}</h3>
                <p className="text-[10px] text-slate-500 line-clamp-1 mb-2">{reit.name}</p>
                <div>
                  <span className="text-xl font-mono font-bold text-brand-primary">{reit.yieldPercent}%</span>
                </div>
              </div>
            ))}
            {selectedIds.length === 0 && (
              <div className="w-full h-full min-h-[120px] border-2 border-dashed border-slate-200 rounded flex items-center justify-center text-slate-400 text-sm uppercase tracking-widest font-bold">
                Select REITs
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedIds.length > 0 && (
        <>
          {/* Chart Section */}
          <div className="bg-white p-5 rounded shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Yield Comparison</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{fontFamily: 'var(--font-mono)', fontSize: 10}} dy={10} />
                  <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} tick={{fontFamily: 'var(--font-mono)', fontSize: 10}} />
                  <Tooltip contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', fontSize: '12px' }} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                  {selectedReits.map((reit, index) => (
                    <Area 
                      key={reit.ticker}
                      type="monotone" 
                      dataKey={reit.ticker} 
                      stroke={colors[index]} 
                      fill="none" 
                      strokeWidth={2} 
                    />
                  ))}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Table */}
          <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden text-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase tracking-wider text-slate-500">
                    <th className="px-4 py-3 font-bold w-1/4">Metric</th>
                    {selectedReits.map(reit => (
                      <th key={reit.id} className="px-4 py-3 font-bold text-brand-primary border-l border-slate-100">{reit.ticker}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-medium text-slate-600">Price (RM)</td>
                    {selectedReits.map(reit => <td key={reit.id} className="px-4 py-3 font-mono text-xs border-l border-slate-100">{reit.price.toFixed(2)}</td>)}
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-medium text-slate-600">Distribution Yield</td>
                    {selectedReits.map((reit, i) => {
                      const isWinner = reit.yieldPercent === Math.max(...selectedReits.map(r => r.yieldPercent));
                      return <td key={reit.id} className={`px-4 py-3 font-mono font-bold text-xs border-l border-slate-100 ${isWinner ? 'text-brand-accent bg-brand-accent/5' : ''}`}>{reit.yieldPercent.toFixed(1)}% {isWinner && '★'}</td>;
                    })}
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-medium text-slate-600">Price / NAV</td>
                    {selectedReits.map((reit) => {
                      const isDiscount = reit.priceToNav < 1;
                      return <td key={reit.id} className={`px-4 py-3 font-mono text-xs border-l border-slate-100 ${isDiscount ? 'text-brand-accent' : ''}`}>{reit.priceToNav.toFixed(2)}x</td>;
                    })}
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-medium text-slate-600">Gearing Ratio</td>
                    {selectedReits.map(reit => <td key={reit.id} className="px-4 py-3 font-mono text-xs border-l border-slate-100">{reit.gearingPercent.toFixed(1)}%</td>)}
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-medium text-slate-600">Occupancy</td>
                    {selectedReits.map(reit => <td key={reit.id} className="px-4 py-3 font-mono text-xs border-l border-slate-100">{reit.occupancyPercent}%</td>)}
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-xs font-medium text-slate-600">Sector</td>
                    {selectedReits.map(reit => <td key={reit.id} className="px-4 py-3 border-l border-slate-100"><span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[9px] uppercase font-bold tracking-wider text-slate-600">{reit.sector}</span></td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
