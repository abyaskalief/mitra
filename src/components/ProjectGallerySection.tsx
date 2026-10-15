import React, { useState } from 'react';
import { galleryItems } from '../data/projectsData';
import { GalleryItem, PageTab } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Sparkles, Maximize2, X, MessageSquare, ArrowRight } from 'lucide-react';

interface ProjectGallerySectionProps {
  onNavigate?: (page: PageTab) => void;
  showAllLink?: boolean;
}

export const ProjectGallerySection: React.FC<ProjectGallerySectionProps> = ({
  onNavigate,
  showAllLink = true,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'plafon', label: 'Plafon' },
    { id: 'baja-ringan', label: 'Baja Ringan' },
    { id: 'renovasi', label: 'Renovasi' },
    { id: 'kitchen-set', label: 'Kitchen Set' },
    { id: 'bangun-rumah', label: 'Bangun Rumah' },
    { id: 'interior', label: 'Interior' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-16 sm:py-20 bg-[#F3F5F7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#245B86] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Inspirasi Desain &amp; Referensi Spesifikasi</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] tracking-tight mt-1 text-balance">
              Galeri Inspirasi Konstruksi &amp; Interior
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              Sebagai usaha baru di Lampung yang menjunjung tinggi transparansi, berikut adalah katalog inspirasi konsep desain dan standar mutu pengerjaan yang dapat kami realisasikan untuk bangunan Anda.
            </p>
          </div>

          {/* Transparent Notice Note */}
          <div className="p-3 bg-blue-50/80 rounded-lg border border-blue-200/60 text-xs text-slate-600 max-w-xs shrink-0">
            <span className="font-bold text-[#16324F] block mb-0.5">Catatan Transparansi:</span>
            Foto di bawah merupakan referensi inspirasi desain arsitektural untuk mendiskusikan konsep visual bangunan Anda.
          </div>
        </div>

        {/* Category Filters (interactive segmented tabs per frontend design guidelines) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#16324F] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all group flex flex-col"
            >
              {/* Image Container with zoom click */}
              <div
                className="relative h-56 bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors pointer-events-none" />

                {/* Honest concept sticker */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#16324F] text-[11px] font-bold px-2.5 py-1 rounded shadow-xs">
                  Inspirasi Desain
                </div>

                {/* Zoom hover button */}
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-[#245B86]">
                  {item.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-[#16324F] mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Features list */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setLightboxItem(item)}
                    className="text-xs font-bold text-[#16324F] hover:text-[#245B86] cursor-pointer"
                  >
                    Perbesar Gambar
                  </button>
                  <a
                    href={getWhatsAppUrl(`Halo MITRA KONSTRUKSI, saya tertarik dengan konsep "${item.title}". Apakah bisa dibuatkan untuk bangunan saya di Lampung?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#16324F] hover:bg-[#245B86] px-3 py-1.5 rounded transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#F28C28]" />
                    <span>Tanya Model Ini</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional View All Link */}
        {showAllLink && onNavigate && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('proyek');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#16324F] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <span>Buka Halaman Galeri Lengkap</span>
              <ArrowRight className="w-4 h-4 text-[#F28C28]" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white cursor-pointer"
                aria-label="Tutup preview foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#245B86] uppercase tracking-wider">
                  {lightboxItem.categoryLabel} &middot; Inspirasi Desain
                </span>
                <h3 className="text-lg font-bold text-[#16324F] mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {lightboxItem.description}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(`Halo MITRA KONSTRUKSI, saya tertarik dengan foto inspirasi "${lightboxItem.title}". Mohon info estimasi biaya jika diterapkan di rumah saya.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-lg transition-colors whitespace-nowrap shadow-sm shrink-0"
              >
                <MessageSquare className="w-4 h-4 text-[#F28C28]" />
                <span>Konsultasikan via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
