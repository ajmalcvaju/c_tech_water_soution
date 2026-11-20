"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Droplet, 
  Factory, 
  Flame, 
  HeartPulse, 
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Sparkles,
  PhoneCall
} from "lucide-react";

interface ShowcaseData {
  title: string;
  subtitle: string;
  mainImage: string;
  imageAlt: string;
  imageFitCover?: boolean;
  secondaryImage?: string;
  badge: string;
  metricLabel: string;
  metricValue: string;
  accentGlow: string;
  tags: string[];
}

interface SlideData {
  id: number;
  tag: string;
  tagIcon: any;
  headingPrefix: string;
  headingAccent: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  bgImage: string;
  badgeText: string;
  highlights: string[];
  showcase: ShowcaseData;
}

const slides: SlideData[] = [
  {
    id: 0,
    tag: "Water Purifiers (Domestic & Commercial)",
    tagIcon: Droplet,
    headingPrefix: "Pure Water.",
    headingAccent: "Better Living.",
    description: "Multi-stage RO, UV, UF & alkaline mineral filtration systems engineered for Kerala homes and commercial establishments.",
    primaryCta: { label: "Explore Water Purifiers", href: "/products?category=water-purifiers" },
    secondaryCta: { label: "Book Free Water Test", href: "/contact" },
    bgImage: "/images/hero/slide-water-purifier.svg",
    badgeText: "27+ Years Trusted Service",
    highlights: ["TDS Control Up to 2000 ppm", "304 Food-Grade Stainless Steel", "Free Doorstep Water Testing"],
    showcase: {
      title: "C-Tech Multi-Stage Purifiers",
      subtitle: "Domestic, Countertop & SS 304 Range",
      mainImage: "/images/products/modern-purifier-kitchen.jpg",
      imageAlt: "C-Tech Water Purifiers in Modern Kitchen",
      imageFitCover: true,
      badge: "RO + UV + UF + Copper",
      metricLabel: "TDS Tolerance",
      metricValue: "Up to 2000 ppm",
      accentGlow: "from-sky-500/25 via-blue-600/15 to-transparent",
      tags: ["SS 304 Food-Grade", "Copper Alkaline", "Zero Contamination"]
    }
  },
  {
    id: 1,
    tag: "Water Treatment Plants (Commercial & Industrial)",
    tagIcon: Factory,
    headingPrefix: "Advanced Water",
    headingAccent: "Treatment Solutions.",
    description: "Heavy-duty FRP filtration, catalytic iron removal, and whole-house purification plants for villas, hospitals, and factories.",
    primaryCta: { label: "Explore Treatment Plants", href: "/products?category=treatment-plants" },
    secondaryCta: { label: "Get Site Consultation", href: "/contact" },
    bgImage: "/images/hero/slide-water-treatment.svg",
    badgeText: "Whole-House Roof-to-Tap",
    highlights: ["High-Pressure FRP Composite", "Catalytic Iron Removal", "1000 to 10,000 LPH Capacity"],
    showcase: {
      title: "Commercial FRP Plant",
      subtitle: "Roof-to-Tap Whole-Building Filtration",
      mainImage: "/images/products/commercial-frp-plant-installation.jpg",
      imageAlt: "Commercial FRP Water Treatment Plant Installation",
      imageFitCover: true,
      badge: "High-Pressure Composite Vessel",
      metricLabel: "Flow Capacity",
      metricValue: "1000 - 10000 LPH",
      accentGlow: "from-blue-500/30 via-indigo-600/15 to-transparent",
      tags: ["Multi-Port Auto Valve", "Iron & Odour Neutralizer", "Zero Pressure Drop"]
    }
  },
  {
    id: 2,
    tag: "Industrial Gas Supply",
    tagIcon: Flame,
    headingPrefix: "Reliable Industrial",
    headingAccent: "Gas Solutions.",
    description: "High-purity CO2, O2, Argon & Nitrogen cylinder supplies and refilling for manufacturing plants, soda units, and workshops.",
    primaryCta: { label: "Explore Industrial Gases", href: "/products?category=industrial-gases" },
    secondaryCta: { label: "Enquire Cylinder Refill", href: "/contact" },
    bgImage: "/images/hero/slide-industrial-gas.svg",
    badgeText: "Certified High Pressure",
    highlights: ["CO2, O2, Argon & Nitrogen", "Workshop Cylinder Exchange", "Soda Bottling Grade"],
    showcase: {
      title: "Industrial Gas Supply",
      subtitle: "Chambamkulath Traders • Est. 1992",
      mainImage: "/images/products/industrial-gas-warehouse-depot.jpg",
      imageAlt: "Industrial Gas Cylinders Warehouse and Delivery Depot",
      imageFitCover: true,
      badge: "150-200 Bar Tested",
      metricLabel: "Supply Type",
      metricValue: "Refill & New Supply",
      accentGlow: "from-amber-500/25 via-orange-600/15 to-transparent",
      tags: ["CO2 & Argon Gas", "Soda Bottling Parts", "Doorstep Delivery"]
    }
  },
  {
    id: 3,
    tag: "Medical Oxygen & Patient Support",
    tagIcon: HeartPulse,
    headingPrefix: "Supporting Healthcare",
    headingAccent: "With Medical Oxygen.",
    description: "Certified 99.5%+ IP grade medical oxygen cylinders and complete flow-meter regulator kits with priority delivery for clinics and bedridden patients.",
    primaryCta: { label: "Explore Medical Oxygen", href: "/products?category=medical-oxygen" },
    secondaryCta: { label: "Emergency Helpline", href: "/contact" },
    bgImage: "/images/hero/slide-medical-oxygen.svg",
    badgeText: "24/7 Patient Emergency",
    highlights: ["99.5%+ Pure Medical Grade", "Bedridden Patient Support", "Oxygen Meter with Humidifier"],
    showcase: {
      title: "Certified Medical Oxygen Set",
      subtitle: "With Flow-Meter & Humidifier Bottle",
      mainImage: "/images/products/medical-oxygen-hospital-delivery.jpg",
      imageAlt: "Medical Oxygen Delivery and Patient Support",
      imageFitCover: true,
      badge: "99.5%+ Pure IP Grade",
      metricLabel: "Response Time",
      metricValue: "Priority Dispatch",
      accentGlow: "from-emerald-500/25 via-teal-600/15 to-transparent",
      tags: ["Oxygen Meter Included", "Bedridden Home Support", "Refill Guarantee"]
    }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    resetAutoPlayTimer();
  };

  const resetAutoPlayTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
  }, [isPaused, nextSlide]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Desktop Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    setIsPaused(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Mobile Touch Gestures & Touch-and-Hold Pause
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
    setTouchStartY(touch.clientY);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;

    const touch = e.touches[0];
    const diffX = touch.clientX - touchStartX;
    const diffY = touch.clientY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null && isSwiping) {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;

      if (diffX < -40) {
        nextSlide();
      } else if (diffX > 40) {
        prevSlide();
      }
    }

    setTouchStartX(null);
    setTouchStartY(null);
    setIsSwiping(false);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      resetAutoPlayTimer();
    }, 1500);
  };

  const activeSlide = slides[currentSlide];
  const Icon = activeSlide.tagIcon;
  const showcase = activeSlide.showcase;

  return (
    <section
      ref={carouselRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "pan-y" }}
      className="relative w-full min-h-[660px] sm:min-h-[720px] lg:h-[820px] overflow-hidden bg-slate-950 select-none flex items-center"
      aria-label="C-Tech Hero Showcase"
    >
      {/* Background Animated Layer with Mouse Parallax & Ken Burns Effect */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: mousePos.x * -20,
            y: mousePos.y * -12,
          }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" },
            x: { duration: 0.3, ease: "easeOut" },
            y: { duration: 0.3, ease: "easeOut" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={activeSlide.bgImage}
            alt={activeSlide.headingPrefix}
            fill
            priority
            className="object-cover object-center"
          />

          {/* Cinematic Lighting Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          
          {/* Subtle Dynamic Ambient Flare */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-sky-400/15 blur-3xl pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Container: Split Grid Layout */}
      <div className="relative max-w-7xl mx-auto w-full h-full px-4 sm:px-6 lg:px-8 z-20 flex items-center pt-8 pb-24 sm:pt-14 sm:pb-24 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Highlights & CTAs (Below showcase on mobile, Left on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: direction * 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-5 sm:space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Category Tag Pill with Pulse Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-inner"
                >
                  <Icon className="w-4 h-4 text-sky-400 animate-pulse" />
                  <span>{activeSlide.tag}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span className="text-sky-300 font-bold">
                    {activeSlide.badgeText}
                  </span>
                </motion.div>

                {/* Cinematic Two-Tone Heading (Word by Word Reveal) */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
                      className="block text-white drop-shadow-sm"
                    >
                      {activeSlide.headingPrefix}
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.28, duration: 0.65, ease: "easeOut" }}
                      className="block bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
                    >
                      {activeSlide.headingAccent}
                    </motion.span>
                  </span>
                </h1>

                {/* Description Fade Up */}
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.5 }}
                  className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal drop-shadow-xs"
                >
                  {activeSlide.description}
                </motion.p>

                {/* Floating Highlight Chips */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
                >
                  {activeSlide.highlights.map((item, hIdx) => (
                    <motion.span 
                      key={hIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.45 + hIdx * 0.08, duration: 0.3 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/15 text-xs text-slate-200 font-medium hover:border-sky-400/50 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Buttons Staggered Entrance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.45 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3"
                >
                  <Link
                    href={activeSlide.primaryCta.href}
                    className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-600 hover:from-blue-500 hover:to-sky-500 shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{activeSlide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={activeSlide.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/25 transition-all duration-300 hover:border-white/40 active:scale-95"
                  >
                    <span>{activeSlide.secondaryCta.label}</span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: 3D Glassmorphic Showcase Stage with Real Product Photography (Top on mobile, Right on desktop) */}
          <div className="order-1 lg:order-2 flex lg:col-span-5 items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotateX: mousePos.y * -8,
                  rotateY: mousePos.x * 8,
                }}
                exit={{ opacity: 0, scale: 0.94, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ perspective: 1000 }}
                className="w-full max-w-[440px] relative"
              >
                {/* 3D Glassmorphic Stage Card */}
                <div className="relative rounded-3xl bg-slate-900/75 backdrop-blur-2xl border border-white/20 p-4 sm:p-6 lg:p-7 shadow-2xl shadow-black/80 overflow-hidden">
                  
                  {/* Internal Ambient Radial Lighting */}
                  <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${showcase.accentGlow} blur-2xl pointer-events-none`} />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-sky-500/10 blur-2xl pointer-events-none" />

                  {/* Stage Top Bar: Category pill + Authentic 27 Years Trust Shield Badge */}
                  <div className="relative z-10 flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-[11px] font-bold text-sky-300 tracking-wide uppercase">
                        <Sparkles className="w-3 h-3 text-sky-400" />
                        {showcase.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1.5 font-display leading-tight">
                        {showcase.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {showcase.subtitle}
                      </p>
                    </div>

                    {/* Official 27-Year Trust Seal */}
                    <div className="shrink-0 relative w-14 h-16 group/badge">
                      <Image
                        src="/images/badge-27years.png"
                        alt="27 Years Service Badge"
                        width={56}
                        height={64}
                        className="object-contain drop-shadow-[0_4px_12px_rgba(245,158,11,0.4)]"
                      />
                    </div>
                  </div>

                  {/* Central Product Presentation Area */}
                  <div className="relative z-10 my-3 sm:my-4 h-48 sm:h-60 w-full rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-3 flex items-center justify-center overflow-hidden group/product">
                    
                    {/* Realistic Product Image(s) */}
                    {showcase.secondaryImage ? (
                      /* Dual showcase for Medical Oxygen (Cylinders + Close-up Regulator Meter) */
                      <div className="w-full h-full flex items-center justify-between gap-2 px-2">
                        <motion.div 
                          className="relative w-1/2 h-full flex items-center justify-center"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Image
                            src={showcase.mainImage}
                            alt={showcase.imageAlt}
                            fill
                            className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="relative w-1/2 h-full flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-emerald-400/20 backdrop-blur-sm"
                          animate={{ y: [0, 4, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                          <span className="text-[10px] font-bold text-emerald-300 tracking-wider uppercase mb-1">
                            Flow Meter &amp; Humidifier
                          </span>
                          <div className="relative w-full h-36">
                            <Image
                              src={showcase.secondaryImage}
                              alt="Oxygen Flow Regulator with Humidifier Bottle"
                              fill
                              className="object-contain drop-shadow-[0_10px_20px_rgba(16,185,129,0.3)]"
                            />
                          </div>
                          <span className="text-[9px] text-slate-300 mt-1 font-semibold text-center">
                            Accurate LPM Dosage
                          </span>
                        </motion.div>
                      </div>
                    ) : (
                      /* Single Product Lineup Showcase */
                      <motion.div 
                        className="relative w-full h-full flex items-center justify-center"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Image
                          src={showcase.mainImage}
                          alt={showcase.imageAlt}
                          fill
                          className={showcase.imageFitCover ? "object-cover rounded-xl" : "object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] filter saturate-[1.05]"}
                        />
                      </motion.div>
                    )}

                    {/* Floating Floating Metric Pill */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 shadow-lg text-left"
                    >
                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        {showcase.metricLabel}
                      </span>
                      <span className="block text-xs font-bold text-white">
                        {showcase.metricValue}
                      </span>
                    </motion.div>

                    {/* Floating Verified Quality Check */}
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-[10px] font-bold text-emerald-300 flex items-center gap-1 shadow-md"
                    >
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Certified Quality</span>
                    </motion.div>
                  </div>

                  {/* Stage Bottom Feature Tags */}
                  <div className="relative z-10 flex flex-wrap items-center gap-1.5 pt-2">
                    {showcase.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Card Action Footer */}
                  <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                      Kerala Doorstep Delivery &amp; Support
                    </span>
                    <Link
                      href={activeSlide.primaryCta.href}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Navigation Arrow Controls with Magnetic Spring Feedback (Desktop only; mobile uses swipe & bottom dots) */}
      <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 z-30 pointer-events-none items-center justify-between px-3 sm:px-8">
        <motion.button
          type="button"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            prevSlide();
            resetAutoPlayTimer();
          }}
          className="pointer-events-auto p-3 sm:p-3.5 rounded-full bg-slate-950/70 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md transition-colors shadow-lg shadow-black/50 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            nextSlide();
            resetAutoPlayTimer();
          }}
          className="pointer-events-auto p-3 sm:p-3.5 rounded-full bg-slate-950/70 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md transition-colors shadow-lg shadow-black/50 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      {/* Bottom Indicators with Liquid Fill Progress Animation & Slide Counter */}
      <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-30 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950/80 backdrop-blur-xl border border-white/15 shadow-2xl">
          <span className="text-xs font-mono font-bold text-sky-400">
            0{currentSlide + 1}
          </span>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 focus:outline-none ${
                    isActive ? "w-12 bg-white/20" : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {isActive && (
                    <motion.div
                      key={`bar-${currentSlide}-${isPaused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{
                        duration: isPaused ? 0 : 5.5,
                        ease: "linear",
                      }}
                      className="absolute inset-0 h-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono font-bold text-slate-500">
            0{totalSlides}
          </span>
        </div>

        <div className="text-[11px] text-slate-400 tracking-wider font-medium opacity-80 sm:hidden">
          Swipe left/right • Press &amp; hold to pause
        </div>
      </div>
    </section>
  );
}
