import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { getSiteUrl } from "../lib/site-config";
import "../styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Micade Techie | Digital Presence for Lagos Fashion Designers",
    template: "%s | Micade Techie",
  },
  description:
    "Micade helps fashion designers in Lagos build a professional digital presence they can own, understand, and grow.",
  applicationName: "Micade Techie",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Micade Techie",
    title: "Your fashion deserves more than a social media feed.",
    description:
      "A professional digital home for Lagos fashion designers—built with clear guidance.",
    url: "/",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Micade Techie digital presence for Lagos fashion designers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Micade Techie | Digital Presence for Lagos Fashion Designers",
    description: "A professional digital home for Lagos fashion designers—built with clear guidance.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
