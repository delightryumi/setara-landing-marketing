"use client";

import { useState, useEffect, useRef } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { X } from "lucide-react";
import styles from "./BottomCTA.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BottomCTA() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <>
      <section className={`${styles.section} home-section`}>
        <div className={styles.container}>
          <div className={styles.box} ref={boxRef}>
            <div className={styles.blob1} />
            <div className={styles.blob2} />
            
            <div className={styles.content}>
              <h2 className={styles.title}>
                Siap Mengubah Cara Anda Berbisnis?
              </h2>
              <p className={styles.description}>
                Bergabung dengan ratusan properti lainnya yang telah mempercayakan operasionalnya pada ekosistem Tara.
              </p>
              <a
                href="https://wa.me/6281215070307?text=Halo%20Admin%20Tara%2C%20saya%20tertarik%20dengan%20solusi%20kemitraan%20Tara%20dan%20ingin%20berkonsultasi%20dengan%20tim%20sales."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryCta}
              >
                Hubungi Sales Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget Container */}
      <div className={styles.waWidgetContainer}>
        {showBubble && (
          <div className={styles.speechBubble}>
            <button 
              className={styles.bubbleCloseBtn} 
              onClick={() => setShowBubble(false)}
              aria-label="Tutup pesan"
            >
              <X size={10} strokeWidth={3} />
            </button>
            <div className={styles.bubbleContent}>
              <p className={styles.bubbleTextLine}>Selamat datang di Tara 👋</p>
              <p className={styles.bubbleTextLine}>Hubungi konsultan kami</p>
              <p className={styles.bubbleTextLine}>untuk pertanyaan dan info</p>
              <p className={styles.bubbleTextLine}>penawaran menarik</p>
            </div>
          </div>
        )}

        <a 
          href="https://wa.me/6281215070307?text=Halo%20Admin%20Tara%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20aplikasi%20My%20Tara." 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.waCapsule} 
          aria-label="Chat WhatsApp"
        >
          <div className={styles.waIconWrapper}>
            <WhatsappLogo size={24} weight="fill" />
          </div>
          <div className={styles.waTextWrapper}>
            <span className={styles.waTitle}>Hubungi Kami</span>
            <span className={styles.waSubtitle}>Online 24 Jam</span>
          </div>
        </a>
      </div>
    </>
  );
}

