// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LANSEL TRADING PLC",
  description: "Lansel Trading PLC was established in 2022 by four accomplished women chemical engineers. Driven by a passion for solving challenges in the chemical industry, we identified a significant gap in the market and envisioned a company dedicated to Import- export, manufacturing and supplying essential materials for various businesses. With our strong backgrounds and dynamic energy, we are committed to delivering innovative solutions that meet the needs of our clients and contribute to the advancement of the industry.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/site.webmanifest",
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
