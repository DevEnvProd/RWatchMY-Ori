import { useState } from 'react';
import { Link } from 'react-router-dom';
import { reitsData, Sector } from '../data/reits';
import { Search, Filter, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<Sector | 'All'>('All');

  const filteredReits = reitsData.filter(reit => {
    const matchesSearch = reit.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          reit.ticker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || reit.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const sectors: (Sector | 'All')[] = ['All', 'Hospitality', 'Retail', 'Industrial', 'Office', 'Diversified'];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">REIT Directory</h1>
        <p className="text-sm text-slate-600">Access data for Malaysian Real Estate Investment Trusts.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search ticker or name..." 
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          {sectors.map(sector => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                selectedSector === sector 
                  ? 'bg-brand-primary text-white border border-brand-primary' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden text-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3 font-bold">REIT Name</th>
                <th className="px-4 py-3 font-bold">Sector</th>
                <th className="px-4 py-3 font-bold text-right">Price (RM)</th>
                <th className="px-4 py-3 font-bold text-right">Yield (%)</th>
                <th className="px-4 py-3 font-bold text-right">P/NAV</th>
                <th className="px-4 py-3 font-bold text-right">Gearing (%)</th>
                <th className="px-4 py-3 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredReits.map(reit => {
                const trendUp = reit.priceTrend[reit.priceTrend.length - 1] >= reit.priceTrend[reit.priceTrend.length - 2];
                return (
                  <tr key={reit.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-4 py-3">
                      <div className="font-bold text-brand-primary">{reit.ticker}</div>
                      <div className="text-[10px] text-slate-500">{reit.name}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded text-[9px] uppercase font-bold tracking-wider">
                        {reit.sector}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1 text-slate-800 font-mono font-medium">
                        {reit.price.toFixed(2)}
                        {trendUp ? <ArrowUpRight className="w-3 h-3 text-brand-accent" /> : <ArrowDownRight className="w-3 h-3 text-red-500" />}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-mono font-bold text-brand-accent">
                        {reit.yieldPercent.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-xs">
                      <span className={reit.priceToNav < 1 ? 'text-brand-accent font-medium' : 'text-slate-600'}>
                        {reit.priceToNav.toFixed(2)}x
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-xs text-slate-600">
                      {reit.gearingPercent.toFixed(1)}%
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Link 
                        to={`/reits/${reit.id}`}
                        className="inline-flex items-center justify-center px-3 py-1.5 bg-white border border-brand-primary text-[10px] uppercase tracking-wider font-bold rounded text-brand-primary hover:bg-brand-primary hover:text-white transition"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
              {filteredReits.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-slate-500">
                    No REITs found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
