import React from 'react';
import { Logo } from './Logo';
import { PageTab } from '../types';
import {
  DISPLAY_PHONE,
  OWNER_NAME,
  BUSINESS_LOCATION,
  OPERATIONAL_AREA,
  getWhatsAppUrl,
  getServiceWhatsAppUrl,
} from '../utils/whatsapp';
import { Phone, MapPin, User, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickServices = [
    'Pemasangan Plafon',
    'Pemasangan Baja Ringan',
    'Renovasi Rumah',
    'Perbaikan Bangunan',
    'Pembuatan Kitchen Set',
    'Pembangunan Rumah',
  ];

  return (
    <footer className="bg-[#16324F] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" showSubtitle={true} />
            <p className="text-sm leading-relaxed text-slate-300 pr-4">
              Jasa renovasi rumah, pemasangan plafon gypsum &amp; PVC, rangka atap baja ringan, pembuatan kitchen set kustom, dan konstruksi bangunan di wilayah Lampung. Mengutamakan transparansi biaya dan komunikasi langsung bersama pemilik proyek.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>Estimasi biaya jelas sebelum pelaksanaan pekerjaan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>Konsultasi ramah via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Navigasi Utama */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wide uppercase">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('beranda');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('tentang');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('layanan');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Daftar Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('proyek');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Galeri &amp; Inspirasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('artikel');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Artikel Konstruksi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('kontak');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kontak Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Layanan Unggulan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wide uppercase">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-sm">
              {quickServices.map((service) => (
                <li key={service}>
                  <a
                    href={getServiceWhatsAppUrl(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#F28C28] group-hover:translate-x-0.5 transition-transform" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi Usaha & Kontak */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wide uppercase">
              Kontak &amp; Wilayah
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Pemilik Usaha</span>
                  <span className="font-medium text-white">{OWNER_NAME}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Alamat Domisili</span>
                  <span className="text-white">{BUSINESS_LOCATION}</span>
                  <span className="block text-xs text-slate-400 mt-0.5">
                    Wilayah Layanan: {OPERATIONAL_AREA}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">WhatsApp Resmi</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#F28C28] hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 text-xs font-bold text-white bg-[#245B86] hover:bg-[#1a4465] rounded-md transition-colors"
              >
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Bottom legal line */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} MITRA KONSTRUKSI. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-slate-400">
            Jasa Konstruksi, Renovasi, Plafon, Baja Ringan, dan Interior Bangunan di Lampung.
          </p>
        </div>
      </div>
    </footer>
  );
};
