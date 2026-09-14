import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jadoo-travel-agency-one.vercel.app"),
  title: "Custom Travel Packages Pakistan | Jadoo Travel Agency",
  description:
    "Explore custom travel packages in Pakistan, family-friendly Europe destinations, flight deals, and practical trip planning with Jadoo Travel Agency.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Jadoo Travel Agency",
    title: "Custom Travel Packages Pakistan | Jadoo Travel Agency",
    description:
      "Explore custom travel packages, Europe destinations, flight deals, and practical trip planning with Jadoo Travel Agency.",
    url: "https://jadoo-travel-agency-one.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jadoo Travel Agency - Custom Travel Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Travel Packages Pakistan | Jadoo Travel Agency",
    description:
      "Explore custom travel packages, Europe destinations, flight deals, and practical trip planning with Jadoo Travel Agency.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: "/Group.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
