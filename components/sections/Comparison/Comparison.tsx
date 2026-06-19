"use client";

import { useRef, useEffect } from "react";
import { CheckCircle, XCircle } from "@phosphor-icons/react";
import styles from "./Comparison.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section className={`${styles.section} home-section`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>TARA VS APLIKASI LAIN</span>
          <h2 className={styles.title}>
            Kenapa Harus MyTara?
          </h2>
        </div>

        <div className={styles.tableWrapper} ref={tableRef}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.th} ${styles.thEmpty}`}>Perbandingan Fitur</th>
                <th className={`${styles.th} ${styles.tdHighlight}`}>
                  <div className={styles.colTitle}>MyTara</div>
                </th>
                <th className={styles.th}>
                  <div className={styles.colTitle}>Aplikasi Lain</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${styles.td} ${styles.tdLabel}`}>ALL-IN-ONE APP<br/><small style={{fontWeight: 400, color: '#64748b'}}>Penjualan, promo, inventori, karyawan, akuntansi</small></td>
                <td className={`${styles.td} ${styles.tdHighlight}`}>
                  <CheckCircle size={28} weight="fill" className={styles.iconCheck} />
                  <div style={{fontSize: 12, fontWeight: 600, marginTop: 4}}>Tanpa Tambahan Biaya</div>
                </td>
                <td className={styles.td}>
                  <XCircle size={28} weight="fill" className={styles.iconCross} />
                  <div style={{fontSize: 12, color: '#64748b', marginTop: 4}}>Berbayar Terpisah</div>
                </td>
              </tr>
              <tr>
                <td className={`${styles.td} ${styles.tdLabel}`}>MULTIPAYMENT<br/><small style={{fontWeight: 400, color: '#64748b'}}>Pembayaran digital QRIS, e-Wallet, Debit/Kredit</small></td>
                <td className={`${styles.td} ${styles.tdHighlight}`}>
                  <CheckCircle size={28} weight="fill" className={styles.iconCheck} />
                </td>
                <td className={styles.td}>
                  <CheckCircle size={28} weight="fill" className={styles.iconCheck} />
                </td>
              </tr>
              <tr>
                <td className={`${styles.td} ${styles.tdLabel}`}>OFFLINE CAPABILITY<br/><small style={{fontWeight: 400, color: '#64748b'}}>Tetap bisa transaksi meski internet mati</small></td>
                <td className={`${styles.td} ${styles.tdHighlight}`}>
                  <CheckCircle size={28} weight="fill" className={styles.iconCheck} />
                </td>
                <td className={styles.td}>
                  <XCircle size={28} weight="fill" className={styles.iconCross} />
                </td>
              </tr>
              <tr>
                <td className={`${styles.td} ${styles.tdLabel}`}>KEAMANAN TERJAMIN<br/><small style={{fontWeight: 400, color: '#64748b'}}>Pengaturan level akses & audit log lengkap</small></td>
                <td className={`${styles.td} ${styles.tdHighlight}`}>
                  <CheckCircle size={28} weight="fill" className={styles.iconCheck} />
                </td>
                <td className={styles.td}>
                  <XCircle size={28} weight="fill" className={styles.iconCross} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
