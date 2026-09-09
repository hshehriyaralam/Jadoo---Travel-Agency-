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
  title: "Jadoo Travel Agency | Trips, Tours and Holiday Packages",
  description:"Discover custom travel packages tailored to your preferences. Book with Jadoo Travel Agency for unforgettable journeys",
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
