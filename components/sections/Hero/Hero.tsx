"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animation
    const tl = gsap.timeline();
    
    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }

    if (imageRef.current) {
      tl.to(
        imageRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      );
      
      // Floating animation for the image
      gsap.to(imageRef.current, {
        y: "-=15",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
      });
    }
  }, []);

  return (
    <section className={`${styles.hero} home-section`}>
      <div className={styles.container}>
        <div ref={textRef}>
          <div className={styles.badge}>PMS, CRS & POS Berstandar Enterprise</div>
          <h1 className={styles.title}>
            Elevate Your Hospitality Business with <span>Tara</span>
          </h1>
          <p className={styles.description}>
            Ekosistem sistem terintegrasi untuk mengelola puluhan cabang hotel dan restoran dari satu layar Superadmin.
          </p>
          <div className={styles.ctaGroup}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { type: "free" } }))}
              className={styles.primaryCta}
            >
              Coba Gratis / Request Demo
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { type: "sales" } }))}
              className={styles.secondaryCta}
            >
              Hubungi Sales
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper} ref={imageRef}>
          <img 
            src="/images/hero-indonesia.png" 
            alt="Wirausaha Indonesia MyTara" 
            className={styles.mockupImage} 
          />
        </div>
      </div>
    </section>
  );
}

