# Panduan Pengembangan Landing Page Marketing "Tara" (Setara Venture)

> [!IMPORTANT]  
> Ini adalah dokumen instruksi *system prompt* untuk proyek **Marketing Landing Page "Tara"**. Proyek ini dikerjakan HANYA di folder `F:\WEB-SERVER\WEB\setara-landing-marketing`. Jangan ubah proyek di tempat lain.

---

## 1. Konteks Proyek & Visi
Anda akan mengembangkan sebuah *Marketing Landing Page* bergaya korporat premium untuk produk perangkat lunak unggulan dari **Setara Venture** yang bernama **Tara**. 

**Tara** adalah ekosistem perangkat lunak *Property Management System (PMS)*, *Central Reservation System (CRS)*, dan *Point of Sales (POS)* berstandar *Enterprise*. Sistem ini dirancang untuk menyelesaikan masalah operasional manajemen hotel, *resort*, dan restoran modern yang memiliki banyak cabang (multi-tenant).

Desain *landing page* ini ditujukan untuk menarik klien B2B (Business-to-Business) dengan pendekatan visual yang sangat profesional, bersih (*clean*), elegan, dan *trustworthy*. Fokus utama adalah konversi tinggi (mengubah pengunjung menjadi *leads* sales) dan SEO *friendly*. 

> **BENCHMARK UTAMA:** Referensi struktur halaman, alur UX, dan tata letak informasi *(visual weight)* harus mengambil inspirasi kuat dari ekosistem **[majoo.id](https://majoo.id/)**. Landing page harus terasa seperti platform SaaS kelas kakap dengan penempatan *sticky header*, menu navigasi padat fitur, dan penawaran *value-proposition* yang berjejer rapi dalam wujud *cards* atau *bento-grid* yang modern.

---

## 2. Identitas Bisnis & Kontak Utama (Wajib Digunakan)
Informasi berikut **WAJIB** digunakan secara akurat untuk mengisi konten di bagian Footer, tautan Contact, dan seluruh tombol Call to Action (CTA):
*   **Nama Perusahaan Resmi:** PT Setara Venture
*   **Email Resmi:** `admin@mytara.id` (Gunakan format `href="mailto:admin@mytara.id"` pada setiap tombol sekunder "Hubungi Sales" atau kontak Footer)
*   **WhatsApp / Telepon:** `08813794763` (Gunakan untuk teks kontak dan format `href="https://wa.me/628813794763"` pada tombol melayang CTA di pojok layar)
*   **Alamat Kantor:** Jl. Kyai Kendagi No. 58, Temanggung, Jawa Tengah (Tampilkan secara utuh di blok informasi *Sitemap Footer*)

---

## 3. Product Knowledge (Nilai Jual & Fitur Utama)
Gunakan materi berikut sebagai bahan *copywriting*, ilustrasi fitur, dan penjelasan di *landing page*. Semua sistem ini **sudah terbukti dibangun dan beroperasi**.

1. **Centralized Multi-Property Dashboard:** Mengelola puluhan cabang hotel dan restoran dari satu layar *Superadmin*. Seluruh basis data diisolasi secara aman *(Multi-Tenant Architecture)*.
2. **Next-Gen Point of Sales (POS) & Self-Ordering:** Sistem Kasir terintegrasi yang memungkinkan tamu memesan makanan secara mandiri dari meja (*Guest Self-Ordering* ala GrabFood/GoFood). Mendukung notifikasi suara *real-time* ke dapur, split-bill, dan pelacakan pesanan secara langsung.
3. **Automated P&L & Real-Time Accounting Engine:** Laporan Laba Rugi (Profit & Loss) tidak lagi manual. Setiap transaksi langsung dipetakan ke *Cost & Revenue Center* yang tepat. Menghasilkan Neraca (Balance Sheet) dan Arus Kas (Cash Flow) otomatis secara *real-time* di tingkat operasional.
4. **Smart Front Office & Forecasting:** Papan antrean (*queue list*) dan penjadwalan kamar otomatis dengan indikator warna status pembayaran (Lunas, DP, Belum Lunas).
5. **Integrated HRD & Attendance:** Portal portal swalayan karyawan bergaya iOS modern untuk Absensi (*Clock In/Out*), pencatatan lembur, dan *live monitoring* kinerja *staff*.

---

## 4. Alur UX & Struktur Halaman (The User Journey)
Halaman ini bersifat *Single Page Scrollable* dengan alur cerita (UX Flow) yang dirancang khusus untuk mengedukasi dan mengonversi klien bisnis. Anda **WAJIB** menyusun tata letak dengan urutan strategis berikut:

1.  **Navbar & Sticky Header (Selalu Terlihat):**
    Menu navigasi atas transparan yang otomatis memiliki latar solid (*glassmorphism*) saat di-scroll. Memuat logo Tara, navigasi jangkar (Fitur, Solusi, Harga), dan tombol CTA sekunder "Hubungi Kami".
2.  **Hero Section (The Hook):** 
    Menangkap atensi dalam 3 detik pertama. Berisi *headline* yang kuat (*"Elevate Your Hospitality Business with Tara"*), deskripsi singkat dampak bisnis, ilustrasi *mockup dashboard* besar yang mengambang elegan, dan dua tombol CTA utama: **"Coba Gratis / Request Demo"** (Primary) dan **"Hubungi Sales"** (Secondary).
3.  **The Problem & Solution (Edukasi B2B):** 
    Menggiring empati pengguna. Menjelaskan masalah klasik (Perhitungan manual? Kebocoran kas? Laporan telat?) dan bagaimana Tara hadir sebagai satu ekosistem yang menyelesaikan itu semua. Gunakan gaya narasi *"Kenapa pilih Tara?"* dengan poin-poin ringkas.
4.  **Ecosystem & Feature Showcase (The Core - Bento Grid):** 
    Seksi paling visual. Menampilkan kelima *Product Knowledge* di atas (Kasir, P&L, HRD, CRS) menggunakan tata letak *Bento-Grid* modern atau *Cards* berbayang (*soft dropshadow*). Pastikan setiap kartu memiliki ikonografi elegan dan deskripsi to-the-point.
5.  **Hardware / Ecosystem Support (Opsional tapi Direkomendasikan):**
    Menunjukkan fleksibilitas sistem. Seksi visual yang memperlihatkan bahwa Tara mendukung berbagai perangkat (Tablet kasir modern, PC, Printer thermal) untuk menambah tingkat kepercayaan kelas *Enterprise*.
6.  **Pricing / Packages Section (Conversion Catalyst):** 
    Seksi krusial yang menampilkan perbandingan 4 tingkatan paket (Rincian ada di Bab 5). Harus didesain berdampingan (Kolom) di *desktop* dengan penyorotan warna khusus pada paket "Business" atau "Enterprise" (dilabeli: *Paling Direkomendasikan*).
7.  **Testimonial / Social Proof (Trust Builder):** 
    Deretan logo *client fiktif* ternama *(Trusted by...)* dilanjutkan dengan *carousel/grid* ulasan dari *partner* B2B (gunakan teks profesional *dummy* yang menyebutkan peningkatan metrik kas).
8.  **Bottom CTA & Sticky Floating Button (The Closing):** 
    Blok raksasa menjelang akhir halaman dengan *headline* ajakan kuat ("Siap Mengubah Cara Anda Berbisnis?") dan tombol final ke Sales. Sediakan juga tombol melayang WhatsApp di pojok kanan bawah layar untuk konsultasi cepat.
9.  **Sitemap Footer:** 
    Footer raksasa khas SaaS B2B. Memuat logo PT Setara Venture, informasi alamat lengkap (Jl. Kyai Kendagi No. 58), email & WhatsApp operasional, tautan fiktif (Produk, Layanan), serta baris Hak Cipta & Privasi 2026.

---

## 5. Struktur Paket Harga (Pricing Plans)
Anda wajib menyertakan blok *Pricing* (di Seksi ke-6) yang menjabarkan pembagian modul untuk target pasar berikut:

1.  **Starter / UMKM Plan:** Maksimal 1 Cabang, Point of Sales (POS) Reguler, Digital Menu & Guest Self-Ordering (QR), Basic Profit & Loss Report.
2.  **Business Plan (Highlight/Direkomendasikan):** Hingga 5 Cabang, *Semua fitur Starter ditambah:* Front Office & Room Management, HRD & Attendance Portal, Live Kitchen Display System (KDS).
3.  **Enterprise Plan:** Cabang Tidak Terbatas, *Semua fitur Business ditambah:* Central Reservation System (CRS) & Superadmin Portal, Automated Cost & Revenue Routing, Priority 24/7 Support.
4.  **Customise Plan:** Pembuatan Modul Kustom, Integrasi API dengan sistem lama (ERP/SAP), Custom White-label Domain.

---

## 6. Konfigurasi Hosting, Analytics & Batasan Teknis (CRITICAL!)
*   **Status Konten & Backend:** Proyek ini adalah halaman pemasaran **STATIS**. Anda **DILARANG** membangun fitur *database query* (Firestore read/write) atau *Authentication* (Login/Register) di *landing page* ini. Data testimoni, fitur, dan *pricing* bersifat *hardcoded*.
*   **Integrasi Firebase (Hanya untuk Analytics & Hosting):**
    Proyek ini menggunakan Firebase **hanya** untuk keperluan *web hosting* dan Google Analytics pelacakan pengunjung. Gunakan konfigurasi berikut untuk inisialisasi di klien:
    ```javascript
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";

    const firebaseConfig = {
      apiKey: "AIzaSyD9dfRgmcGeCmvbBoU5gytQJGiKyBLNoLA",
      authDomain: "landing-setara.firebaseapp.com",
      projectId: "landing-setara",
      storageBucket: "landing-setara.firebasestorage.app",
      messagingSenderId: "534463869476",
      appId: "1:534463869476:web:8c42f98ae175e9d9d1deb1",
      measurementId: "G-W3KGTBSFH8"
    };

    export const app = initializeApp(firebaseConfig);
    export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
    ```
*   **Kesesuaian Desain & Ekstraksi Figma:** Untuk menentukan warna, spasi, tipe huruf (tipografi), dan estetika komponen, Anda **WAJIB** mengimplementasikan panduan desain dari file `DESIGN.md`. File referensi desain ini diperoleh dengan cara menjalankan perintah terminal `npx getdesign@latest add figma` (untuk menarik *tokens* langsung dari Figma). Jangan membuat desain asal atau gaya warna baru tanpa merujuk pada hasil ekstraksi `getdesign` ini.

---

## 7. Standar Profesional, SEO, & Copywriting
Agar *landing page* terlihat berkelas dan siap *go-to-market*:
*   **Arsitektur Full Modular (CRITICAL):** Dilarang keras membuat file kode *monolith* (menumpuk semua kode di satu file). Anda **WAJIB** merancang arsitektur proyek ini secara *Full Modular*. Pisahkan struktur komponen per-*section*. Setiap komponen wajib memiliki foldernya sendiri yang menampung file `.tsx` dan file `.module.css` secara terpisah.
*   **Mobile-First Responsiveness (CRITICAL):** Komponen kompleks seperti *Bento-Grid* dan *Tabel Pricing* tidak boleh hancur atau bergeser di HP. Layout wajib mengadopsi tumpukan vertikal (*stacking*) yang mulus di *breakpoint mobile* (max-width: 768px). Pastikan *padding* cukup lapang agar *tappable* (mudah dipencet).
*   **Tone Copywriting B2B (Sales-Driven):** Tulis *copywriting* dengan gaya *to-the-point* dan persuasif. Hindari kalimat puitis bertele-tele khas AI. Gunakan bahasa yang fokus pada efisiensi metrik (Contoh: "Otomatisasi Laporan P&L Anda secara Real-time", "Cegah Kebocoran Kas Cabang", "Kelola Ribuan Transaksi dari 1 Layar").
*   **Penanganan Gambar & Aset (Unsplash Placeholders):** Jangan pernah meninggalkan tautan gambar rusak (broken image). Untuk ilustrasi *mockup* atau *hardware* yang belum tersedia, **wajib** gunakan gambar *placeholder* estetis dari Unsplash (misal: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800` untuk gambar kasir resto) atau elemen grafis CSS murni agar tata letak langsung proporsional untuk dinilai pengguna.
*   **Animasi "Kelas Kakap" (GSAP/Framer):** Terapkan transisi dan interaksi dengan kualitas setara *website enterprise flagship* (contoh: Apple, Majoo). Anda diinstruksikan untuk menggunakan **GSAP (GreenSock Animation Platform)** atau standar animasi terkini untuk memberikan efek *scroll trigger*, *parallax*, *fade-in up*, atau transisi yang sangat *fluid* dan mewah.

---

## 8. Instruksi Langkah Kerja untuk AI (Gemini)
1. **Ekstraksi Desain Figma:** Jika pengguna meminta Anda mendesain *landing page*, Anda atau pengguna harus mengonversi desain Figma terlebih dahulu dengan menjalankan perintah `npx getdesign@latest add figma` pada terminal proyek ini. Baca file `DESIGN.md` yang dihasilkan setelahnya.
2. **Setup Inisialisasi Firebase:** Siapkan file `firebase.ts` menggunakan konfigurasi *Analytics* statis di atas.
3. **Buat Kerangka Dasar Full Modular:** Buat struktur *folder* terpisah per *section* sesuai alur *UX Journey* di Bab 4. (Contoh: `components/sections/Hero/Hero.tsx` beserta `hero.module.css`).
4. **Terapkan Styling, Gambar Placeholder & Animasi:** Gunakan CSS Modules mengikuti *tokens* hasil keluaran *getdesign*. Panggil gambar Unsplash pada elemen *image*, lalu pasang logika animasi GSAP untuk menciptakan antarmuka interaktif kelas atas.
5. **Isi Konten B2B:** Gunakan bahasa pemasaran B2B *Sales-Driven* dan data *Identitas Bisnis* (Bab 2) untuk seluruh CTA.
6. **Deploy Ready:** Selesaikan UI secara memukau tanpa membangun *database backend*.
