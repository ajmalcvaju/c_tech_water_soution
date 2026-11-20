import Image from "next/image";
import Link from "next/link";
import { 
  Droplet, 
  Factory, 
  Flame, 
  HeartPulse, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  FlaskConical, 
  Wrench, 
  Users, 
  Sparkles,
  Snowflake,
  Cpu 
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import StatsMetricsStrip from "@/components/StatsMetricsStrip";
import CTASection from "@/components/CTASection";
import WaterChecklist from "@/components/WaterChecklist";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ProductCard from "@/components/ProductCard";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";

export const metadata = {
  title: "C-Tech Water Solution | Water Purifiers, Treatment Plants & Medical Oxygen",
  description: "C-Tech Water Solution & Chambamkulath Agencies. Leading provider of domestic RO purifiers, whole-house FRP water treatment plants, industrial gases, and emergency medical oxygen in Kerala.",
};

export default function HomePage() {
  const featuredProducts = productsData.filter((p) => p.isFeatured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: FOUR-SLIDE CINEMATIC HERO CAROUSEL */}
      <HeroCarousel />

      {/* SECTION 2: COMPANY INTRODUCTION (Split Editorial Layout with Parallax) */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image & Badge Display */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="right" duration={0.8}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-4/3 sm:aspect-square bg-slate-950 group">
                  <Image
                    src="/images/notice-front.jpg"
                    alt="C-Tech Water Solution Notice Front"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating 27 Years Trust Shield Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 px-3 py-2 sm:p-3 rounded-xl bg-white/95 backdrop-blur-xl shadow-xl border border-white/60 flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
                      <Image
                        src="/images/badge-27years.png"
                        alt="27 Year Service Badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-600 block leading-none">
                        Verified Heritage
                      </span>
                      <h4 className="text-xs sm:text-[13px] font-black text-slate-900 leading-tight mt-0.5">
                        27+ Years of Service Tradition
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                        Established 1992 in Thrissur, Kerala
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl -z-10" />
              </ScrollReveal>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>About C-Tech &amp; Chambamkulath Agencies</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.15}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-display">
                  <TextReveal 
                    text="Your Trusted Partner for Water & Industrial Solutions"
                    highlightWords={["Water", "Industrial", "Solutions"]}
                  />
                </h2>
              </ScrollReveal>

              {/* Malayalam Tagline Quote with Shimmer */}
              <ScrollReveal direction="up" delay={0.25}>
                <blockquote className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border-t-4 lg:border-t-0 lg:border-l-4 border-blue-600 text-slate-800 text-sm italic font-medium shadow-xs">
                  &ldquo;{companyData.malayalamTagline}&rdquo;
                  <span className="block text-xs text-sky-800 not-italic font-normal mt-1.5">
                    — Water is life-giving, water is healing medicine; but contaminated water causes chronic disease. We provide verified water purity from rooftop to tap.
                  </span>
                </blockquote>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Operating with roots established in <strong>1992</strong>, <strong>{companyData.name}</strong> along with <strong>{companyData.agencyEntity}</strong> and <strong>{companyData.parentEntity}</strong> provides comprehensive, high-quality water purification systems and industrial solutions across Kerala. 
                </p>
              </ScrollReveal>

              {/* Distribution Boxes: 70% Water / 30% Gas with Hover Reveal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <ScrollReveal direction="up" delay={0.35}>
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all duration-300 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-1.5">
                      <Droplet className="w-4 h-4 text-sky-500 animate-pulse" />
                      <span>70% Core Focus</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 font-display">Water Purifiers &amp; Treatment Plants</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Domestic RO+UV purifiers, food-grade SS systems, whole-house FRP filtration, iron removal &amp; water softening.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-md transition-all duration-300 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1.5">
                      <HeartPulse className="w-4 h-4 text-emerald-500 animate-pulse" />
                      <span>30% Secondary Focus</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 font-display">Industrial Gases &amp; Medical Oxygen</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Certified Medical Oxygen cylinders, 24/7 patient support, industrial CO2/O2, and soda machinery equipment.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={0.45}>
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group/btn"
                  >
                    <span>Know More About Us</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <span>Contact Our Engineers</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MAIN PRODUCT CATEGORIES (6 Cards in 3x2 Grid) */}
      <section className="py-20 sm:py-28 bg-slate-50/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Comprehensive Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              <TextReveal text="Our Products & Solutions" />
            </h2>
            <p className="text-base text-slate-600 mt-3.5 leading-relaxed font-normal">
              Explore our core business categories designed with cutting-edge engineering and backed by 27+ years of service integrity.
            </p>
          </ScrollReveal>

          {/* 3 Grid In A Row Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Water Purifiers (Domestic & Commercial) */}
            <ScrollReveal direction="up" delay={0.05} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full overflow-hidden">
                {/* Top Colored Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400" />

                {/* Seamless Luminous Image Container */}
                <div className="relative h-64 bg-gradient-to-b from-slate-50/90 via-slate-100/50 to-white overflow-hidden p-6 flex items-center justify-center border-b border-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.22),transparent_70%)] pointer-events-none" />
                  <Image
                    src="/images/products/c-tech-aqua-plus-clean.jpg"
                    alt="C-Tech Aqua Plus Domestic & Commercial Water Purifier"
                    fill
                    className="object-contain p-3 group-hover:scale-108 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081b36] text-sky-300 text-[11px] font-black tracking-wider uppercase flex items-center gap-2 border border-sky-500/60 shadow-lg shadow-blue-950/25 backdrop-blur-md z-10">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Primary Solution</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-display">
                    Water Purifiers (Domestic &amp; Commercial)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Advanced multi-stage RO, UV, UF, and food-grade stainless steel purifiers engineered for Kerala&apos;s well and tap water conditions. Includes alkaline mineral controllers.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">Domestic RO+UV</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">SS 304 Food-Grade</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">Alkaline Balancer</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">Microplastic Free</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      href="/products?category=water-purifiers"
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-100/80 hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                    >
                      <span>Explore Purifiers</span>
                      <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-white/20 flex items-center justify-center transition-colors text-slate-700 group-hover/btn:text-white shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Whole-House FRP Water Treatment Plants */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full overflow-hidden">
                {/* Top Colored Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500" />

                {/* Seamless Luminous Image Container */}
                <div className="relative h-64 bg-gradient-to-b from-slate-50/90 via-slate-100/50 to-white overflow-hidden p-6 flex items-center justify-center border-b border-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_70%)] pointer-events-none" />
                  <Image
                    src="/images/products/c-tech-frp-vessel.jpg"
                    alt="C-Tech Whole-House FRP Water Treatment Plants"
                    fill
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081b36] text-sky-300 text-[11px] font-black tracking-wider uppercase flex items-center gap-2 border border-sky-500/60 shadow-lg shadow-blue-950/25 backdrop-blur-md z-10">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>High-Pressure Composite Vessel</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-display">
                    Water Treatment Plants (FRP)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Heavy-duty fiber-reinforced plastic (FRP) automated treatment plants. Purify water right at your overhead tank inlet for whole-house protection, iron removal, and water softening.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">Whole-House FRP</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">Iron Removal (IRP)</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">Resin Softeners</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="leading-tight">Auto Multiport</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      href="/products?category=treatment-plants"
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-100/80 hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                    >
                      <span>Explore Treatment Plants</span>
                      <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-white/20 flex items-center justify-center transition-colors text-slate-700 group-hover/btn:text-white shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: RO Treatment Plant (Commercial & Industrial RO) */}
            <ScrollReveal direction="up" delay={0.15} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full overflow-hidden">
                {/* Top Colored Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500" />

                {/* Seamless Luminous Image Container */}
                <div className="relative h-64 bg-gradient-to-b from-slate-50/90 via-slate-100/50 to-white overflow-hidden p-6 flex items-center justify-center border-b border-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.22),transparent_70%)] pointer-events-none" />
                  <Image
                    src="/images/products/industrial-ro-plant-skid.jpg"
                    alt="C-Tech Commercial and Industrial RO Treatment Plant"
                    fill
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081b36] text-cyan-300 text-[11px] font-black tracking-wider uppercase flex items-center gap-2 border border-cyan-500/60 shadow-lg shadow-cyan-950/25 backdrop-blur-md z-10">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>250 - 10,000 LPH RO Skid</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors font-display">
                    RO Treatment Plant (Industrial)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Turnkey commercial and industrial reverse osmosis systems mounted on heavy-duty stainless steel skid frames with high-pressure pumps and automated control panels.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span className="leading-tight">250 to 10,000 LPH</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span className="leading-tight">Multistage Pump</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span className="leading-tight">Digital TDS Panel</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-cyan-50/50 group-hover:border-cyan-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span className="leading-tight">SS Skid Mount</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      href="/products?category=treatment-plants"
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-100/80 hover:bg-cyan-600 text-slate-800 hover:text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                    >
                      <span>Explore RO Plants</span>
                      <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-white/20 flex items-center justify-center transition-colors text-slate-700 group-hover/btn:text-white shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Commercial Stainless Steel Water Cooler */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-sky-300 transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full overflow-hidden">
                {/* Top Colored Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />

                {/* Seamless Luminous Image Container */}
                <div className="relative h-64 bg-gradient-to-b from-slate-50/90 via-slate-100/50 to-white overflow-hidden p-6 flex items-center justify-center border-b border-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.2),transparent_70%)] pointer-events-none" />
                  <Image
                    src="/images/products/commercial-water-cooler-ss.jpg"
                    alt="C-Tech Commercial Stainless Steel Water Cooler"
                    fill
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081b36] text-sky-300 text-[11px] font-black tracking-wider uppercase flex items-center gap-2 border border-sky-500/60 shadow-lg shadow-sky-950/25 backdrop-blur-md z-10">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Commercial SS 304 Cooler</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-sky-600 transition-colors font-display">
                    Commercial Water Coolers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Food-grade SS 304 heavy-duty commercial water coolers with integrated multi-stage filtration. Engineered for schools, colleges, hospitals, workshops, and offices.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-sky-50/50 group-hover:border-sky-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="leading-tight">SS 304 Body</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-sky-50/50 group-hover:border-sky-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="leading-tight">Integrated RO/UV</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-sky-50/50 group-hover:border-sky-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="leading-tight">2 to 4 Chrome Taps</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-sky-50/50 group-hover:border-sky-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="leading-tight">Fast Compressor</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      href="/products?category=water-purifiers"
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-100/80 hover:bg-sky-600 text-slate-800 hover:text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                    >
                      <span>Explore Water Coolers</span>
                      <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-white/20 flex items-center justify-center transition-colors text-slate-700 group-hover/btn:text-white shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5: Industrial Gases (CO2, O2, Argon, Nitrogen) */}
            <ScrollReveal direction="up" delay={0.25} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-amber-300 transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full overflow-hidden">
                {/* Top Colored Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500" />

                {/* Seamless Luminous Image Container */}
                <div className="relative h-64 bg-gradient-to-b from-slate-50/90 via-slate-100/50 to-white overflow-hidden p-6 flex items-center justify-center border-b border-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.2),transparent_70%)] pointer-events-none" />
                  <Image
                    src="/images/products/gas-cylinders-lineup.jpg"
                    alt="Industrial Gas Cylinders and Supply"
                    fill
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081b36] text-amber-300 text-[11px] font-black tracking-wider uppercase flex items-center gap-2 border border-amber-500/60 shadow-lg shadow-amber-950/25 backdrop-blur-md z-10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>150-200 Bar Tested</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors font-display">
                    Industrial Gases (CO2, O2, Argon)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    High-purity industrial gas cylinders and scheduled refilling for factories, welding workshops, manufacturing units, and soda bottling machinery.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50/50 group-hover:border-amber-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="leading-tight">Industrial CO2 &amp; O2</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50/50 group-hover:border-amber-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="leading-tight">Argon &amp; Nitrogen</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50/50 group-hover:border-amber-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="leading-tight">Scheduled Routes</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50/50 group-hover:border-amber-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="leading-tight">Soda Bottling Spares</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      href="/products?category=industrial-gases"
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-100/80 hover:bg-amber-600 text-slate-800 hover:text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                    >
                      <span>Explore Industrial Gases</span>
                      <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-white/20 flex items-center justify-center transition-colors text-slate-700 group-hover/btn:text-white shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 6: Medical Oxygen & Patient Support */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-emerald-300 transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full overflow-hidden">
                {/* Top Colored Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-green-500" />

                {/* Seamless Luminous Image Container */}
                <div className="relative h-64 bg-gradient-to-b from-slate-50/90 via-slate-100/50 to-white overflow-hidden p-6 flex items-center justify-center border-b border-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2),transparent_70%)] pointer-events-none" />
                  <Image
                    src="/images/products/gas-cylinders-lineup.jpg"
                    alt="Medical Oxygen Regulators & Cylinders"
                    fill
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081b36] text-emerald-300 text-[11px] font-black tracking-wider uppercase flex items-center gap-2 border border-emerald-500/60 shadow-lg shadow-emerald-950/25 backdrop-blur-md z-10">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>99.5%+ Pure IP Grade</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors font-display">
                    Medical Oxygen &amp; Patient Support
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Certified 99.5%+ pure medical oxygen cylinders, precision flowmeters with humidifiers (&apos;Oxygen Meter&apos;), and 24/7 emergency doorstep delivery for bedridden patients.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="leading-tight">99.5%+ Pure Grade</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="leading-tight">Bedridden Support</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="leading-tight">Oxygen Flowmeter</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100/80 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="leading-tight">24/7 Fast Delivery</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      href="/products?category=medical-oxygen"
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-100/80 hover:bg-emerald-600 text-slate-800 hover:text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                    >
                      <span>Explore Medical Oxygen</span>
                      <div className="w-7 h-7 rounded-full bg-white group-hover/btn:bg-white/20 flex items-center justify-center transition-colors text-slate-700 group-hover/btn:text-white shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MILESTONE NUMBERS & TRUST METRICS STRIP */}
      <StatsMetricsStrip />

      {/* 10-POINT WATER CHECKLIST SECTION (FROM NOTICE BACK) */}
      <WaterChecklist />

      {/* SECTION 4: WHY CHOOSE US (Bento-Grid Modern Visuals with Staggered Entrance) */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              <TextReveal text="Why Choose C-Tech & Chambamkulath" />
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed font-normal">
              We stand apart through authentic scientific testing, certified engineering components, and over three decades of unbroken customer dedication.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: ShieldCheck,
                color: "blue",
                title: "27+ Years Proven Legacy",
                desc: "Operating continuously with thousands of satisfied domestic, commercial, and industrial customers throughout Kerala since 1992."
              },
              {
                icon: FlaskConical,
                color: "sky",
                title: "Free Water Testing First",
                desc: "We never guess. We measure your water's exact TDS, iron, pH, and hardness, recommending strictly what your water chemistry requires."
              },
              {
                icon: HeartPulse,
                color: "emerald",
                title: "Compassionate Patient Care",
                desc: "Immediate priority delivery of medical oxygen cylinders, regulators, and nasal masks for bedridden patients and emergency home care."
              },
              {
                icon: Wrench,
                color: "amber",
                title: "All Brands Service & Repair",
                desc: "Prompt maintenance, filter cartridge replacement, membrane cleaning, and valve repair for all types of water filtration systems."
              },
              {
                icon: Award,
                color: "indigo",
                title: "Certified Quality Materials",
                desc: "Food-grade SS 304 stainless steel, pressure-tested FRP vessels, and certified food-grade CO2 and 99.5% IP medical oxygen gases."
              },
              {
                icon: Users,
                color: "rose",
                title: "Local Technical Support",
                desc: "Direct access to experienced technical leads (C.M. Sankaranarayanan & Manesh C.S) ensuring fast on-site support across Thrissur."
              }
            ].map((strength, sIdx) => {
              const Icon = strength.icon;
              return (
                <ScrollReveal
                  key={sIdx}
                  direction="up"
                  delay={sIdx * 0.08}
                  className="h-full"
                >
                  <div className="p-7 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {strength.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED SOLUTIONS SHOWCASE */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between mb-12 gap-4">
            <ScrollReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                Handpicked Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
                Featured Solutions
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <span>View Full Product Catalogue</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, pIdx) => (
              <ProductCard key={product.id} product={product} index={pIdx} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <CTASection />
    </div>
  );
}
