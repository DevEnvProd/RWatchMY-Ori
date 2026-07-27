import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

export function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-brand-primary rounded p-6 md:p-8 text-white relative overflow-hidden shadow-sm border-l-4 border-brand-secondary">
        <div className="relative z-10 max-w-3xl">
          <span className="text-[10px] font-bold bg-brand-secondary text-brand-primary px-2.5 py-1 rounded uppercase tracking-wider mb-3 inline-block">
            Official Blog & News Hub
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">News & Articles</h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Stay informed with our latest news, operational insights, security breakdowns, game mechanics, and industry analysis updated daily from June 3 to July 9, 2026.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-brand-primary text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Count */}
      <div className="flex justify-between items-center text-xs text-slate-500 px-1">
        <span>Showing <strong className="text-slate-800">{filteredArticles.length}</strong> of {articles.length} articles</span>
        <span className="text-[11px] text-slate-400">Date Range: 3 Jun 2026 – 9 Jul 2026</span>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
          >
            {/* Article Image */}
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <span className="absolute top-2 left-2 bg-brand-primary/90 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                <Tag className="w-2.5 h-2.5 text-brand-secondary" /> {article.category}
              </span>
              <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5 text-brand-secondary" /> {article.displayDate}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-sm text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2 mb-2 leading-snug">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" /> {article.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {article.readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${article.slug}`}
                  className="font-bold text-brand-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform uppercase text-[10px] tracking-wider"
                >
                  Read <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="p-8 text-center bg-white rounded border border-slate-200">
          <p className="text-sm text-slate-500">No articles matched your search or category criteria.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="mt-3 text-xs text-brand-primary font-bold uppercase tracking-wider hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
