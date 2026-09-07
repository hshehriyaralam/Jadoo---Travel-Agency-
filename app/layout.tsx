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
  description:
    "Plan memorable trips with Jadoo Travel Agency. Explore inspiring destinations, compare holiday ideas, and book your next adventure with ease.",
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
