import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HeroSection } from './components/HeroSection';
import { FeaturedServicesSection } from './components/FeaturedServicesSection';
import { AboutSection } from './components/AboutSection';
import { KeyAdvantagesSection } from './components/KeyAdvantagesSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { ProjectGallerySection } from './components/ProjectGallerySection';
import { CTASection } from './components/CTASection';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { GalleryPage } from './components/GalleryPage';
import { ArticlesPage } from './components/ArticlesPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageTab>('beranda');

  // Dynamic SEO title synchronization
  useEffect(() => {
    const titles: Record<PageTab, string> = {
      beranda: 'MITRA KONSTRUKSI – Jasa Konstruksi, Renovasi & Interior Lampung',
      tentang: 'Tentang Kami | MITRA KONSTRUKSI Lampung Tengah',
      layanan: 'Layanan Konstruksi, Plafon, Baja Ringan & Kitchen Set | MITRA KONSTRUKSI',
      proyek: 'Galeri & Inspirasi Desain Bangunan | MITRA KONSTRUKSI Lampung',
      artikel: 'Artikel & Panduan Renovasi Rumah | MITRA KONSTRUKSI',
      kontak: 'Kontak & Konsultasi WhatsApp | MITRA KONSTRUKSI',
    };

    document.title = titles[currentPage] || 'MITRA KONSTRUKSI';
  }, [currentPage]);

  const handleNavigate = (page: PageTab) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F5F7] text-[#202832]">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'beranda' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <FeaturedServicesSection onNavigate={handleNavigate} />
            <AboutSection onNavigate={handleNavigate} />
            <KeyAdvantagesSection />
            <WorkProcessSection />
            <ProjectGallerySection onNavigate={handleNavigate} showAllLink={true} />
            <CTASection />
          </>
        )}

        {currentPage === 'tentang' && <AboutPage />}

        {currentPage === 'layanan' && <ServicesPage />}

        {currentPage === 'proyek' && <GalleryPage />}

        {currentPage === 'artikel' && <ArticlesPage />}

        {currentPage === 'kontak' && <ContactPage />}
      </main>

      {/* Corporate Profile Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Accessible Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
