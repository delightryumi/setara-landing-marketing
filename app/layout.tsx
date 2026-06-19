import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tara by Setara Venture | Ekosistem Enterprise Hospitality",
  description: "Property Management System (PMS), Central Reservation System (CRS), dan Point of Sales (POS) berstandar Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

