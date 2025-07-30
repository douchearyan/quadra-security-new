import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ClientNavWrapper from "@/components/header/ClientNavWrapper";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

//change .svg formats to .png or .jpg one for future
export const metadata: Metadata = {
  title: {
    default: "Quadra Security | CCTV & Security System Installation",
    template: "%s | Quadra Security",
  },
  category: "Security Installation Services",
applicationName: "Quadra Security",
themeColor: "#1e1e1e",
  description:
    "Quadra Security provides professional installation of CCTV, biometric machines, ANPRs, EPABX systems, metal detectors, video door phones, and a wide range of security solutions.",
  keywords: [
    // Core Services
    "CCTV installation",
    "CCTV",
    "biometric system",
    "biometric machine installation",
    "security devices",
    "video door phones",
    "video door phone installation",
    "EPABX installation",
    "metal detectors",
    "ANPR cameras",
    "ANPR camera installation",
    "Quadra Security",
    "home security system installation",
    "office surveillance systems",
    "security camera installation",
    "access control systems",
    "fire alarm systems",
    "time attendance system",
    "burglar alarm installation",
    "motion detectors",
    "wireless CCTV systems",
    "HD CCTV installation",
    "night vision CCTV cameras",

    // Local SEO Keywords (Delhi NCR focus)
    "CCTV installation in Gurugram",
    "CCTV installation in Gurugram",
    "CCTV installation in Noida",
    "CCTV installation in Delhi",
    "CCTV installation in New Delhi",
    "CCTV installation in Delhi NCR",

    "Best security system provider in Gurugram",
    "Best security system provider in Gurugram",
    "Best security system provider in Noida",
    "Best security system provider in Delhi",
    "Best security system provider in New Delhi",
    "Best security system provider in Delhi NCR",

    "Biometric attendance system in Gurugram",
    "Biometric attendance system in Gurugram",
    "Biometric attendance system in Noida",
    "Biometric attendance system in Delhi",
    "Biometric attendance system in New Delhi",
    "Biometric attendance system in Delhi NCR",

    "Video surveillance setup in Gurugram",
    "Video surveillance setup in Gurugram",
    "Video surveillance setup in Noida",
    "Video surveillance setup in Delhi",
    "Video surveillance setup in New Delhi",
    "Video surveillance setup in Delhi NCR",

    "Security camera installers near me",
    "Affordable CCTV installation in Gurugram",
    "Affordable CCTV installation in Gurugram",
    "Affordable CCTV installation in Noida",
    "Affordable CCTV installation in Delhi",
    "Affordable CCTV installation in New Delhi",
    "Affordable CCTV installation in Delhi NCR",

    "Residential CCTV installation in Gurugram",
    "Residential CCTV installation in Gurugram",
    "Residential CCTV installation in Noida",
    "Residential CCTV installation in Delhi",
    "Residential CCTV installation in New Delhi",
    "Residential CCTV installation in Delhi NCR",

    "Commercial security systems in Gurugram",
    "Commercial security systems in Gurugram",
    "Commercial security systems in Noida",
    "Commercial security systems in Delhi",
    "Commercial security systems in New Delhi",
    "Commercial security systems in Delhi NCR",

    // Brand-focused
    "Hikvision CCTV installer",
    "CP Plus camera setup",
    "Dahua CCTV dealers",
    "ZKTeco biometric installation",
    "Panasonic video door phone",
    "Godrej security system",
    "Secureye camera systems",

    // Long-tail / High-Intent
    "Best CCTV system for apartment building",
    "How to install biometric attendance system",
    "Wireless camera for home with mobile access",
    "Cheapest video door phone with installation",
    "How to choose a security system for office",
    "CCTV with night vision and recording",

    // Voice Search Optimized
    "Who installs CCTV near me?",
    "Best biometric system for small office",
    "Affordable home security solutions",
    "Can I get CCTV with mobile access?",
    "Which is better — wired or wireless CCTV?",
  ],

  authors: [{ name: "Quadra Security", url: "https://www.quadrasecurity.com" }],
  metadataBase: new URL("https://www.quadrasecurity.com"),
  openGraph: {
    title: "Quadra Security | Complete Security Solutions",
    description:
      "Secure your premises with our expert installation of CCTV, ANPR, EPABX, biometric systems, and more.",
    url: "https://www.quadrasecurity.com",
    siteName: "Quadra Security",
    images: [
      {
        url: "https://www.quadrasecurity.com/logo_color.svg", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Quadra Security Installation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quadra Security | CCTV & Biometric Experts",
    description:
      "Secure your home and office with our full range of security systems including CCTV, ANPR, EPABX, biometrics, and more.",
    images: ["https://www.quadrasecurity.com/logo_color.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="4SZyundM086TBwsSBgTjzQ2x29phDN6SJFUuDhb87WY"
        />
      </head>
      <body className={`${urbanist.variable} antialiased`}>
        <Analytics />
        <Toaster />
        <ClientNavWrapper>{children}</ClientNavWrapper>
      </body>
    </html>
  );
}
