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
  title: "Best Travel Agency Pakistan – Custom Itineraries & Exclusive Deals",
  description:"Explore top‑rated custom travel packages in Pakistan with Jadoo Travel Agency – personalized itineraries, exclusive deals, and unforgettable journeys tailored to your preferences",
  alternates: {
    canonical: "/",
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
      <body className="min-h-full flex flex-col">
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  );
}
