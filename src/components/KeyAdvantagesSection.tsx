import React from 'react';
import {
  MessageCircle,
  FileSpreadsheet,
  Layers,
  PhoneCall,
  SlidersHorizontal,
  MapPin,
} from 'lucide-react';

export const KeyAdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: MessageCircle,
      title: 'Konsultasi Kebutuhan Pekerjaan',
      desc: 'Mendiskusikan apa yang menjadi kendala atau impian renovasi Anda secara mendalam sebelum menentukan langkah teknis.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Estimasi Biaya yang Jelas',
      desc: 'Perhitungan estimasi biaya dirinci secara transparan berdasarkan volume pekerjaan dan spesifikasi material pilihan.',
    },
    {
      icon: Layers,
      title: 'Pilihan Layanan Beragam',
      desc: 'Mencakup pemasangan plafon, atap baja ringan, kitchen set, perbaikan darurat, hingga renovasi menyeluruh.',
    },
    {
      icon: PhoneCall,
      title: 'Komunikasi dengan Pelanggan',
      desc: 'Kemudahan berkoordinasi langsung melalui WhatsApp untuk memastikan setiap detail pekerjaan berjalan sesuai harapan.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Perencanaan Sesuai Kebutuhan',
      desc: 'Pekerjaan dapat direncanakan bertahap menyesuaikan prioritas ruangan dan kesiapan anggaran keluarga Anda.',
    },
    {
      icon: MapPin,
      title: 'Layanan Wilayah Lampung',
      desc: 'Siap melayani kebutuhan konstruksi di Lampung Tengah, Bandar Lampung, Metro, dan area sekitarnya.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F3F5F7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
            Kenapa Memilih Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] tracking-tight mt-1 text-balance">
            Komitmen Keunggulan Layanan Mitra Konstruksi
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Fokus kami adalah kemudahan komunikasi, keterbukaan estimasi, dan hasil pekerjaan yang sesuai kesepakatan bersama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-[#16324F] text-[#F28C28] flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#16324F]">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
