import React, { useState } from 'react';
import {
  OWNER_NAME,
  DISPLAY_PHONE,
  BUSINESS_LOCATION,
  OPERATIONAL_AREA,
  getContactFormWhatsAppUrl,
  getWhatsAppUrl,
} from '../utils/whatsapp';
import { ContactFormData } from '../types';
import { MessageSquare, Phone, MapPin, User, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    whatsappNumber: '',
    serviceType: 'Pemasangan Plafon',
    location: '',
    estimatedBudget: '',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Pemasangan Plafon (Gypsum / PVC)',
    'Pemasangan Rangka Atap Baja Ringan',
    'Renovasi Rumah (Parsial / Total)',
    'Perbaikan Bangunan (Kebocoran / Retak)',
    'Pembuatan Kitchen Set Custom',
    'Pembangunan Rumah dari Nol',
    'Renovasi Kantor & Ruko Usaha',
    'Pekerjaan Interior & Built-in',
    'Pekerjaan Lainnya',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Nama lengkap wajib diisi.';
    }
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'Nomor WhatsApp wajib diisi.';
    } else if (!/^(\+?62|08)[0-9]{8,12}$/.test(formData.whatsappNumber.replace(/[\s-]/g, ''))) {
      errs.whatsappNumber = 'Format nomor WhatsApp belum sesuai (contoh: 0812xxxxxxxx).';
    }
    if (!formData.location.trim()) {
      errs.location = 'Lokasi pekerjaan di Lampung wajib diisi.';
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Deskripsi kebutuhan wajib diisi.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Format automatic WhatsApp message and trigger redirect
    const url = getContactFormWhatsAppUrl({
      fullName: formData.fullName,
      whatsappNumber: formData.whatsappNumber,
      serviceType: formData.serviceType,
      location: formData.location,
      estimatedBudget: formData.estimatedBudget,
      projectDescription: formData.projectDescription,
    });

    // Open WhatsApp in a clean window/tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#F3F5F7] min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
            Hubungi Kami
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight text-balance">
            Konsultasi Rencana Bangunan Anda
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Isi formulir di bawah ini untuk menyusun ringkasan kebutuhan proyek Anda secara otomatis, kemudian lanjutkan diskusi langsung dengan kami via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business & Owner Contact Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#245B86]">
                Identitas Resmi Usaha
              </span>
              <h2 className="text-2xl font-black text-[#16324F] tracking-tight mt-1">
                MITRA KONSTRUKSI
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Jasa Konstruksi, Renovasi, dan Interior Bangunan
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-100 text-sm">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Pemilik Usaha</span>
                  <span className="font-bold text-[#16324F]">{OWNER_NAME}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Alamat Domisili</span>
                  <span className="font-semibold text-slate-800">{BUSINESS_LOCATION}</span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Wilayah Operasional: {OPERATIONAL_AREA}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Nomor WhatsApp Resmi</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#16324F] hover:text-[#245B86] hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-[#F3F5F7] border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#16324F] block">
                Lebih Suka Chat Langsung?
              </span>
              <p className="text-xs text-slate-600">
                Anda juga bisa langsung mengirim pesan singkat via WhatsApp tanpa mengisi formulir.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#245B86] hover:underline pt-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>Buka WhatsApp Sekarang &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-[#16324F] mb-1">
              Formulir Permintaan Estimasi &amp; Konsultasi
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Formulir ini akan merangkum kebutuhan Anda menjadi pesan WhatsApp terstruktur yang siap Anda kirimkan.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Formulir Berhasil Disusun!</p>
                  <p className="mt-0.5">
                    Halaman WhatsApp telah dibuka dengan pesan rangkuman Anda. Jika tidak terbuka otomatis, silakan klik tombol di bawah ini.
                  </p>
                  <a
                    href={getContactFormWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-emerald-900 underline mt-2"
                  >
                    Kirim Ulang Pesan via WhatsApp &rarr;
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Nama Lengkap */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-lg border bg-slate-50 focus:bg-white text-slate-800 focus:outline-none transition-colors ${
                    errors.fullName ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-slate-200 focus:border-[#245B86]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Nomor WhatsApp */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nomor WhatsApp Anda <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-lg border bg-slate-50 focus:bg-white text-slate-800 focus:outline-none transition-colors ${
                    errors.whatsappNumber ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-slate-200 focus:border-[#245B86]'
                  }`}
                />
                {errors.whatsappNumber && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.whatsappNumber}
                  </p>
                )}
              </div>

              {/* Jenis Pekerjaan & Lokasi Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Jenis Pekerjaan <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-[#245B86]"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Lokasi Pekerjaan di Lampung <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Terbanggi Besar, Lampung Tengah"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border bg-slate-50 focus:bg-white text-slate-800 focus:outline-none transition-colors ${
                      errors.location ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-slate-200 focus:border-[#245B86]'
                    }`}
                  />
                  {errors.location && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Perkiraan Anggaran (Opsional) */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Perkiraan Anggaran Disiapkan <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rp 15 - 30 Juta / Belum ada estimasi"
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-[#245B86]"
                />
              </div>

              {/* Deskripsi Kebutuhan */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Deskripsi Kebutuhan / Ukuran / Kendala <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Jelaskan detail yang ingin dikerjakan, ukuran ruangan, atau keluhan bangunan saat ini..."
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-lg border bg-slate-50 focus:bg-white text-slate-800 focus:outline-none transition-colors ${
                    errors.projectDescription ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-slate-200 focus:border-[#245B86]'
                  }`}
                />
                {errors.projectDescription && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.projectDescription}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#16324F] hover:bg-[#245B86] text-white font-bold transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#F28C28]" />
                  <span>Kirim &amp; Lanjutkan ke WhatsApp</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Setelah klik kirim, aplikasi WhatsApp Anda akan terbuka dengan teks pesan yang sudah terisi otomatis.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
