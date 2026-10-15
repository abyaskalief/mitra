import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, MapPin, Calculator, CalendarCheck2, ArrowRight } from 'lucide-react';

export const WorkProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Hubungi Kami Melalui WhatsApp',
      desc: 'Klik tombol WhatsApp di website ini untuk memulai obrolan langsung bersama tim kami.',
    },
    {
      number: '02',
      icon: MapPin,
      title: 'Sampaikan Kebutuhan & Lokasi',
      desc: 'Jelaskan jenis pekerjaan (renovasi, atap, plafon, kitchen set) serta lokasi properti Anda di Lampung.',
    },
    {
      number: '03',
      icon: Calculator,
      title: 'Diskusikan Spesifikasi & Estimasi Biaya',
      desc: 'Kami mendiskusikan opsi material, survei lokasi bila dibutuhkan, serta menghitung estimasi biaya secara transparan.',
    },
    {
      number: '04',
      icon: CalendarCheck2,
      title: 'Sepakati Jadwal & Ruang Lingkup',
      desc: 'Menyetujui rincian pekerjaan dan tanggal mulai sebelum pelaksanaan dilakukan secara rapi di lapangan.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
            Alur Pengerjaan Transparan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] tracking-tight mt-1 text-balance">
            4 Langkah Mudah Memulai Pekerjaan Bersama Kami
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Proses pemesanan yang jelas, ramah, dan tanpa birokrasi rumit untuk kenyamanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#F3F5F7] rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#245B86]/40 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#16324F] shadow-2xs">
                      <Icon className="w-5 h-5 text-[#F28C28]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#16324F]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-lg shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#F28C28]" />
            <span>Mulai Langkah 1: Chat WhatsApp Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
};
