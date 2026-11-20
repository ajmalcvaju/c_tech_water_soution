"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Droplets, ArrowRight, Activity, Sparkles, Check } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { companyData } from "@/data/company";

export default function WaterChecklist() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const getWhatsAppChecklistUrl = () => {
    const issues = selectedItems
      .map((id) => {
        const item = companyData.waterChecklist.find((c) => c.id === id);
        return item ? `• ${item.title}` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = `Hello C-Tech Water Solution, I took your water health assessment on the website and identified the following water issues at my property:\n${issues}\n\nPlease help me arrange a Free Water Quality Test & Consultation.`;
    return `https://wa.me/91${companyData.phones.whatsappFormatted}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="relative py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200 overflow-hidden">
      {/* Decorative Water Wave Background Ambient Silhouette */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Droplets className="w-4 h-4 text-blue-600 animate-bounce" />
            <span>നമ്മുടെ കുടിവെള്ളം നമ്മുടെ ആരോഗ്യം</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            10-Point Water Quality &amp; Health Checklist
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From the consumer advisory notice of C-Tech Water Solution: Select any symptoms you observe in your well, borewell, or tap water below to diagnose your water health.
          </p>
        </motion.div>

        {/* Checklist Grid with Staggered Spring Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12">
          {companyData.waterChecklist.map((item, idx) => {
            const isSelected = selectedItems.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 5) * 0.08, duration: 0.45 }}
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleItem(item.id)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex items-start gap-4 ${
                  isSelected
                    ? "bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/25"
                    : "bg-white/80 backdrop-blur-sm border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isSelected ? (
                    <motion.div
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-blue-600 fill-blue-100" />
                    </motion.div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs font-black text-slate-400">
                      {item.id}
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center justify-between font-display">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-blue-800 font-medium italic">
                    {item.malayalam}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                      C-Tech Solution: {item.action}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Diagnostic Health Console with Motion Status */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle moving light sweep */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
          />

          <div className="space-y-3 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>
                {selectedItems.length > 0
                  ? `${selectedItems.length} Water Quality Issue${selectedItems.length > 1 ? "s" : ""} Flagged`
                  : "Diagnostic Status: Ready for Water Test"}
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black font-display leading-tight">
              {selectedItems.length > 0
                ? "Protect your family's health with our doorstep water analysis!"
                : "Select symptoms above or request a comprehensive free water test."}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              &quot;നിങ്ങളുടെ വെള്ളം ടെസ്റ്റ് ചെയ്യൂ... ഫ്രീ കൺസൾട്ടേഷൻ&quot; — We provide scientific on-site testing for TDS, Iron, pH, and hardness before recommending any equipment.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3.5 shrink-0 relative z-10">
            {selectedItems.length > 0 ? (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={getWhatsAppChecklistUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-bold text-sm text-white shadow-xl shadow-emerald-500/25 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Send My Issues on WhatsApp</span>
              </motion.a>
            ) : (
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/contact?type=watertest"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 font-bold text-sm text-white shadow-xl shadow-blue-600/30 transition-all"
                >
                  <span>Book Free Water Test</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${companyData.phones.secondaryMobile}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm transition-all"
            >
              <span>Call: {companyData.phones.secondaryMobile}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
