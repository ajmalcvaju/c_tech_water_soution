import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  FlaskConical, 
  RefreshCw, 
  Home, 
  ShieldAlert, 
  Factory, 
  Flame, 
  HeartPulse, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import WaterChecklist from "@/components/WaterChecklist";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";

export const metadata = {
  title: "Services | C-Tech Water Solution & Chambamkulath Agencies",
  description: "Comprehensive water purification installation, repair, filter replacement, whole-house treatment plant setup, and emergency medical oxygen delivery in Kerala.",
};

export default function ServicesPage() {
  const waterPurificationServices = servicesData.filter(
    (s) => s.category === "water-purification"
  );
  const waterTreatmentServices = servicesData.filter(
    (s) => s.category === "water-treatment"
  );
  const industrialGasServices = servicesData.filter(
    (s) => s.category === "industrial-gas"
  );
  const medicalOxygenServices = servicesData.filter(
    (s) => s.category === "medical-oxygen"
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-6 sm:py-8 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-sky-300 text-xs sm:text-sm font-bold mb-2 shadow-inner">
              <Wrench className="w-3.5 h-3.5 text-sky-400" />
              <span>27+ Years Technical Service Tradition</span>
            </div>
          </ScrollReveal>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-2 font-display">
            <TextReveal text="Our Professional Services" />
          </h1>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              &ldquo;എല്ലാവിധ ഫിൽറ്ററുകളും സർവ്വീസ് &amp; റിപ്പയർ ചെയ്ത് നൽകുന്നു&rdquo; — We service, repair, and install all types of domestic, commercial, and industrial water systems, alongside lifesaving medical oxygen support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Free Water Consultation Highlight Box */}
      <section className="py-8 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
          <div className="space-y-1">
            <h3 className="text-lg font-black tracking-tight font-display flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
              <span>Don&apos;t Know Your Water Chemistry? Book a Free Water Test!</span>
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 font-normal">
              We test your TDS, pH, and Iron levels at your doorstep across Thrissur District before recommending any system.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact?type=watertest"
              className="px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-50 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Free Water Test
            </Link>
            <a
              href={`tel:${companyData.phones.secondaryMobile}`}
              className="px-5 py-3 rounded-xl bg-blue-800 text-white font-bold text-xs sm:text-sm hover:bg-blue-900 transition-colors"
            >
              Call: {companyData.phones.secondaryMobile}
            </a>
          </div>
        </div>
      </section>

      {/* 3. Water Purification Services */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="left" className="max-w-2xl mb-12 text-center md:text-left mx-auto md:mx-0">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
              Category 01
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Water Purification Services
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Comprehensive maintenance, filter cartridge replacement, membrane cleaning, and emergency repair for all domestic and commercial RO purifiers.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {waterPurificationServices.map((service, sIdx) => (
              <ScrollReveal key={service.id} direction="up" delay={sIdx * 0.1} className="h-full">
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Water Treatment Plant Services */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="right" className="max-w-2xl mb-12 text-center md:text-left mx-auto md:mx-0">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
              Category 02
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Water Treatment Plant Services
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Whole-house FRP plant installation, specialized iron removal, resin water softener media recharging, and industrial RO engineering.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {waterTreatmentServices.map((service, sIdx) => (
              <ScrollReveal key={service.id} direction="up" delay={sIdx * 0.1} className="h-full">
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Point Checklist Interactive Component */}
      <WaterChecklist />

      {/* 5. Industrial Gas & Medical Oxygen Services */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="left" className="max-w-2xl mb-12 text-center md:text-left mx-auto md:mx-0">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-1">
              Categories 03 &amp; 04
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Industrial Gas &amp; Medical Oxygen Services
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Cylinder refilling, certified gas distribution, regulator flowmeter setups, and 24/7 dedicated home healthcare assistance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {industrialGasServices.concat(medicalOxygenServices).map((service, sIdx) => (
              <ScrollReveal key={service.id} direction="up" delay={sIdx * 0.1} className="h-full">
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <CTASection
        title="Schedule a Service or Installation Visit"
        description="Our experienced technicians are ready to inspect your site, perform water testing, or deliver urgent oxygen cylinders."
      />
    </div>
  );
}
