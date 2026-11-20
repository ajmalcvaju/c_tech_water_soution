"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ServiceItem } from "@/data/services";
import { companyData } from "@/data/company";

interface ServiceCardProps {
  service: ServiceItem;
}

const categoryAccentMap: Record<
  ServiceItem["category"],
  {
    dot: string;
    subtitleBg: string;
    subtitleBorder: string;
    subtitleText: string;
    checkBg: string;
    checkText: string;
  }
> = {
  "water-purification": {
    dot: "bg-blue-600",
    subtitleBg: "bg-blue-50/80",
    subtitleBorder: "border-blue-600",
    subtitleText: "text-blue-800",
    checkBg: "bg-emerald-100",
    checkText: "text-emerald-700",
  },
  "water-treatment": {
    dot: "bg-sky-600",
    subtitleBg: "bg-sky-50/80",
    subtitleBorder: "border-sky-600",
    subtitleText: "text-sky-800",
    checkBg: "bg-emerald-100",
    checkText: "text-emerald-700",
  },
  "industrial-gas": {
    dot: "bg-amber-500",
    subtitleBg: "bg-amber-50/80",
    subtitleBorder: "border-amber-500",
    subtitleText: "text-amber-900",
    checkBg: "bg-amber-100",
    checkText: "text-amber-700",
  },
  "medical-oxygen": {
    dot: "bg-emerald-600",
    subtitleBg: "bg-emerald-50/80",
    subtitleBorder: "border-emerald-600",
    subtitleText: "text-emerald-800",
    checkBg: "bg-emerald-100",
    checkText: "text-emerald-700",
  },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = `https://wa.me/91${companyData.phones.whatsappFormatted}?text=${encodeURIComponent(
    `Hello C-Tech Water Solution, I would like to book the service: ${service.title}.`
  )}`;

  const accent = categoryAccentMap[service.category] || categoryAccentMap["water-purification"];

  return (
    <article className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Top Image Showcase — Full Brightness, Crisp, Unobstructed */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Light top edge vignette only to guarantee badge legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950/30 to-transparent" />

        {/* Crisp High-Visibility Floating Category Tag */}
        <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-extrabold uppercase tracking-wider shadow-md border border-white/70">
          <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
          <span>{service.categoryTitle}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Service Title */}
        <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2.5 font-display">
          {service.title}
        </h3>

        {/* Highlighted Subtitle Accent Bar */}
        <div
          className={`text-xs font-semibold ${accent.subtitleText} ${accent.subtitleBg} border-l-2 ${accent.subtitleBorder} px-3 py-1.5 rounded-r-lg mb-3.5 leading-snug`}
        >
          {service.subtitle}
        </div>

        {/* Service Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Key Advantages Box */}
        <div className="space-y-2.5 mb-6 flex-1 bg-gradient-to-br from-slate-50 to-blue-50/30 p-4 rounded-2xl border border-slate-200/70">
          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Key Advantages</span>
          </h4>
          {service.benefits.slice(0, 3).map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
              <span
                className={`w-4 h-4 rounded-full ${accent.checkBg} ${accent.checkText} flex items-center justify-center shrink-0 mt-0.5`}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Dual Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5 mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200/80 transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="group/btn flex-1 min-w-0 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white text-xs font-bold shadow-sm hover:shadow-md transition-all text-center whitespace-nowrap"
          >
            <span className="truncate">{service.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
