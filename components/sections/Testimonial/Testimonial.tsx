"use client";

import { useEffect, useRef } from "react";
import { Quotes, Buildings, Coffee, ForkKnife } from "@phosphor-icons/react";
import styles from "./Testimonial.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
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
      <div className={styles.container}>
        
        <div className={styles.trustedContainer}>
          <span className={styles.trustedText}>Dipercaya Oleh Pemimpin Industri</span>
          <div className={styles.logoTrack}>
            <div className={styles.logo}><Buildings size={28} /> Grand Palace</div>
            <div className={styles.logo}><Coffee size={28} /> Kopi Kita</div>
            <div className={styles.logo}><ForkKnife size={28} /> Rasa Nusantara</div>
            <div className={styles.logo}><Buildings size={28} /> The Azure Resort</div>
          </div>
        </div>

        <div className={styles.header}>
          <span className={styles.subtitle}>Testimoni</span>
          <h2 className={styles.title}>
            Apa Kata Mereka Tentang Tara?
          </h2>
        </div>

        <div className={styles.grid} ref={cardsRef}>
          <div className={styles.card}>
            <Quotes size={40} weight="fill" className={styles.quoteIcon} />
            <p className={styles.quote}>
              "Semenjak menggunakan Tara, kami berhasil mengurangi kebocoran kas hingga 90% di 12 cabang restoran kami. Laporan P&L otomatisnya benar-benar menyelamatkan waktu kami."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>AS</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Ahmad Setiawan</span>
                <span className={styles.authorRole}>Direktur Operasional, Rasa Nusantara</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Quotes size={40} weight="fill" className={styles.quoteIcon} />
            <p className={styles.quote}>
              "Sistem reservasi (CRS) dan Front Office dari Tara membuat operasional resort kami jauh lebih efisien. Tidak ada lagi overbooking, dan tamu bisa self check-in dengan lancar."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>MR</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Maria Rosalinda</span>
                <span className={styles.authorRole}>General Manager, The Azure Resort</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Quotes size={40} weight="fill" className={styles.quoteIcon} />
            <p className={styles.quote}>
              "Fitur Guest Self-Ordering QR memangkas waktu tunggu pelanggan dan mengurangi beban pramusaji kami. Omzet naik drastis karena pelanggan mudah menambah pesanan."
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>BP</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Budi Prakoso</span>
                <span className={styles.authorRole}>Founder, Kopi Kita Group</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
