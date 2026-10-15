import React from 'react';
import { OWNER_NAME, BUSINESS_LOCATION, OPERATIONAL_AREA, getWhatsAppUrl } from '../utils/whatsapp';
import { Target, Compass, HeartHandshake, User, Shield, CheckCircle2, MessageSquare } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const missions = [
    'Membantu pelanggan merencanakan pekerjaan konstruksi sesuai kebutuhan ruang dan fungsi.',
    'Memberikan informasi ruang lingkup dan estimasi biaya secara jelas dan transparan sebelum mulai.',
    'Mengutamakan komunikasi selama proses pekerjaan agar hasil akhir sesuai kesepakatan.',
    'Mengembangkan layanan yang sesuai dengan kebutuhan pelanggan dan tren arsitektur terkini.',
  ];

  const businessValues = [
    {
      title: 'Transparansi Penuh',
      desc: 'Tidak ada biaya tersembunyi. Setiap material dan tahapan kerja dijabarkan secara jelas.',
    },
    {
      title: 'Solutif & Ramah',
      desc: 'Membantu pemilik bangunan menemukan opsi solusi terbaik yang tetap ramah di kantong.',
    },
    {
      title: 'Ketelitian Kerja',
      desc: 'Memperhatikan detail kerapian sambungan plafon, siku dinding, kekuatan rangka, dan finishing.',
    },
    {
      title: 'Tanggung Jawab Personal',
      desc: 'Dipimpin langsung oleh pemilik usaha untuk menjaga komitmen komunikasi yang konsisten.',
    },
  ];

  return (
    <div className="bg-[#F3F5F7] min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
            Profil Usaha
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight text-balance">
            Tentang MITRA KONSTRUKSI
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Menghadirkan layanan jasa konstruksi, renovasi rumah, plafon, baja ringan, dan interior yang terpercaya di wilayah Lampung dengan pendekatan jujur, komunikatif, dan transparan.
          </p>
        </div>

        {/* Identity & Background Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Identitas Pemilik &amp; Wilayah
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#16324F] mt-0.5">
                {OWNER_NAME}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Pendiri &amp; Pemilik MITRA KONSTRUKSI
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-slate-600">
              <span className="block font-semibold text-slate-900">Alamat Domisili:</span>
              <span>{BUSINESS_LOCATION}</span>
              <span className="block text-slate-500 mt-0.5">Jangkauan: {OPERATIONAL_AREA}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
            <p>
              <strong>MITRA KONSTRUKSI</strong> didirikan sebagai jawaban atas kebutuhan masyarakat Lampung akan penyedia jasa konstruksi dan renovasi yang dapat dipercaya, mengutamakan komunikasi dua arah yang hangat, dan memberikan rincian biaya yang transparan tanpa jebakan biaya tersembunyi.
            </p>
            <p>
              Sebagai usaha yang berorientasi pada kepuasan pelanggan, kami tidak mengarang klaim-klaim berlebihan. Fokus utama kami adalah memastikan setiap meter pekerjaan—mulai dari perbaikan atap bocor, pemasangan plafon gypsum estetik, perakitan kitchen set, hingga pembangunan rumah baru—dikerjakan sesuai standar teknis yang baik dengan pemilihan material yang awet.
            </p>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#16324F] text-[#F28C28] flex items-center justify-center mb-5 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#16324F]">
              Visi Kami
            </h3>
            <blockquote className="mt-3 text-sm text-slate-700 italic border-l-2 border-[#F28C28] pl-3 leading-relaxed">
              &ldquo;Menjadi mitra pilihan masyarakat dalam memenuhi kebutuhan renovasi, konstruksi bangunan, dan interior di wilayah Lampung.&rdquo;
            </blockquote>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Visi ini kami wujudkan melalui kerja nyata, kejujuran spesifikasi material, dan dedikasi menjaga amanah setiap pemilik rumah.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#245B86] text-white flex items-center justify-center mb-5 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#16324F]">
              Misi Kami
            </h3>
            <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-slate-700">
              {missions.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#245B86] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nilai-Nilai Usaha */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-[#16324F]">
              Nilai Fondasi Usaha
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Prinsip yang kami pegang teguh dalam setiap proyek pekerjaan di lapangan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {businessValues.map((val) => (
              <div key={val.title} className="p-4 rounded-xl bg-[#F3F5F7] border border-slate-200">
                <h4 className="text-sm font-bold text-[#16324F]">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to WhatsApp */}
        <div className="text-center pt-4">
          <a
            href={getWhatsAppUrl('Halo MITRA KONSTRUKSI, saya membaca profil usaha Anda dan ingin berdiskusi mengenai rencana bangunan saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-xl shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-[#F28C28]" />
            <span>Diskusikan Kebutuhan Anda Bersama Kami</span>
          </a>
        </div>
      </div>
    </div>
  );
};
