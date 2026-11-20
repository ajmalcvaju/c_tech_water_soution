"use client";

import { useState } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { companyData } from "@/data/company";

interface WhatsAppButtonProps {
  customMessage?: string;
}

export default function WhatsAppButton({ customMessage }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = customMessage || "Hello C-Tech Water Solution! I would like to enquire about your water purifiers / treatment plants / services.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/91${companyData.phones.whatsappFormatted}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini Popup Tooltip */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between border-b border-slate-100 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-bold text-xs uppercase tracking-wider text-slate-700">
                C-Tech Quick Support
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded"
              aria-label="Close message preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Chat directly with our technical team for free water test bookings, RO sales, or emergency medical oxygen!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Open WhatsApp (+91 {companyData.phones.whatsappFormatted})</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Chat with C-Tech on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </button>

        {/* Hover label for desktop */}
        <div className="hidden sm:block absolute right-16 top-2.5 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          WhatsApp: {companyData.phones.whatsappFormatted}
        </div>
      </div>
    </div>
  );
}
