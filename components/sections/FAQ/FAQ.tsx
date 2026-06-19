"use client";

import { useState, useEffect, useRef } from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./FAQ.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    question: "Apakah sistem kasir/POS tetap bisa berfungsi jika internet mati?",
    answer: "Ya, Tara POS dilengkapi dengan kapabilitas offline penuh. Semua transaksi akan disimpan dengan aman di penyimpanan lokal perangkat dan disinkronkan secara otomatis ke cloud begitu internet terhubung kembali."
  },
  {
    question: "Bagaimana proses migrasi data dari sistem lama kami?",
    answer: "Tim onboarding ahli kami akan mendampingi Anda secara penuh dalam proses migrasi data menu, stok bahan baku, data tamu, hingga pengaturan jurnal akuntansi awal. Proses ini dijamin minim hambatan (zero downtime)."
  },
  {
    question: "Apakah ada biaya tersembunyi untuk penambahan cabang atau staf?",
    answer: "Tidak ada biaya tersembunyi. Semua harga investasi tertera transparan di halaman harga sesuai paket yang Anda pilih, tanpa ada pungutan biaya lisensi per kasir atau potongan persentase per transaksi."
  },
  {
    question: "Apakah Tara bisa diintegrasikan dengan hardware yang sudah kami miliki?",
    answer: "Ya, Tara kompatibel dengan berbagai perangkat keras standar industri seperti printer thermal kasir (LAN/Bluetooth), tablet Android/iPad, barcode scanner, laci kasir otomatis, hingga sistem kartu kunci RFID pintu hotel."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 20 },
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
    <section className={`${styles.section} home-section`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>FAQ</span>
          <h2 className={styles.title}>Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className={styles.list} ref={listRef}>
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className={styles.questionButton}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <div className={styles.iconWrapper}>
                    <CaretDown size={18} weight="bold" />
                  </div>
                </button>
                <div 
                  className={styles.answerWrapper}
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    opacity: isOpen ? "1" : "0"
                  }}
                >
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
