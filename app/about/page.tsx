import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Droplet, 
  HeartPulse, 
  Flame, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Eye 
} from "lucide-react";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import StatsMetricsStrip from "@/components/StatsMetricsStrip";
import TextReveal from "@/components/TextReveal";
import { companyData } from "@/data/company";

export const metadata = {
  title: "About Us | C-Tech Water Solution & Chambamkulath Agencies",
  description: "Learn about C-Tech Water Solution and Chambamkulath Traders (Est. 1992). Celebrating 27+ years of service tradition in water purification, whole-house treatment plants, and medical oxygen in Kerala.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. ATTRACTIVE COMPACT PAGE BANNER */}
      <section className="relative py-6 sm:py-8 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <div className="max-w-3xl space-y-2.5 flex flex-col items-center">
            <ScrollReveal direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-sky-300 text-xs sm:text-sm font-bold shadow-inner">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Established 1992 • 27+ Years Dedicated Tradition</span>
              </div>
            </ScrollReveal>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight font-display text-center">
              <TextReveal text="About C-Tech Water Solution" />
            </h1>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-2xl text-center mx-auto">
                Rooted in trust, powered by engineering excellence. Delivering pure water, vital medical oxygen, and dependable industrial gas solutions across Kerala for over three decades.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION & DUAL BRAND HERITAGE */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Content */}
            <ScrollReveal direction="right" className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
                Our Journey &amp; Legacy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
                <TextReveal 
                  text="Three Decades of Unwavering Integrity in Water & Gas Solutions"
                  highlightWords={["Integrity", "Water", "Gas"]}
                />
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Founded in <strong>1992</strong> under the pioneering banner of <strong>Chambamkulath Traders</strong>, our organization has grown to become one of the most respected names in Central Kerala for water purification systems, specialized water treatment plants, certified industrial gases, and emergency medical oxygen.
              </p>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                With operational headquarters in <strong>Kaipamangalam</strong> and dedicated technical service centers at <strong>Panambikunnu, Panangad and Vadanappilly</strong>, our dual entities — <strong>C-Tech Water Solution</strong> and <strong>Chambamkulath Agencies</strong> — operate under the visionary leadership of <strong>C.M. Sankaranarayanan</strong> and <strong>Manesh C.S</strong>.
              </p>

              <blockquote className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border-t-4 lg:border-t-0 lg:border-l-4 border-blue-600 text-slate-800 text-sm font-medium italic shadow-xs">
                &ldquo;ജലം ജീവദായിനി | ജലം ഔഷധം | ജലം രോഗകാരണം | ജലം ഭീകരരൂപി&rdquo;
                <span className="block text-xs text-sky-800 not-italic font-normal mt-1.5">
                  Water is life itself and nature&apos;s greatest medicine; yet when contaminated by heavy iron, high TDS, microbes, or chemical runoff, it becomes hazardous to human health. Our mission is to restore water to its pristine healing essence.
                </span>
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">C.M. Sankaranarayanan</h4>
                  <p className="text-xs text-slate-600 font-normal">Managing Partner • Commercial &amp; Industrial Operations</p>
                  <p className="text-xs text-blue-700 font-semibold mt-1">Ph: 0480 2843289 | 98 46 644 232</p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">Manesh C.S</h4>
                  <p className="text-xs text-slate-600 font-normal">Operations Lead • Technical Water &amp; Medical Oxygen</p>
                  <p className="text-xs text-blue-700 font-semibold mt-1">WhatsApp / GPay: 92 07 401 507</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Official Visiting Card Showcase */}
            <ScrollReveal direction="left" delay={0.2} className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 relative aspect-16/10 group">
                <Image
                  src="/images/visiting-card.jpg"
                  alt="Official Chambamkulath Traders & C-Tech Visiting Card"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-center text-slate-500 font-medium">
                Official Business Card: Chambamkulath Traders (Since 1992) &amp; C-Tech Water Solution
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. MILESTONES & PROVEN TRACK RECORD */}
      <StatsMetricsStrip ctaHref="/products" ctaLabel="Explore our products" />

      {/* 4. VISION & MISSION */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 h-full text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto md:mx-0">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">Our Vision</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  To be Kerala&apos;s most dependable brand for pure living — transforming contaminated household, commercial, and institutional water sources into pristine water, while providing an uninterrupted lifeline of certified medical oxygen and industrial gases to healthcare and industrial sectors.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 h-full text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto md:mx-0">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">Our Mission</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  To engineer customized, scientific water filtration solutions based strictly on genuine water sample testing; to use 100% food-grade, corrosion-free materials; to deliver prompt after-sales maintenance; and to stand beside bedridden patients with rapid 24/7 medical oxygen emergency support.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. OUR BUSINESS ACTIVITIES */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
              Structured Operations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              <TextReveal text="Our Main Business Activities" />
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed font-normal">
              We allocate approximately 70% of our capacity to domestic and industrial water systems, and 30% to critical industrial gases and healthcare oxygen.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Water Purifiers", desc: "Domestic RO, UV, UF purifiers, 304 food-grade stainless steel filter systems, and commercial water dispensers.", badge: "Core Domain (70%)", color: "blue" },
              { num: "02", title: "Water Treatment Plants", desc: "Whole-house FRP pressure vessels, iron removal systems, ion-exchange softeners, and industrial RO up to 10,000 LPH.", badge: "Core Domain (70%)", color: "blue" },
              { num: "03", title: "Industrial Gases", desc: "Certified Carbon Dioxide (CO2), Oxygen (O2), Argon, and Nitrogen cylinders for workshops, fabrication, and bottling.", badge: "Secondary Domain (30%)", color: "amber" },
              { num: "04", title: "Medical Oxygen", desc: "Certified 99.5% pure oxygen cylinders, flowmeters with humidifiers, and compassionate emergency home patient support.", badge: "Healthcare Domain", color: "emerald" },
            ].map((act, aIdx) => (
              <ScrollReveal key={aIdx} direction="up" delay={aIdx * 0.08} className="h-full">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center md:items-start md:text-left group">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 font-bold text-sm group-hover:scale-110 transition-transform">
                    {act.num}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 font-display">{act.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1 font-normal">
                    {act.desc}
                  </p>
                  <span className="text-xs font-semibold text-blue-600 mt-auto">{act.badge}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY COMMITMENT & NOTICES */}
      <section className="py-20 sm:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
                Quality Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                <TextReveal text="Our Commitment to Quality & Truthful Consultation" />
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                As emphasized in our official consumer advisory, an unserviced or improperly designed water purifier can accumulate toxic bacterial colonies and harm your family&apos;s health. We strictly follow scientific protocols:
              </p>

              <div className="space-y-4 lg:space-y-3.5">
                {[
                  { title: "Zero Guesswork:", text: "Every installation begins with a scientific on-site or lab water quality test (pH, TDS, Iron, Hardness)." },
                  { title: "Food-Grade Certified Components:", text: "We only use virgin food-grade plastic, 304 stainless steel, and certified TFC reverse osmosis membranes." },
                  { title: "Scheduled Maintenance Reminders:", text: "Proactive cartridge replacement and membrane chemical descaling to maintain peak hygiene." },
                  { title: "Certified High-Pressure Gas Testing:", text: "Hydro-tested cylinders certified to meet PESO and Indian Pharmacopoeia standards." },
                ].map((item, qIdx) => (
                  <div key={qIdx} className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-2 lg:gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">
                      <strong>{item.title}</strong> {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Document Gallery Cards */}
            <ScrollReveal direction="left" delay={0.2} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 aspect-3/4 shadow-2xl group">
                <Image
                  src="/images/notice-front.jpg"
                  alt="C-Tech Notice Front Side"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 aspect-3/4 shadow-2xl group">
                <Image
                  src="/images/notice-back.jpg"
                  alt="C-Tech Notice Back Side"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <CTASection
        title="Experience 27+ Years of Water & Gas Excellence"
        description="Book your free water testing session or discuss industrial gas requirements with our technical team today."
      />
    </div>
  );
}
