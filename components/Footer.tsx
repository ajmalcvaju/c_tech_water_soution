"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Droplet, 
  ChevronRight,
  HeartPulse,
  Flame,
  Factory,
  ArrowUp
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { companyData } from "@/data/company";

export default function Footer() {
  const currentYear = 2026;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Top Value Strip with Staggered Elements */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-sky-950 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-400/30 transition-colors"
          >
            <div className="p-3 rounded-xl bg-blue-600/20 text-sky-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base font-display">27+ Years Legacy</h4>
              <p className="text-xs text-slate-400">Serving Kerala with trusted water &amp; gas solutions since 1992.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400/30 transition-colors"
          >
            <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
              <HeartPulse className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base font-display">Medical Oxygen Priority</h4>
              <p className="text-xs text-slate-400">Dedicated emergency support for bedridden &amp; home patients.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/30 transition-colors"
          >
            <div className="p-3 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
              <Droplet className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base font-display">Free Water Testing</h4>
              <p className="text-xs text-slate-400">Scientific TDS, pH, &amp; hardness diagnosis at your doorstep.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-md hover:scale-102 transition-transform">
              <div className="relative h-12 w-52">
                <Image
                  src="/logo/logo.png"
                  alt="C-Tech Water Solution Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              <strong className="text-white">{companyData.fullName}</strong> is Kerala&apos;s trusted authority in domestic and industrial water purification, water treatment plants, certified industrial gases, and emergency medical oxygen supplies.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <p className="text-amber-400 font-semibold">{companyData.malayalamTagline}</p>
              <p className="text-slate-400">Dealers in: CO2, O2, Medical Oxygen, Water Purifiers, RO Systems, Soda Machines &amp; Nilkamal Bottle Crates.</p>
            </div>

            <div className="pt-1">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={companyData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp: {companyData.phones.whatsappFormatted}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xs font-bold tracking-widest text-white uppercase font-display">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>27-Year Tradition</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xs font-bold tracking-widest text-white uppercase font-display">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products?category=water-purifiers" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <Droplet className="w-3.5 h-3.5 text-sky-400" />
                  <span className="transition-transform group-hover:translate-x-0.5">Domestic RO Purifiers</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=treatment-plants" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <Factory className="w-3.5 h-3.5 text-blue-400" />
                  <span className="transition-transform group-hover:translate-x-0.5">Whole-House Plants</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=treatment-plants" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <Factory className="w-3.5 h-3.5 text-blue-400" />
                  <span className="transition-transform group-hover:translate-x-0.5">Industrial RO Systems</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=industrial-gases" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span className="transition-transform group-hover:translate-x-0.5">Industrial CO2 &amp; O2</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=medical-oxygen" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="transition-transform group-hover:translate-x-0.5">Medical Oxygen Cylinders</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=treatment-plants" className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors group">
                  <Droplet className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="transition-transform group-hover:translate-x-0.5">Whole-House FRP Plants</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact & Locations */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xs font-bold tracking-widest text-white uppercase font-display">
              Get in Touch
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-display">Head Office:</strong>
                  <p className="text-slate-400">{companyData.addresses.main.area} - {companyData.addresses.main.pincode}, {companyData.addresses.main.district} Dist., Kerala</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-display">Service &amp; Agencies:</strong>
                  <p className="text-slate-400">{companyData.addresses.branch.street}, {companyData.addresses.branch.area} - {companyData.addresses.branch.pincode}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${companyData.phones.landline}`} className="block text-slate-300 hover:text-white font-medium">
                    {companyData.phones.landline}
                  </a>
                  <a href={`tel:${companyData.phones.primaryMobile}`} className="block text-slate-300 hover:text-white font-medium">
                    {companyData.phones.primaryMobile} / {companyData.phones.secondaryMobile}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${companyData.emails.primary}`} className="text-slate-300 hover:text-white break-all text-xs font-medium">
                  {companyData.emails.primary}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {companyData.fullName}. All rights reserved. (Established 1992).
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>Water Purifiers</span>
            <span>•</span>
            <span>Water Treatment Plants</span>
            <span>•</span>
            <span>Industrial Gases</span>
            <span>•</span>
            <span>Medical Oxygen</span>
          </div>
        </div>
      </div>

      {/* Floating Animated Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-7 z-40 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-sky-400 border border-white/20 backdrop-blur-xl shadow-xl shadow-black/40 transition-colors focus:outline-none"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
