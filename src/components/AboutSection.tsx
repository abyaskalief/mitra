import React from 'react';
import { PageTab } from '../types';
import { OWNER_NAME, BUSINESS_LOCATION, OPERATIONAL_AREA } from '../utils/whatsapp';
import { MessageSquareText, Calculator, Ruler, Users, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: PageTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const serviceValues = [
    {
      icon: MessageSquareText,
      title: 'Komunikasi yang Jelas',
      desc: 'Kami mendengarkan keinginan Anda dan menjelaskan setiap tahapan pekerjaan secara terbuka tanpa istilah teknis yang membingungkan.',
    },
    {
      icon: Ruler,
      title: 'Perencanaan Pekerjaan',
      desc: 'Setiap proyek diawali dengan pengukuran dan pemahaman kondisi lapangan agar ruang lingkup pekerjaan tertata rapi.',
    },
    {
      icon: Calculator,
      title: 'Transparansi Estimasi Biaya',
      desc: 'Rincian estimasi biaya disajikan secara terbuka sebelum pekerjaan disepakati, tanpa biaya tersembunyi yang mengejutkan.',
    },
    {
      icon: Users,
      title: 'Penyesuaian Kebutuhan Pelanggan',
      desc: 'Memberikan kebebasan memilih material dan metode pengerjaan yang selaras dengan skala prioritas dan anggaran Anda.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
                Tentang Usaha Kami
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16324F] tracking-tight mt-1 text-balance">
                Mitra Tepat untuk Kebutuhan Konstruksi Anda
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              MITRA KONSTRUKSI merupakan usaha jasa konstruksi yang berfokus pada kebutuhan renovasi, pekerjaan bangunan, dan interior. Kami hadir untuk membantu pelanggan merencanakan pekerjaan sesuai kebutuhan ruang, spesifikasi pekerjaan, dan anggaran yang tersedia.
            </p>

            <div className="p-4 rounded-xl bg-[#F3F5F7] border border-slate-200 text-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200/80">
                <span>Pemilik Usaha:</span>
                <span className="font-bold text-[#16324F]">{OWNER_NAME}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Domisili &amp; Wilayah:</span>
                <span className="font-semibold text-slate-800">{BUSINESS_LOCATION} ({OPERATIONAL_AREA})</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onNavigate('tentang');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#245B86] hover:text-[#16324F] transition-colors cursor-pointer group"
              >
                <span>Pelajari Profil &amp; Komitmen Layanan Kami</span>
                <ArrowRight className="w-4 h-4 text-[#F28C28] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Service Values (2x2 Grid) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {serviceValues.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-5 rounded-xl bg-[#F3F5F7] border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#245B86] mb-3 shadow-2xs">
                      <IconComponent className="w-5 h-5 text-[#F28C28]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#16324F]">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
