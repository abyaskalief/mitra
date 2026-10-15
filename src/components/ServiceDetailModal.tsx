import React from 'react';
import { ServiceItem } from '../types';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { X, Check, HelpCircle, ClipboardList, MessageSquare } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  if (!service) return null;

  const whatsappHref = getServiceWhatsAppUrl(service.title);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Hero Image */}
        <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer"
            aria-label="Tutup detail layanan"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
              Spesifikasi Layanan
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto text-slate-700">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
              Ringkasan Layanan
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              {service.shortDesc}
            </p>
          </div>

          {/* Scope of Work */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#16324F] flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-[#245B86]" />
              <span>Ruang Lingkup Pekerjaan</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {service.scopeOfWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Preparation */}
          <div className="space-y-2 bg-[#F3F5F7] p-4 rounded-xl border border-slate-200">
            <h4 className="text-sm font-bold text-[#16324F]">
              Hal yang Perlu Disiapkan Pelanggan:
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-600 list-disc list-inside">
              {service.customerPreparation.map((prep, idx) => (
                <li key={idx}>{prep}</li>
              ))}
            </ul>
          </div>

          {/* Consultation Stages */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#16324F]">
              Tahapan Konsultasi &amp; Pengerjaan:
            </h4>
            <ol className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {service.consultationSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16324F] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          {service.faqs.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-sm font-bold text-[#16324F] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#F28C28]" />
                <span>Pertanyaan Sering Diajukan (FAQ)</span>
              </h4>
              <div className="space-y-2.5">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">{faq.question}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Konsultasi estimasi biaya disesuaikan dengan kondisi riil di lokasi.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer w-full sm:w-auto"
            >
              Tutup
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-lg shadow-sm transition-colors whitespace-nowrap w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-[#F28C28]" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
