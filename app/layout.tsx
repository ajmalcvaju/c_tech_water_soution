import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingAnimation from "@/components/LoadingAnimation";
import PageTransition from "@/components/PageTransition";
import { companyData } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ctechwatersolution.com"),
  title: {
    default: "C-Tech Water Solution | Water Purifiers, Treatment Plants & Medical Oxygen",
    template: "%s | C-Tech Water Solution",
  },
  description: "C-Tech Water Solution & Chambamkulath Agencies (Est. 1992). Kerala's trusted source for domestic RO purifiers, whole-house FRP water treatment plants, industrial gases (CO2, O2), and 24/7 emergency medical oxygen supplies.",
  keywords: [
    "Water Purifier",
    "Water Treatment Plant",
    "Industrial RO Plant",
    "Commercial RO Plant",
    "Industrial Water Treatment Solutions",
    "Water Purification Systems",
    "Whole House Water Filter Kerala",
    "Iron Removal Plant",
    "Water Softener Kerala",
    "Industrial Gases",
    "Medical Oxygen Supplier",
    "Medical Oxygen Cylinders",
    "Industrial Gas Supplier",
    "CO2 Gas Refilling",
    "Chambamkulath Traders",
    "Chambamkulath Agencies",
    "Kaipamangalam",
    "Vadanappilly",
    "Panangad",
    "Thrissur Water Purifiers"
  ],
  authors: [{ name: "C-Tech Water Solution & Chambamkulath Agencies" }],
  creator: "C-Tech Water Solution",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ctechwatersolution.com",
    title: "C-Tech Water Solution | Water Purifiers, Treatment Plants & Medical Oxygen",
    description: "27+ Years of Dedicated Service Tradition in Kerala. Domestic RO, whole-house filtration, industrial gases, and medical oxygen.",
    siteName: "C-Tech Water Solution",
    images: [
      {
        url: "/images/notice-front.jpg",
        width: 741,
        height: 1024,
        alt: "C-Tech Water Solution & Chambamkulath Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C-Tech Water Solution | Pure Water & Industrial Gases",
    description: "Kerala's trusted partner for pure drinking water systems, FRP treatment plants, and medical oxygen supplies.",
    images: ["/images/notice-front.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "C-Tech Water Solution & Chambamkulath Agencies",
    "alternateName": ["Chambamkulath Traders", "C-Tech Water Filtration"],
    "image": "https://ctechwatersolution.com/logo/logo.png",
    "telephone": "+91-480-2843289",
    "email": "ctechwatersolution507@gmail.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Main Road",
        "addressLocality": "Kaipamangalam",
        "addressRegion": "Kerala",
        "postalCode": "680681",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Panambikunnu, Vadanappilly",
        "addressLocality": "Panangad",
        "addressRegion": "Kerala",
        "postalCode": "680665",
        "addressCountry": "IN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.3124",
      "longitude": "76.1485"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:30",
      "closes": "19:30"
    },
    "priceRange": "$$",
    "description": "Provider of domestic and commercial water purifiers, whole-house FRP water treatment plants, industrial gases (CO2, O2, Argon), and 24/7 medical oxygen cylinder supplies."
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-blue-600 selection:text-white`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50/50 text-slate-800 font-sans">
        <LoadingAnimation />
        <Header />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
