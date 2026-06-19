"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  Desktop, 
  Building, 
  Broom, 
  Coffee, 
  ShoppingCart, 
  Calculator, 
  Users, 
  QrCode,
  UserCircle,
  Check
} from "@phosphor-icons/react";
import styles from "./AllModulesShowcase.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: "pos",
    title: "Point of Sales",
    category: "Operations",
    icon: Desktop,
    desc: "Sistem kasir cerdas yang mempercepat proses pemesanan. Mendukung Guest Self-Ordering via QR, Split Bill interaktif, dan integrasi Kitchen Display System (KDS) secara real-time.",
    image: "/images/pos-1.png",
    features: [
      "Guest Self-Ordering via QR",
      "Split Bill Interaktif",
      "Integrasi KDS Real-time"
    ]
  },
  {
    id: "front-office",
    title: "Front Office",
    category: "Operations",
    icon: Building,
    desc: "Mengelola Central Reservation System (CRS) multi-properti. Dilengkapi papan antrean otomatis, manajemen alokasi meja/kamar, dan status indikator pembayaran terpusat.",
    image: "/images/front-office.png",
    features: [
      "Central Reservation System",
      "Papan Antrean Otomatis",
      "Alokasi Meja/Kamar Terpadu"
    ]
  },
  {
    id: "housekeeping",
    title: "House Keeping",
    category: "Operations",
    icon: Broom,
    desc: "Pantau status kebersihan meja, ruangan, atau kamar secara real-time. Mempercepat turnover pelanggan dengan notifikasi langsung kepada tim kebersihan di lapangan.",
    image: "/images/housekeeping.png",
    features: [
      "Cleaning Room Tracker",
      "Notifikasi Instan Lapangan",
      "Laporan Turnover Cepat"
    ]
  },
  {
    id: "fnb",
    title: "Food & Beverage",
    category: "Operations",
    icon: Coffee,
    desc: "Manajemen resep rahasia (BOM) dan variasi menu yang mendalam. Atur ketersediaan menu berdasarkan cabang dan sesuaikan harga secara dinamis dengan mudah.",
    image: "/images/food-beverage.png",
    features: [
      "Manajemen Resep (BOM)",
      "Harga Cabang Dinamis",
      "Stok F&B Terintegrasi"
    ]
  },
  {
    id: "purchasing",
    title: "Purchasing",
    category: "Finance",
    icon: ShoppingCart,
    desc: "Sistem pengadaan barang (PO) otomatis dengan persetujuan bertingkat. Lacak pergerakan stok antar gudang, audit inventaris harian, dan pantau supplier terbaik.",
    image: "/images/purchasing.png",
    features: [
      "PO Otomatis & Persetujuan",
      "Transfer Stok Antar Gudang",
      "Audit Inventaris Harian"
    ]
  },
  {
    id: "accounting",
    title: "Accounting",
    category: "Finance",
    icon: Calculator,
    desc: "Mesin akuntansi canggih. Setiap transaksi POS akan otomatis di-posting menjadi jurnal akuntansi. Akses Laporan Laba Rugi (P&L) dan Neraca secara instan kapan saja.",
    image: "/images/accounting.png",
    features: [
      "Posting Jurnal Otomatis",
      "Laporan P&L Real-time",
      "Neraca Keuangan Instan"
    ]
  },
  {
    id: "hrd",
    title: "HRD & Absensi",
    category: "Human Resources",
    icon: Users,
    desc: "Portal self-service bagi seluruh karyawan. Fitur Absensi (Clock In/Out) dengan geolokasi, pencatatan lembur, izin cuti, hingga pengelolaan KPI staf yang terukur.",
    image: "/images/hrd.png",
    features: [
      "Absensi GPS Clock In/Out",
      "Pencatatan Lembur & Cuti",
      "Evaluasi KPI Staf Terukur"
    ]
  },
  {
    id: "self-order",
    title: "Self-Order (QR)",
    category: "Customer Facing",
    icon: QrCode,
    desc: "Beri pengalaman instan untuk pelanggan Bapak. Pelanggan cukup scan QR Code di meja untuk melihat menu interaktif, memesan, dan membayar tanpa harus memanggil pelayan.",
    image: "/images/self-order.png",
    features: [
      "Scan QR Meja Instan",
      "Pembayaran Terintegrasi",
      "Menu Digital Atraktif"
    ]
  },
  {
    id: "employee",
    title: "Portal Karyawan",
    category: "Human Resources",
    icon: UserCircle,
    desc: "Aplikasi mandiri khusus staf. Karyawan dapat mengecek jadwal shift, slip gaji, riwayat performa, dan melakukan absensi mandiri langsung dari smartphone mereka.",
    image: "/images/employee-portal.png",
    features: [
      "Jadwal Shift & Cuti",
      "Slip Gaji Digital",
      "Tracker Performa Mandiri"
    ]
  }
];

export default function AllModulesShowcase() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  useEffect(() => {
    setMounted(true);
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }
  }, []);

  // Animasi saat tab diganti
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.98, x: 20 },
        { opacity: 1, scale: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeModuleId]);

  // Support theme-based image resolution
  const displayImage = mounted && resolvedTheme === "dark"
    ? activeModule.image.replace(".png", "-dark.png")
    : activeModule.image;

  return (
    <section id="fitur" className={`${styles.section} home-section`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Eksplorasi Ekosistem</span>
          <h2 className={styles.title}>
            8 Pilar Utama Sistem Operasional Tara
          </h2>
        </div>

        <div className={styles.layout}>
          
          {/* Sidebar Tabs */}
          <div className={styles.sidebar}>
            {modules.map((mod) => {
              const isActive = mod.id === activeModuleId;
              const Icon = mod.icon;
              return (
                <button 
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabActive : ""}`}
                >
                  <div className={styles.iconWrapper}>
                    <Icon size={24} weight={isActive ? "duotone" : "regular"} />
                  </div>
                  <div className={styles.tabText}>
                    <span className={styles.tabTitle}>{mod.title}</span>
                    <span className={styles.tabCategory}>{mod.category}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className={styles.contentArea} ref={contentRef}>
            <div className={styles.moduleInfo}>
              <div className={styles.categoryBadge}>{activeModule.category}</div>
              <h3 className={styles.moduleTitle}>{activeModule.title}</h3>
              <p className={styles.moduleDesc}>{activeModule.desc}</p>
              
              {activeModule.features && (
                <div className={styles.featureList}>
                  {activeModule.features.map((feat, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <Check size={16} weight="bold" className={styles.checkIcon} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className={styles.imageWrapper}>
              <div className={styles.browserHeader}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.screenshotContainer}>
                <img 
                  src={displayImage} 
                  alt={`${activeModule.title} Screenshot`} 
                  className={styles.screenshot} 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

