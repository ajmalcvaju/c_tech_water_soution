import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Droplet, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { companyData } from "@/data/company";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Looking for the Right Solution?",
  description = "Get in touch with us to discuss your water purification, water treatment, and industrial requirements."
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>27+ Years of Trusted Service in Kerala • Since 1992</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto mb-5 leading-[1.12] font-display">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 transform hover:-translate-y-0.5 text-base"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact?type=quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-200 text-base"
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Request a Quote</span>
          </Link>

          <a
            href={companyData.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-600/30 transition-all duration-200 text-base"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Phone Numbers Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Landline:</span>
            <a href={`tel:${companyData.phones.landline}`} className="font-bold text-white hover:text-sky-300">
              {companyData.phones.landline}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Mobile:</span>
            <a href={`tel:${companyData.phones.primaryMobile}`} className="font-bold text-white hover:text-emerald-300">
              {companyData.phones.primaryMobile}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Droplet className="w-4 h-4 text-cyan-400" />
            <span>Free Doorstep Water Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
