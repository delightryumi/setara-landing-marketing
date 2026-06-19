import Link from "next/link";
import { Buildings, EnvelopeSimple, Phone, MapPin, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <img src="/images/1.png" alt="Tara Logo" className={styles.logoImage} />
            </Link>
            <p className={styles.description}>
              Ekosistem sistem Property Management System (PMS) dan Point of Sales (POS) berstandar Enterprise oleh PT Setara Venture.
            </p>
            <div className={styles.contactInfo}>
              <a href="mailto:admin@mytara.id" className={styles.contactItem}>
                <EnvelopeSimple size={20} /> admin@mytara.id
              </a>
              <a href="https://wa.me/6281215070307" className={styles.contactItem}>
                <Phone size={20} /> +62 812-1507-0307
              </a>
              <div className={styles.contactItem} style={{ alignItems: "flex-start" }}>
                <MapPin size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Jl. Kyai Kendagi No. 58,<br />Temanggung, Jawa Tengah</span>
              </div>
            </div>
            <div className={styles.socials} style={{ marginTop: "24px" }}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn"><LinkedinLogo size={24} weight="fill" /></a>
              <a href="#" className={styles.socialLink} aria-label="Instagram"><InstagramLogo size={24} weight="fill" /></a>
            </div>
          </div>

          <div>
            <h4 className={styles.title}>Produk</h4>
            <ul className={styles.linkList}>
              <li><Link href="#fitur" className={styles.link}>Point of Sales (POS)</Link></li>
              <li><Link href="#fitur" className={styles.link}>Central Reservation (CRS)</Link></li>
              <li><Link href="#fitur" className={styles.link}>HRD & Attendance</Link></li>
              <li><Link href="#fitur" className={styles.link}>Profit & Loss Engine</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.title}>Layanan</h4>
            <ul className={styles.linkList}>
              <li><Link href="#harga" className={styles.link}>Paket Harga</Link></li>
              <li><a href="#" className={styles.link}>Konsultasi IT</a></li>
              <li><a href="#" className={styles.link}>Custom Development</a></li>
              <li><a href="#" className={styles.link}>Hardware Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.title}>Perusahaan</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Tentang Kami</a></li>
              <li><a href="#" className={styles.link}>Karir</a></li>
              <li><a href="#" className={styles.link}>Kebijakan Privasi</a></li>
              <li><a href="#" className={styles.link}>Syarat & Ketentuan</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 PT Setara Venture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
