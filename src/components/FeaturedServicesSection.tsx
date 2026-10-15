import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem, PageTab } from '../types';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { ServiceDetailModal } from './ServiceDetailModal';
import { MessageSquare, ArrowRight, Eye } from 'lucide-react';

interface FeaturedServicesSectionProps {
  onNavigate: (page: PageTab) => void;
}

export const FeaturedServicesSection: React.FC<FeaturedServicesSectionProps> = ({
  onNavigate,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Take the 6 primary services specified in Prompt 7.B:
  // 1. Pemasangan Plafon
  // 2. Pemasangan Baja Ringan
  // 3. Renovasi Rumah
  // 4. Perbaikan Bangunan
  // 5. Pembuatan Kitchen Set
  // 6. Pembangunan Rumah
  const featuredSix = servicesData.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-[#F3F5F7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
            Layanan Konstruksi &amp; Interior
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16324F] tracking-tight mt-1 text-balance">
            Layanan Unggulan MITRA KONSTRUKSI
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pilihan solusi pengerjaan bangunan dan interior di wilayah Lampung dengan estimasi biaya transparan dan spesifikasi material yang disepakati.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredSix.map((service) => {
            const whatsappLink = getServiceWhatsAppUrl(service.title);

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Service Card Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 drop-shadow-xs">
                    Wilayah Lampung
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#16324F] group-hover:text-[#245B86] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed flex-1">
                    {service.shortDesc}
                  </p>

                  {/* Actions: Lihat Detail & Chat WhatsApp */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16324F] hover:text-[#245B86] py-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#245B86]" />
                      <span>Lihat Detail</span>
                    </button>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-md transition-colors shadow-xs active:scale-95 whitespace-nowrap"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>Konsultasi</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all services footer link */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => {
              onNavigate('layanan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#16324F] hover:text-[#245B86] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <span>Lihat Seluruh 8 Layanan &amp; Spesifikasi Lengkap</span>
            <ArrowRight className="w-4 h-4 text-[#F28C28]" />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
