"use client";

import { useEffect, useRef } from "react";
import styles from "./Stats.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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
    <section className={`${styles.section} home-section`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Metrik Dampak</span>
          <h2 className={styles.title}>Efisiensi Nyata, Dampak Terukur</h2>
        </div>
        <div className={styles.grid} ref={gridRef}>
          <div className={styles.statCard}>
            <div className={styles.number}>90%</div>
            <h3 className={styles.label}>Penurunan Kebocoran</h3>
            <p className={styles.desc}>Meminimalisir selisih kasir dan kecurangan stok bahan baku secara instan.</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.number}>2.4x</div>
            <h3 className={styles.label}>Turnover Lebih Cepat</h3>
            <p className={styles.desc}>Sinkronisasi KDS dan notifikasi status kebersihan kamar mempercepat rotasi tamu.</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.number}>1 Layar</div>
            <h3 className={styles.label}>Kontrol Terpusat</h3>
            <p className={styles.desc}>Kelola puluhan cabang CRS, harga menu, dan performa HRD tanpa berganti akun.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
