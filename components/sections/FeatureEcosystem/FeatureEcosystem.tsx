"use client";

import { useEffect, useRef } from "react";
import { Desktop, Users, Building, Laptop, Buildings } from "@phosphor-icons/react";
import styles from "./FeatureEcosystem.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="fitur" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Ekosistem Lengkap</span>
          <h2 className={styles.title}>
            Satu Platform untuk Skalabilitas Bisnis Anda
          </h2>
        </div>

        <div className={styles.bentoGrid} ref={gridRef}>
          {/* POS & Self Ordering - Highlighted Large Card */}
          <div className={`${styles.bentoCard} ${styles.posCard}`}>
            <div className={styles.iconWrapper}>
              <Desktop size={28} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Next-Gen POS & Self-Ordering</h3>
            <p className={styles.cardDesc}>
              Kasir terintegrasi yang memungkinkan tamu memesan mandiri (QR Order). Mendukung live Kitchen Display System (KDS), notifikasi dapur real-time, dan pemisahan tagihan (split-bill) cerdas.
            </p>
          </div>

          {/* Centralized Dashboard */}
          <div className={`${styles.bentoCard} ${styles.dashboardCard}`}>
            <div className={styles.iconWrapper}>
              <Laptop size={28} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Centralized Dashboard</h3>
            <p className={styles.cardDesc}>
              Mengelola puluhan cabang hotel dan restoran dari satu layar Superadmin secara terpusat dengan keamanan arsitektur Multi-Tenant.
            </p>
          </div>

          {/* P&L Accounting Engine */}
          <div className={`${styles.bentoCard} ${styles.pnlCard}`}>
            <div className={styles.iconWrapper}>
              <Buildings size={28} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Automated P&L Engine</h3>
            <p className={styles.cardDesc}>
              Setiap transaksi kasir otomatis masuk ke buku besar. Hasilkan Laporan Laba Rugi dan Neraca secara real-time.
            </p>
          </div>

          {/* HRD & Attendance */}
          <div className={`${styles.bentoCard} ${styles.hrdCard}`}>
            <div className={styles.iconWrapper}>
              <Users size={28} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Portal HRD & Absensi</h3>
            <p className={styles.cardDesc}>
              Sistem self-service karyawan modern. Lacak kehadiran (Clock In/Out) dan perhitungan lembur otomatis.
            </p>
          </div>

          {/* Front Office & CRS */}
          <div className={`${styles.bentoCard} ${styles.crsCard}`}>
            <div className={styles.iconWrapper}>
              <Building size={28} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Smart Front Office</h3>
            <p className={styles.cardDesc}>
              Penjadwalan reservasi (CRS) multi-properti dengan papan antrean dan indikator warna status pembayaran otomatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
