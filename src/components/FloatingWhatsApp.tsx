import React, { useState } from 'react';
import { getWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Friendly popover on initial visit */}
      {showNotification && (
        <div className="bg-white text-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 text-xs max-w-xs relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 cursor-pointer"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-[#16324F] flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Ada rencana renovasi di Lampung?</span>
          </div>
          <p className="text-slate-600 pr-3">
            Konsultasikan ide atau kendala bangunan Anda bersama Mitra Konstruksi via WhatsApp.
          </p>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group focus:outline-none"
        aria-label={`Hubungi MITRA KONSTRUKSI via WhatsApp di ${DISPLAY_PHONE}`}
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
          Konsultasi WhatsApp
        </span>
      </a>
    </div>
  );
};
