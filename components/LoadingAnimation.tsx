"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, ShieldCheck } from "lucide-react";

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if session already loaded to avoid repetitive intrusion on soft refreshes
    const hasLoaded = sessionStorage.getItem("ctech_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("ctech_loaded", "true");
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.6, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-950 text-white select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] rounded-full bg-sky-500/10 blur-2xl pointer-events-none" />

          {/* Logo Container with Entrance Animation */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="relative h-14 w-60 sm:h-16 sm:w-72 bg-white/95 p-3 rounded-2xl shadow-lg">
              <Image
                src="/logo/logo.png"
                alt="C-Tech Water Solution Logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400"
            >
              <Droplet className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>Pure Water • Better Living</span>
              <span className="w-1 h-1 rounded-full bg-slate-500"></span>
              <span className="text-amber-400">Est. 1992</span>
            </motion.div>
          </motion.div>

          {/* Animated Liquid Progress Line */}
          <div className="mt-8 w-48 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
