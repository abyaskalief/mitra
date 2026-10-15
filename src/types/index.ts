export type PageTab = 'beranda' | 'tentang' | 'layanan' | 'proyek' | 'artikel' | 'kontak';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  category: 'struktur' | 'interior' | 'renovasi' | 'finishing';
  image: string;
  scopeOfWork: string[];
  customerPreparation: string[];
  consultationSteps: string[];
  faqs: { question: string; answer: string }[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'plafon' | 'baja-ringan' | 'renovasi' | 'kitchen-set' | 'interior' | 'bangun-rumah';
  categoryLabel: string;
  image: string;
  isConcept: boolean; // True to honestly mark as Inspirasi Desain / Referensi Arsitektur
  description: string;
  features: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readingTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
}

export interface ContactFormData {
  fullName: string;
  whatsappNumber: string;
  serviceType: string;
  location: string;
  estimatedBudget: string;
  projectDescription: string;
}
