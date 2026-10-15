export const WHATSAPP_NUMBER = '628127266292';
export const DISPLAY_PHONE = '08127266292';
export const BUSINESS_NAME = 'MITRA KONSTRUKSI';
export const OWNER_NAME = 'SEPTI ARIFIANA SARI';
export const BUSINESS_LOCATION = 'Lampung Tengah, Lampung';
export const OPERATIONAL_AREA = 'Seluruh Wilayah Lampung';

/**
 * Generates an official WhatsApp click-to-chat URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = 'Halo MITRA KONSTRUKSI, saya ingin berkonsultasi mengenai jasa konstruksi.';
  const textToSend = customMessage ? customMessage.trim() : defaultText;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`;
}

/**
 * Creates tailored consultation message for a specific service
 */
export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Halo MITRA KONSTRUKSI, saya tertarik untuk berkonsultasi mengenai layanan "${serviceTitle}". Mohon informasi tahapan survei lokasi dan estimasi biayanya. Terima kasih.`;
  return getWhatsAppUrl(message);
}

/**
 * Creates formatted WhatsApp message from the contact form
 */
export function getContactFormWhatsAppUrl(data: {
  fullName: string;
  whatsappNumber: string;
  serviceType: string;
  location: string;
  estimatedBudget?: string;
  projectDescription: string;
}): string {
  const lines = [
    `*KONSULTASI PROYEK BARU - MITRA KONSTRUKSI*`,
    `----------------------------------------`,
    `*Nama Pelanggan:* ${data.fullName}`,
    `*Nomor WhatsApp:* ${data.whatsappNumber}`,
    `*Layanan yang Dibutuhkan:* ${data.serviceType}`,
    `*Lokasi Pekerjaan:* ${data.location}`,
    data.estimatedBudget ? `*Perkiraan Anggaran:* ${data.estimatedBudget}` : null,
    `----------------------------------------`,
    `*Deskripsi Kebutuhan:*`,
    `${data.projectDescription}`,
    `----------------------------------------`,
    `Mohon tanggapan dan arahan untuk langkah konsultasi selanjutnya. Terima kasih.`,
  ].filter(Boolean);

  return getWhatsAppUrl(lines.join('\n'));
}
