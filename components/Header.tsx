"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Phone, 
  Droplet, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { companyData } from "@/data/company";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Luxury Announcement Bar with Gentle Entrance */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:block bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 transition-all z-50 relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Heritage Status */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              27+ Years Tradition • Est. 1992
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300 text-xs">
              <Droplet className="w-3.5 h-3.5 text-sky-400" />
              <span>Pure Drinking Water &amp; Medical Oxygen Solutions</span>
            </span>
          </div>

          {/* Right: Instant Contact */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${companyData.phones.landline}`}
              className="hover:text-sky-400 transition-colors flex items-center gap-1"
              title="Office Landline"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span className="hidden sm:inline">Ph:</span>
              <span>{companyData.phones.landline}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`tel:${companyData.phones.primaryMobile}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
              title="Mobile"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{companyData.phones.primaryMobile}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={companyData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-bold"
              title="WhatsApp Direct"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Sticky Glass Navigation with Motion Entrance */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-2.5 border-b border-slate-200/80"
            : "bg-white/98 backdrop-blur-md shadow-xs py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus:outline-none rounded-xl"
              aria-label="C-Tech Water Solution Home"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="relative h-12 w-48 sm:h-14 sm:w-56"
              >
                <Image
                  src="/logo/logo.png"
                  alt="C-Tech Water Filtration & Chambamkulath Agencies Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation Links with Animated Active Indicator Pill */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/60 relative">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-bold rounded-xl transition-colors duration-200 z-10 ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/70 -z-10"
                      />
                    )}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA Button with Micro-Animation */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-200 group/quote"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-200 animate-pulse" />
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/80 transition-transform duration-200 group-hover/quote:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <motion.a
                whileTap={{ scale: 0.92 }}
                href={companyData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors border border-emerald-100"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </motion.a>

              <motion.button
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer with Staggered Link Animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                            : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 shadow-md text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-sky-200" />
                  <span>Get a Free Quote &amp; Water Test</span>
                </Link>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={`tel:${companyData.phones.secondaryMobile}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={companyData.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
