import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "../styles.css";

export const metadata: Metadata = {
  title: "Micade Techie | Learn. Build. Grow.",
  description:
    "Micade Techie is an integrated digital growth company for small businesses.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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
