"use client";

import { useEffect, useRef } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import styles from "./Pricing.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
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
    <section id="harga" className={`${styles.section} home-section`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Paket Harga</span>
          <h2 className={styles.title}>
            Investasi Transparan untuk Skalabilitas Bisnis
          </h2>
        </div>

        <div className={styles.pricingGrid} ref={cardsRef}>
          {/* Starter Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.planName}>Starter / UMKM</h3>
            <p className={styles.planDesc}>Cocok untuk 1 cabang restoran atau cafe skala kecil.</p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Maksimal 1 Cabang
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Point of Sales (POS) Reguler
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                HRD & Absensi Karyawan
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Basic Profit & Loss Report
              </li>
            </ul>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { type: "sales" } }))}
              className={styles.ctaButton}
            >
              Hubungi Sales
            </button>
          </div>

          {/* Business Plan */}
          <div className={`${styles.pricingCard} ${styles.highlightedCard}`}>
            <div className={styles.badge}>Paling Direkomendasikan</div>
            <h3 className={styles.planName}>Business</h3>
            <p className={styles.planDesc}>Standar industri untuk mengelola hingga 5 cabang.</p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Hingga 5 Cabang
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Semua fitur Starter
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Front Office & Room Management
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Digital Menu & Guest Self-Ordering (QR)
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Live Kitchen Display System (KDS)
              </li>
            </ul>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { type: "demo" } }))}
              className={`${styles.ctaButton} ${styles.highlightedCta}`}
            >
              Request Demo
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.planName}>Enterprise</h3>
            <p className={styles.planDesc}>Ekosistem lengkap tanpa batas untuk korporasi besar.</p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Cabang Tidak Terbatas
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Semua fitur Business
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Central Reservation System (CRS) & Superadmin Portal
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Automated Cost & Revenue Routing
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Priority 24/7 Support
              </li>
            </ul>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { type: "sales" } }))}
              className={styles.ctaButton}
            >
              Hubungi Sales
            </button>
          </div>

          {/* Customise Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.planName}>Customise</h3>
            <p className={styles.planDesc}>Sistem yang disesuaikan total dengan kebutuhan unik Anda.</p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Pembuatan Modul Kustom
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Integrasi API (ERP/SAP)
              </li>
              <li className={styles.featureItem}>
                <CheckCircle size={20} weight="fill" className={styles.checkIcon} />
                Custom White-label Domain
              </li>
            </ul>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { type: "sales" } }))}
              className={styles.ctaButton}
            >
              Hubungi Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
