"use client";

import { useEffect, useRef } from "react";
import { ChartLineUp, Storefront, Money } from "@phosphor-icons/react";
import styles from "./ProblemSolution.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="solusi" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Kenapa Pilih Tara?</span>
          <h2 className={styles.title}>
            Satu Ekosistem untuk Semua Masalah Operasional Anda
          </h2>
        </div>

        <div className={styles.grid} ref={cardsRef}>
          <div className={styles.card}>
            <div className={styles.highlight} />
            <div className={styles.iconWrapper}>
              <Storefront size={32} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Kendali Multi-Cabang</h3>
            <p className={styles.cardDesc}>
              Tidak perlu lagi mengecek cabang satu per satu. Kelola seluruh properti hotel dan restoran Anda secara real-time dari satu dashboard Superadmin yang terisolasi aman.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.highlight} />
            <div className={styles.iconWrapper}>
              <Money size={32} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Cegah Kebocoran Kas</h3>
            <p className={styles.cardDesc}>
              Setiap transaksi kasir (POS) langsung terhubung dengan sistem akuntansi (P&L). Pendapatan dan pengeluaran tercatat akurat, mencegah selisih kas di lapangan.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.highlight} />
            <div className={styles.iconWrapper}>
              <ChartLineUp size={32} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>Laporan Keuangan Otomatis</h3>
            <p className={styles.cardDesc}>
              Tinggalkan perhitungan manual berhari-hari. Dapatkan laporan Laba/Rugi, Neraca, dan Arus Kas secara instan setiap akhir hari untuk keputusan bisnis yang lebih cepat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
