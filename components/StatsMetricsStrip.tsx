"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Droplets, Factory, Users, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  tag: string;
  icon: any;
  colorScheme: {
    iconBg: string;
    iconBorder: string;
    iconColor: string;
    numberGradient: string;
    glowBg: string;
    accentLine: string;
  };
}

const statsData: StatItem[] = [
  {
    id: "trust",
    targetNumber: 32,
    suffix: "+",
    label: "Years of Trust",
    sublabel: "Established in 1992, serving Kerala households and industries with unwavering integrity.",
    tag: "Since 1992",
    icon: Award,
    colorScheme: {
      iconBg: "bg-amber-500/10",
      iconBorder: "border-amber-500/30",
      iconColor: "text-amber-400",
      numberGradient: "from-amber-300 via-amber-400 to-yellow-500",
      glowBg: "from-amber-500/20 to-transparent",
      accentLine: "from-amber-400 to-yellow-500",
    },
  },
  {
    id: "domestic",
    targetNumber: 3500,
    suffix: "+",
    label: "Domestic Customers",
    sublabel: "Trusted by families across Kerala for pure, mineral-balanced domestic RO and UV purifiers.",
    tag: "Homes & Villas",
    icon: Droplets,
    colorScheme: {
      iconBg: "bg-blue-500/10",
      iconBorder: "border-blue-500/30",
      iconColor: "text-blue-400",
      numberGradient: "from-blue-300 via-blue-400 to-sky-400",
      glowBg: "from-blue-500/20 to-transparent",
      accentLine: "from-blue-500 to-sky-400",
    },
  },
  {
    id: "commercial",
    targetNumber: 1500,
    suffix: "+",
    label: "Commercial Customers",
    sublabel: "Hospitals, restaurants, schools, and workshops powered by custom FRP plants & gas supplies.",
    tag: "Commercial & Industrial",
    icon: Factory,
    colorScheme: {
      iconBg: "bg-sky-500/10",
      iconBorder: "border-sky-500/30",
      iconColor: "text-sky-400",
      numberGradient: "from-sky-300 via-cyan-400 to-teal-400",
      glowBg: "from-sky-500/20 to-transparent",
      accentLine: "from-sky-400 to-teal-400",
    },
  },
  {
    id: "satisfied",
    targetNumber: 5000,
    suffix: "+",
    label: "Satisfied Customers",
    sublabel: "Over five thousand active households and businesses relying on our sales & prompt service.",
    tag: "Total Community",
    icon: Users,
    colorScheme: {
      iconBg: "bg-emerald-500/10",
      iconBorder: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      numberGradient: "from-emerald-300 via-teal-400 to-green-400",
      glowBg: "from-emerald-500/20 to-transparent",
      accentLine: "from-emerald-400 to-teal-400",
    },
  },
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1800; // 1.8 seconds
    const stepTime = 20; // 50 updates/sec
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  // Format large numbers with commas, e.g. 10,000
  const formattedCount = target >= 1000 ? count.toLocaleString() : count;

  return (
    <span className="font-display font-black tracking-tight">
      {formattedCount}
      <span className="font-sans text-sky-400 text-3xl sm:text-4xl ml-0.5">{suffix}</span>
    </span>
  );
}

interface StatsMetricsStripProps {
  ctaHref?: string;
  ctaLabel?: string;
  showCta?: boolean;
}

export default function StatsMetricsStrip({
  ctaHref = "/about",
  ctaLabel = "Read our complete story",
  showCta = true,
}: StatsMetricsStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section 
      ref={containerRef}
      className="relative z-20 py-12 sm:py-16 bg-slate-950 border-t border-slate-900 border-b border-slate-800/80 overflow-hidden"
      aria-label="C-Tech Milestone Numbers & Trust Metrics"
    >
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Mini Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-end justify-between text-center sm:text-left gap-4 mb-8 sm:mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-sky-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Proven Track Record in Kerala</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-display tracking-tight">
              Milestones Built on <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Three Decades of Excellence</span>
            </h2>
          </div>

          {showCta && (
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </motion.div>

        {/* 4 Responsive Animated Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {statsData.map((item, idx) => {
            const Icon = item.icon;
            const cs = item.colorScheme;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.12,
                  ease: "easeOut"
                }}
                className="group relative h-full"
              >
                {/* 3D Glassmorphic Card Container */}
                <div className="relative h-full rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-xl shadow-black/40 hover:border-white/25 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-400 flex flex-col justify-between overflow-hidden group-hover:-translate-y-1.5">
                  
                  {/* Ambient Glow in Card Corner */}
                  <div className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${cs.glowBg} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                  {/* Top Bar: Icon Pill + Tag */}
                  <div className="text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2.5 sm:gap-2 mb-5">
                      <div className={`p-3 rounded-xl ${cs.iconBg} border ${cs.iconBorder} ${cs.iconColor} shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                        {item.tag}
                      </span>
                    </div>

                    {/* Prominent Metric Display */}
                    <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${cs.numberGradient} bg-clip-text text-transparent mb-2.5 leading-none`}>
                      <AnimatedCounter 
                        target={item.targetNumber} 
                        suffix={item.suffix} 
                        isVisible={isInView} 
                      />
                    </div>

                    {/* Stat Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug mb-2 font-display">
                      {item.label}
                    </h3>

                    {/* Stat Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {item.sublabel}
                    </p>
                  </div>

                  {/* Bottom Animated Accent Line */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${cs.accentLine} rounded-full transition-all duration-500 w-1/4 mx-auto sm:mx-0 group-hover:w-full`} />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
