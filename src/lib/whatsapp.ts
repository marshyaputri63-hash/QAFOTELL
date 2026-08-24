const WHATSAPP_NUMBER = "6281241087024";

export interface BookingParams {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  room?: string;
}

export interface ContactParams {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Pagi";
  if (hour < 15) return "Siang";
  if (hour < 18) return "Sore";
  return "Malam";
}

export function sendBookingWhatsApp(params: BookingParams = {}) {
  const { checkIn = "-", checkOut = "-", guests = "2 Adults", room = "Any" } = params;
  const message = `Assalamualaikum Wr. Wb.

Selamat ${getTimeGreeting()}.

Saya ingin melakukan reservasi kamar di QAFOTEL BOUTIQUE:

*Detail Reservasi*
- Check-in: ${checkIn}
- Check-out: ${checkOut}
- Jumlah Tamu: ${guests}
- Tipe Kamar: ${room}

Mohon informasi ketersediaan kamar dan detail pembayaran.

Terima kasih.

Hormat saya,
[Nama Lengkap]`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

export function checkAvailabilityWhatsApp(params: BookingParams = {}) {
  const { checkIn = "-", checkOut = "-", guests = "2 Adults", room = "Any" } = params;
  const message = `Assalamualaikum Wr. Wb.

Selamat ${getTimeGreeting()}.

Saya ingin mengecek ketersediaan kamar di QAFOTEL BOUTIQUE:

*Detail Permintaan*
- Check-in: ${checkIn}
- Check-out: ${checkOut}
- Jumlah Tamu: ${guests}
- Tipe Kamar: ${room}

Apakah kamar masih tersedia untuk tanggal tersebut?

Terima kasih.

Hormat saya,
[Nama Lengkap]`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

export function sendContactWhatsApp(params: ContactParams) {
  const { name, email, phone, subject, message } = params;
  const waMessage = `Pesan dari Website QAFOTEL

Nama: ${name}
Email: ${email}
Telepon: ${phone || "-"}
Subjek: ${subject}

Pesan:
${message}

---
Dikirim melalui formulir kontak website QAFOTEL BOUTIQUE`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`, "_blank");
}
