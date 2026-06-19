"use client";

import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "./LeadModal.module.css";

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [leadType, setLeadType] = useState("demo"); // "demo", "sales", "free"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    industryType: "hospitality",
    scale: "", // number of branches or rooms
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.type) {
        setLeadType(customEvent.detail.type);
      }
      setIsOpen(true);
      setSubmitSuccess(false);
      setSubmitError("");
    };

    window.addEventListener("open-lead-modal", handleOpenModal);
    return () => window.removeEventListener("open-lead-modal", handleOpenModal);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // 1. Save to Firebase Firestore
      await addDoc(collection(db, "leads"), {
        ...formData,
        leadType,
        timestamp: serverTimestamp()
      });

      // 2. Submit to Web3Forms to send email to admin@mytara.id
      // We use Web3Forms public access key or instruct user to define NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const emailBody = {
        access_key: accessKey,
        subject: `[Lead Baru] ${leadType.toUpperCase()} - ${formData.companyName}`,
        from_name: "Setara Landing Lead Capture",
        to_email: "admin@mytara.id",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        industry: formData.industryType,
        scale: formData.scale,
        notes: formData.notes,
        lead_type: leadType
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(emailBody)
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          industryType: "hospitality",
          scale: "",
          notes: ""
        });
      } else {
        // Even if Web3Forms fails, we saved it to Firestore, but we alert the error
        console.warn("Email dispatch failed, but lead saved in database.", result);
        setSubmitSuccess(true); // Treat as success since it's stored in db
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError("Gagal mengirim data. Silakan coba kembali atau hubungi kami di admin@mytara.id.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Tutup">
          <X size={20} />
        </button>

        {submitSuccess ? (
          <div className={styles.successWrapper}>
            <div className={styles.successIcon}>
              <Check size={32} />
            </div>
            <h3 className={styles.successTitle}>Permintaan Terkirim!</h3>
            <p className={styles.successDesc}>
              Terima kasih telah menghubungi Tara. Tim enterprise kami akan segera menghubungi Anda melalui WhatsApp atau Email dalam 1x24 jam kerja.
            </p>
            <button className={styles.btnDone} onClick={() => setIsOpen(false)}>
              Selesai
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.header}>
              <h3 className={styles.title}>
                {leadType === "free" && "Coba Gratis Tara"}
                {leadType === "demo" && "Request Demo Enterprise"}
                {leadType === "sales" && "Hubungi Sales Enterprise"}
              </h3>
              <p className={styles.subtitle}>
                Isi formulir korporat di bawah untuk memulai integrasi ekosistem hospitality berstandar industri.
              </p>
            </div>

            {submitError && <div className={styles.errorAlert}>{submitError}</div>}

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Contoh: Budi Santoso"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Nama Perusahaan / Hotel / Restoran</label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Contoh: PT Rasa Nusantara / Hotel Azure"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Bisnis</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Contoh: budi@rasanusantara.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Nomor WhatsApp (Aktif)</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Contoh: 081215070307"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Bidang Industri</label>
                <select
                  name="industryType"
                  value={formData.industryType}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="hospitality">Hotel & Penginapan (PMS)</option>
                  <option value="fnb">Food & Beverages (Restaurant/Cafe)</option>
                  <option value="retail">Retail & Distribusi</option>
                  <option value="enterprise">Multi-Industri / Korporasi</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Skala Bisnis (Jumlah Cabang / Kamar)</label>
                <input
                  type="text"
                  name="scale"
                  required
                  value={formData.scale}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Contoh: 12 Cabang / 80 Kamar"
                />
              </div>
            </div>

            <div className={styles.formGroup} style={{ marginTop: "16px" }}>
              <label className={styles.label}>Kebutuhan Khusus / Pesan Tambahan</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className={styles.textarea}
                rows={3}
                placeholder="Tuliskan jika ada kebutuhan integrasi kustom (ERP/SAP) atau sistem legacy..."
              />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
              {isSubmitting ? "Mengirim Permintaan..." : "Kirim Permintaan Ke Email"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
