import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { PageTab } from '../types';
import { CheckCircle2, MessageSquare, ArrowDown, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const whatsappUrl = getWhatsAppUrl();

  const keyStrengths = [
    'Layanan sesuai kebutuhan',
    'Konsultasi pekerjaan',
    'Estimasi biaya sebelum pekerjaan',
    'Wilayah layanan Lampung',
  ];

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F3F5F7] border border-slate-200 text-xs font-bold text-[#16324F] tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
              <span>SOLUSI KONSTRUKSI &amp; INTERIOR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16324F] tracking-tight leading-[1.15] text-balance">
              Bangun, Renovasi, dan Wujudkan Ruang Impian Anda Bersama Mitra Konstruksi
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              MITRA KONSTRUKSI melayani pekerjaan renovasi rumah, pemasangan plafon, baja ringan, pembuatan kitchen set, dan berbagai kebutuhan konstruksi bangunan di wilayah Lampung.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap active:scale-95"
              >
                <MessageSquare className="w-5 h-5 text-[#F28C28]" />
                <span>Konsultasi via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('layanan')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#16324F] bg-[#F3F5F7] hover:bg-slate-200/80 border border-slate-300/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Lihat Layanan Kami</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Key Strengths (Honest, verified trust signals) */}
            <div className="pt-6 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyStrengths.map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#245B86] shrink-0" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <img
                src="/src/assets/images/hero_construction_modern_1792054799491.jpg"
                alt="Konstruksi bangunan modern MITRA KONSTRUKSI di Lampung"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />

              {/* Informational overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#16324F] mb-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>Lampung Tengah &amp; Sekitarnya</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Diskusi ruang, material, &amp; estimasi biaya yang transparan bersama pemilik proyek.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#245B86] bg-blue-50 px-2 py-1 rounded shrink-0">
                    Respon Cepat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
