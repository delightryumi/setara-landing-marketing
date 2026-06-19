"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./Navbar.module.css";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/images/1.png" alt="Tara Logo" className={styles.logoImage} />
        </Link>
        <nav className={styles.nav}>
          <Link href="#fitur" className={styles.navLink}>Fitur</Link>
          <Link href="#solusi" className={styles.navLink}>Solusi</Link>
          <Link href="#harga" className={styles.navLink}>Harga</Link>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={styles.themeToggle}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { type: "sales" } }))}
            className={styles.ctaButton}
          >
            Hubungi Kami
          </button>
        </nav>
      </div>
    </header>
  );
}

