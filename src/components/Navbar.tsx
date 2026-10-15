import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageTab } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Menu, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: PageTab;
  onNavigate: (page: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageTab; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'proyek', label: 'Galeri & Inspirasi' },
    { id: 'artikel', label: 'Artikel' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleLinkClick = (page: PageTab) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappHref = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Zone (Single element wordmark lockup) */}
          <button
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center text-left focus:outline-none whitespace-nowrap shrink-0 group cursor-pointer"
            aria-label="Kembali ke Beranda MITRA KONSTRUKSI"
          >
            <Logo showSubtitle={true} />
          </button>

          {/* Zone 2: Navigation Links (Single line, text with subtle indicator) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#16324F] font-bold'
                      : 'text-slate-600 hover:text-[#245B86]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F28C28] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Direct to WhatsApp) + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#16324F] hover:bg-[#245B86] rounded-lg transition-all shadow-xs hover:shadow-md active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-[#F28C28]" />
              <span>Konsultasi Gratis</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#16324F] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
                  )}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 mt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-[#245B86] hover:bg-[#16324F] rounded-lg shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#F28C28]" />
                <span>Chat WhatsApp (08127266292)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
