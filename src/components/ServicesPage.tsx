import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { ServiceDetailModal } from './ServiceDetailModal';
import { Search, Eye, MessageSquare, ClipboardCheck, HelpCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'finishing', label: 'Plafon & Finishing' },
    { id: 'struktur', label: 'Baja Ringan & Struktur' },
    { id: 'renovasi', label: 'Renovasi & Perbaikan' },
    { id: 'interior', label: 'Kitchen Set & Interior' },
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesQuery =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.scopeOfWork.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#F3F5F7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
            Katalog Lengkap
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight text-balance">
            Layanan Jasa Konstruksi &amp; Interior
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Pilih jenis pekerjaan yang Anda butuhkan. Kami siap mendiskusikan rincian teknis, survei lokasi di Lampung, dan menyusun estimasi anggaran yang transparan.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari layanan (plafon, baja ringan, ruko)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#245B86] text-slate-800"
              />
            </div>

            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#16324F] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">
              Tidak ditemukan layanan dengan kata kunci &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-bold text-[#245B86] underline cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => {
              const whatsappLink = getServiceWhatsAppUrl(service.title);

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-white">
                      Wilayah Lampung
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#16324F]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-1">
                      {service.shortDesc}
                    </p>

                    {/* Scope bullets teaser */}
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                      <span className="font-semibold text-slate-700 block text-[11px] uppercase tracking-wider">
                        Cakupan Pekerjaan:
                      </span>
                      <p className="line-clamp-2">
                        {service.scopeOfWork.slice(0, 2).join(' • ')}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalService(service)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16324F] hover:text-[#245B86] cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#245B86]" />
                        <span>Lihat Rincian</span>
                      </button>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-md transition-colors shadow-xs active:scale-95 whitespace-nowrap"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#F28C28]" />
                        <span>Minta Estimasi</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </div>
  );
};
