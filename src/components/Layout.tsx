// Using framer-motion requires package to be installed. Wait for install. Wait for install to complete.
// Setting up the skeleton for the layout.

import { Link, Outlet, useLocation } from 'react-router-dom';
import { BarChart3, Building, Home, LayoutDashboard, LineChart, BookOpen, Info, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'REIT Directory', path: '/reits', icon: Building },
    { name: 'Hospitality Focus', path: '/sectors/hospitality', icon: Home },
    { name: 'Compare', path: '/compare', icon: LineChart },
    { name: 'Learn', path: '/learn', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-bg text-brand-text">
      {/* Top Navbar */}
      <header className="bg-brand-primary text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                 <div className="w-8 h-8 bg-brand-secondary rounded flex items-center justify-center">
                   <span className="text-brand-primary font-bold text-xl">R</span>
                 </div>
                 <span className="font-heading font-bold text-xl tracking-tight text-white">
                    REIT WATCH <span className="text-brand-secondary">MY</span>
                 </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300 uppercase tracking-widest">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "transition-colors flex items-center gap-2 py-5 border-b-2",
                      location.pathname === item.path 
                        ? "border-brand-secondary text-white" 
                        : "border-transparent hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs font-mono bg-[#0a2a44] py-2 px-4 rounded my-auto">
              <span className="text-slate-400">KLREI:</span>
              <span className="text-brand-accent">842.15 (+0.42%)</span>
              <span className="border-l border-slate-700 ml-2 pl-4 text-slate-400">VOL:</span>
              <span>1.2B</span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-[#0a2a44] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-[#0a2a44]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-slate-300 uppercase tracking-widest font-medium text-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md flex items-center gap-2",
                  location.pathname === item.path 
                    ? "bg-[#0a2a44] text-white" 
                    : "hover:bg-[#0a2a44] hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 flex flex-col overflow-hidden">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto min-h-10 px-4 flex items-center justify-between shrink-0">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4 py-2">
          <div className="flex items-center gap-6 text-[10px] font-medium text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Yield Green: Distributing &gt; 5.5%
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
              Gold: High-Growth Hospitality
            </div>
          </div>
          <div className="text-[10px] text-slate-400 italic">
            Data updated: Oct 23, 2023 | Source: Bursa Malaysia & Internal Analysis
          </div>
        </div>
      </footer>
    </div>
  );
}
