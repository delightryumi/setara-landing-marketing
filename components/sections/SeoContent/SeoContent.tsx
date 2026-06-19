"use client";

import styles from "./SeoContent.module.css";

export default function SeoContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <article className={styles.article}>
          <h2 className={styles.title}>Apa itu Aplikasi POS (Point of Sale)?</h2>
          <p className={styles.paragraph}>
            Aplikasi POS adalah sebuah sistem yang digunakan oleh pebisnis untuk memproses transaksi penjualan agar lebih efisien. Aplikasi POS merupakan kombinasi antara perangkat keras dan lunak yang memungkinkan pemilik usaha untuk melacak penjualan, mengelola inventory, hingga mengatur loyalitas pelanggan. Berbeda dengan mesin kasir tradisional, aplikasi POS MyTara berbasis cloud sehingga data aman dan dapat diakses dari mana saja.
          </p>

          <h2 className={styles.title}>Manfaat Menggunakan Aplikasi POS MyTara</h2>
          
          <h3 className={styles.subtitle}>1. Efisiensi Transaksi dan Kecepatan</h3>
          <p className={styles.paragraph}>
            Dengan aplikasi POS, proses transaksi di meja kasir menjadi jauh lebih cepat. MyTara mendukung sistem barcode, integrasi Kitchen Display, hingga guest self-ordering via QR Code untuk meminimalkan antrean.
          </p>

          <h3 className={styles.subtitle}>2. Manajemen Inventaris yang Lebih Baik</h3>
          <p className={styles.paragraph}>
            MyTara memungkinkan Anda melacak stok barang secara real-time dari berbagai gudang atau cabang. Anda dapat mengatur resep (BOM) sehingga stok bahan baku otomatis terpotong setiap ada transaksi penjualan, mencegah kehabisan stok yang merugikan.
          </p>

          <h3 className={styles.subtitle}>3. Laporan Penjualan yang Akurat dan Detail</h3>
          <p className={styles.paragraph}>
            Analisis penjualan harian, mingguan, atau bulanan secara instan. MyTara otomatis menyusun laporan Profit & Loss (P&L) sehingga Anda bisa membuat keputusan bisnis berbasis data, bukan sekadar insting.
          </p>

          <h3 className={styles.subtitle}>4. Sistem Multi-cabang dalam Satu Dashboard</h3>
          <p className={styles.paragraph}>
            Mengelola 10 cabang kini semudah mengelola 1 cabang. Tidak perlu login ke sistem berbeda untuk setiap lokasi; seluruh data transaksi, stok, hingga performa karyawan antar cabang sudah disinkronisasi dalam satu portal owner.
          </p>

          <h2 className={styles.title}>Tips Memilih Aplikasi POS yang Tepat untuk Bisnis Anda</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Evaluasi Kebutuhan Industri:</strong> Pilih sistem yang memang dirancang untuk industri Anda. MyTara memiliki spesialisasi modul untuk F&B, Retail, hingga Manajemen Kamar/Hotel.</li>
            <li className={styles.listItem}><strong>Kemampuan Offline:</strong> Pastikan POS tetap bisa berfungsi normal walau internet mati.</li>
            <li className={styles.listItem}><strong>Dukungan Skalabilitas:</strong> Aplikasi POS yang baik harus mampu mendukung Anda saat Anda berekspansi menambah cabang baru tanpa biaya tersembunyi.</li>
            <li className={styles.listItem}><strong>Ekosistem Lengkap:</strong> Hindari memakai banyak aplikasi berbeda untuk kasir, absensi HRD, dan akutansi. Pilih solusi All-in-One seperti MyTara.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
