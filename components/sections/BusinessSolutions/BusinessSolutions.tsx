"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import styles from "./BusinessSolutions.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: "fnb",
    title: "Food & Beverages",
    headline: "Kelola F&B Lebih Efisien",
    desc: "Sistem yang dirancang khusus untuk restoran, cafe, dan franchise. Kelola pesanan, kitchen display, meja, hingga stok bahan baku secara real-time.",
    features: [
      "Kitchen Display System (KDS)",
      "Manajemen Resep (BOM) & Inventory",
      "Split Bill & Self-Ordering QR",
      "Multi-cabang Tersinkronisasi"
    ],
    image: "/images/food-beverage.png"
  },
  {
    id: "hospitality",
    title: "Hospitality & Service",
    headline: "Otomasi Manajemen Penginapan",
    desc: "Tingkatkan okupansi dan kepuasan tamu dengan Central Reservation System. Pantau ketersediaan kamar, house keeping, dan penagihan dalam satu platform.",
    features: [
      "Central Reservation System (CRS)",
      "House Keeping Status Real-time",
      "Integrasi Layanan Kamar & Resto",
      "Laporan Okupansi & Pendapatan"
    ],
    image: "/images/front-office.png"
  },
  {
    id: "retail",
    title: "Retail & Distribution",
    headline: "Kontrol Stok & Transaksi Retail",
    desc: "Dari minimarket hingga distributor grosir. Pantau pergerakan ribuan SKU secara akurat, kelola harga multi-tier, dan cetak barcode dengan mudah.",
    features: [
      "Manajemen Ribuan SKU (Barcode)",
      "Stok Multi-Gudang Terpusat",
      "Purchase Order & Supplier",
      "Laporan Penjualan Real-time"
    ],
    image: "/images/purchasing.png"
  },
  {
    id: "enterprise",
    title: "Enterprise",
    headline: "Skalabilitas Tanpa Batas",
    desc: "Solusi kustom untuk korporasi skala besar. Integrasikan seluruh divisi mulai dari HRD, Finance, hingga Operasional ke dalam ekosistem MyTara.",
    features: [
      "API Integrasi (ERP/SAP)",
      "Automated Accounting & Ledger",
      "HRD & Portal Karyawan",
      "Hak Akses Superadmin Kompleks"
    ],
    image: "/images/accounting.png"
  }
];

export default function BusinessSolutions() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  // Animasi transisi tab
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <section id="solusi" className={`${styles.section} home-section`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Solusi Bisnis</span>
          <h2 className={styles.title}>
            Pilihan Tepat Berbagai Jenis Bisnis
          </h2>
        </div>

        <div className={styles.tabsContainer}>
          {solutions.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(sol.id)}
              className={`${styles.tabBtn} ${activeTab === sol.id ? styles.tabActive : ""}`}
            >
              {sol.title}
            </button>
          ))}
        </div>

        <div className={styles.contentWrapper} ref={contentRef}>
          <div className={styles.textContent}>
            <h3 className={styles.contentTitle}>{activeSolution.headline}</h3>
            <p className={styles.contentDesc}>{activeSolution.desc}</p>
            
            <div className={styles.featureList}>
              {activeSolution.features.map((feature, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                  {feature}
                </div>
              ))}
            </div>

            <a href="mailto:admin@mytara.id" className={styles.ctaBtn}>
              Pelajari Lebih Lanjut
            </a>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src={activeSolution.image} 
              alt={activeSolution.headline} 
              className={styles.illustration}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
