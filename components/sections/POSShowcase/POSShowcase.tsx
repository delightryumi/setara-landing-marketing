"use client";

import { useEffect, useRef } from "react";
import { Lightning, UsersThree, ChartLineUp } from "@phosphor-icons/react";
import styles from "./POSShowcase.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function POSShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && galleryRef.current) {
      // Content animation
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Gallery animation
      gsap.fromTo(
        galleryRef.current.children,
        { opacity: 0, x: 30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
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
      <div className={styles.glowTop} />
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Text Content */}
          <div className={styles.content} ref={contentRef}>
            <span className={styles.subtitle}>Point of Sale (POS)</span>
            <h2 className={styles.title}>
              Transaksi Cepat Tanpa Batas, Bahkan Saat Offline
            </h2>
            <p className={styles.description}>
              Tinggalkan kasir tradisional. Tara POS dirancang khusus untuk mobilitas, stabilitas tinggi, dan manajemen multi-cabang tanpa repot.
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <Lightning size={24} weight="duotone" />
                </div>
                <div className={styles.featureText}>
                  <h4>Kecepatan Instan & Sinkronisasi</h4>
                  <p>Input order dalam hitungan detik. Terhubung langsung ke KDS (dapur) dan memotong stok otomatis.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <UsersThree size={24} weight="duotone" />
                </div>
                <div className={styles.featureText}>
                  <h4>Manajemen Meja & Split Bill</h4>
                  <p>Denah meja visual interaktif, kemudahan memecah tagihan, dan pembayaran multi-metode yang fleksibel.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <ChartLineUp size={24} weight="duotone" />
                </div>
                <div className={styles.featureText}>
                  <h4>Terhubung ke P&L Real-time</h4>
                  <p>Setiap transaksi langsung tercatat di buku besar akuntansi. Pantau Laba Rugi hari ini juga.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className={styles.gallery} ref={galleryRef}>
            <div className={styles.mainImageWrapper}>
              {/* Tempat screenshot utama: pos-1.png */}
              <img src="/images/pos-1.png" alt="Tara POS Interface" className={styles.img} />
            </div>
            <div className={styles.floatingImageWrapper}>
              {/* Tempat screenshot fitur spesifik/mobile: pos-2.png */}
              <img src="/images/pos-2.png" alt="Tara POS Features" className={styles.img} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
