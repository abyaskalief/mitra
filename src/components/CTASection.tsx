import React from 'react';
import { getWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';
import { MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';

export const CTASection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#16324F] to-[#245B86] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-bold tracking-wider uppercase text-amber-300">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>Konsultasi Bebas Biaya</span>
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
          Punya Rencana Renovasi atau Bangun Rumah?
        </h2>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
          Konsultasikan kebutuhan pekerjaan Anda bersama MITRA KONSTRUKSI. Sampaikan jenis pekerjaan dan lokasi agar kami dapat membantu mendiskusikan langkah berikutnya.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-[#16324F] bg-white hover:bg-slate-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            <MessageSquare className="w-5 h-5 text-[#F28C28]" />
            <span>Hubungi MITRA KONSTRUKSI</span>
          </a>

          <a
            href={`tel:${DISPLAY_PHONE}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/20 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-[#F28C28]" />
            <span>Telepon: {DISPLAY_PHONE}</span>
          </a>
        </div>

        <p className="text-xs text-slate-300/80 pt-2">
          Melayani wilayah Lampung Tengah, Bandar Lampung, Metro, dan seluruh wilayah Lampung.
        </p>
      </div>
    </section>
  );
};
