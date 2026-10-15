import React, { useState } from 'react';
import { articlesData } from '../data/articlesData';
import { ArticleItem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { BookOpen, Calendar, Clock, ArrowRight, X, CheckCircle2, MessageSquare, Search } from 'lucide-react';

export const ArticlesPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articlesData.filter((art) => {
    return (
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="bg-[#F3F5F7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245B86] flex items-center justify-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#F28C28]" />
            <span>Edukasi &amp; Panduan Bangunan</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight text-balance">
            Artikel &amp; Tips Konstruksi Rumah
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Informasi praktis, tips pemilihan material, dan panduan perencanaan renovasi rumah dari MITRA KONSTRUKSI untuk pemilik hunian di Lampung.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari artikel (plafon, baja ringan, anggaran)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#245B86] shadow-2xs text-slate-800"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/95 drop-shadow-xs">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta without pills per zero-pill discipline */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.publishedDate}</span>
                  </span>
                  <span aria-hidden="true">&middot;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readingTime}</span>
                  </span>
                </div>

                <h2 className="text-base font-bold text-[#16324F] group-hover:text-[#245B86] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-1">
                  {article.summary}
                </p>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#16324F]">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F28C28] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image */}
            <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer"
                aria-label="Tutup artikel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
                  {selectedArticle.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1 leading-snug">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-300 mt-2">
                  <span>{selectedArticle.publishedDate}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{selectedArticle.readingTime}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>Oleh Mitra Konstruksi Lampung</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Key Takeaways box */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                  <span>Poin-Poin Penting (Key Takeaways):</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                  {selectedArticle.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#F28C28] font-bold">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Article Content */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Consultation Callout */}
              <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#16324F]">
                    Punya pertanyaan seputar topik ini?
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Tanyakan langsung kepada tim MITRA KONSTRUKSI melalui WhatsApp.
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(`Halo MITRA KONSTRUKSI, saya membaca artikel "${selectedArticle.title}" dan ingin berkonsultasi mengenai penerapannya di proyek saya.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-lg transition-colors whitespace-nowrap shadow-sm shrink-0"
                >
                  <MessageSquare className="w-4 h-4 text-[#F28C28]" />
                  <span>Tanya via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
