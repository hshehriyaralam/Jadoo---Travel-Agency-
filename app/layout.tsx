import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jadoo-travel-agency-one.vercel.app"),
  title: {
    default: "Jadoo Travel Agency | Travel & Tour Packages in Pakistan",
    template: "%s | Jadoo Travel Agency",
  },
  description:
    "Jadoo Travel Agency helps travelers from Pakistan plan custom trips, tour packages, flights, hotels, and international holidays.",
  applicationName: "Jadoo Travel Agency",
  keywords: [
    "travel agency Pakistan",
    "Pakistan tour packages",
    "custom travel packages Pakistan",
    "international tour packages Pakistan",
    "family tour packages Pakistan",
    "flight booking Pakistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://jadoo-travel-agency-one.vercel.app/",
    siteName: "Jadoo Travel Agency",
    title: "Jadoo Travel Agency | Travel & Tour Packages in Pakistan",
    description:
      "Plan custom trips, tour packages, flights, hotels, and international holidays with Jadoo Travel Agency.",
    images: [{ url: "/seo-og.png", width: 1200, height: 630, alt: "Jadoo Travel Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadoo Travel Agency | Travel & Tour Packages in Pakistan",
    description:
      "Plan custom trips, tour packages, flights, hotels, and international holidays with Jadoo Travel Agency.",
    images: ["/seo-og.png"],
  },
  robots: { index: true, follow: true },
  icons: "/Group.svg",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
