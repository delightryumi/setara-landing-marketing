"use client";

import styles from "./MediaCoverage.module.css";

export default function MediaCoverage() {
  return (
    <section className={`${styles.section} home-section`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Media Coverage</h2>
          <p className={styles.desc}>Telah diliput oleh berbagai media terkemuka di Indonesia</p>
        </div>
        <div className={styles.logoGrid}>
          {/* Karena belum punya logo asli, kita pakai teks placeholder seperti startup pada umumnya */}
          <div className={styles.logoItem}>TechInAsia</div>
          <div className={styles.logoItem}>DetikFinance</div>
          <div className={styles.logoItem}>Kompas</div>
          <div className={styles.logoItem}>Bisnis.com</div>
          <div className={styles.logoItem}>Kontan</div>
          <div className={styles.logoItem}>DailySocial</div>
        </div>
      </div>
    </section>
  );
}
