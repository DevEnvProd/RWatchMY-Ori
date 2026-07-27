import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const articleIndex = articles.findIndex(a => a.slug === slug || a.id === slug);
  const article = articles[articleIndex];

  if (!article) {
    return (
      <div className="p-8 text-center bg-white rounded shadow-sm border border-slate-100 max-w-xl mx-auto my-12">
        <h1 className="text-xl font-bold text-slate-800 mb-2">Article Not Found</h1>
        <p className="text-xs text-slate-500 mb-4">The article you are looking for does not exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-brand-primary/90">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to News & Articles
        </Link>
      </div>
    );
  }

  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice((articleIndex * 3) % (articles.length - 3), ((articleIndex * 3) % (articles.length - 3)) + 3);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Navigation & Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to News & Articles
        </Link>

        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">
          Article {articleIndex + 1} of {articles.length}
        </span>
      </div>

      {/* Main Article Container */}
      <article className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
        {/* Banner Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-flex items-center gap-1 bg-brand-secondary text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded mb-2">
              <Tag className="w-2.5 h-2.5" /> {article.category}
            </span>
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-white mb-2">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-secondary" /> {article.displayDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-brand-secondary" /> {article.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-secondary" /> {article.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-8 space-y-4 text-slate-700 text-sm leading-relaxed border-b border-slate-100">
          <div
            className="prose max-w-none text-slate-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Share & Info Footer */}
        <div className="px-6 py-4 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Published:</span>
            <span>{article.displayDate}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <Share2 className="w-3.5 h-3.5" />
            <span>Official Release</span>
          </div>
        </div>
      </article>

      {/* Prev / Next Pagination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevArticle ? (
          <Link
            to={`/blog/${prevArticle.slug}`}
            className="p-4 bg-white rounded border border-slate-200 hover:border-brand-primary transition-colors flex items-center gap-3 text-left group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-brand-primary shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                Previous Article ({prevArticle.displayDate})
              </span>
              <p className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-brand-primary transition-colors">
                {prevArticle.title}
              </p>
            </div>
          </Link>
        ) : <div />}

        {nextArticle ? (
          <Link
            to={`/blog/${nextArticle.slug}`}
            className="p-4 bg-white rounded border border-slate-200 hover:border-brand-primary transition-colors flex items-center justify-end gap-3 text-right group sm:col-start-2"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                Next Article ({nextArticle.displayDate})
              </span>
              <p className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-brand-primary transition-colors">
                {nextArticle.title}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand-primary shrink-0" />
          </Link>
        ) : <div />}
      </div>

      {/* Related Articles */}
      <div className="bg-white p-6 rounded shadow-sm border border-slate-100 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" /> More Articles in Series
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.id}
              to={`/blog/${rel.slug}`}
              className="group p-3 rounded bg-slate-50 border border-slate-100 hover:border-brand-primary transition-colors"
            >
              <div className="text-[10px] text-brand-accent font-mono mb-1">{rel.displayDate}</div>
              <h4 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-brand-primary transition-colors mb-1">
                {rel.title}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">{rel.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
