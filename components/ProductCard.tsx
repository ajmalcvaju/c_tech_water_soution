"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Product } from "@/data/products";
import { companyData } from "@/data/company";

interface ProductCardProps {
  product: Product;
  index?: number;
  onEnquire?: (product: Product) => void;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), {
    damping: 20,
    stiffness: 300,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), {
    damping: 20,
    stiffness: 300,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const whatsappUrl = `https://wa.me/91${companyData.phones.whatsappFormatted}?text=${encodeURIComponent(
    `Hello C-Tech Water Solution, I am interested in knowing more about ${product.name}. Please share complete specifications and availability.`
  )}`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="group relative flex flex-col h-full bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300 overflow-hidden"
      >
        {/* Subtle Interactive Glare Sheen */}
        {isHovered && !shouldReduceMotion && (
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 opacity-60 bg-gradient-to-tr from-white/0 via-sky-400/10 to-white/20"
          />
        )}

        {/* Top Image Container */}
        <Link
          href={`/products/${product.id}`}
          className="relative w-full h-60 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 overflow-hidden flex items-center justify-center p-5 cursor-pointer block"
        >
          {/* Floating Badge */}
          {product.badge && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-gradient-to-r from-blue-700 to-sky-600 text-white shadow-md flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-sky-200" />
              <span>{product.badge}</span>
            </motion.div>
          )}

          <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-108">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Card Content */}
        <div className="flex flex-col flex-1 p-6 z-20">
          {/* Category Pill */}
          <Link
            href={`/products?category=${product.category}`}
            className="text-[11px] font-bold text-sky-700 hover:text-blue-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
            {product.categoryLabel}
          </Link>

          {/* Product Name */}
          <Link href={`/products/${product.id}`} className="block group/title">
            <h3 className="text-base font-bold text-slate-900 group-hover/title:text-blue-600 transition-colors line-clamp-2 mb-2 font-display">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <Link href={`/products/${product.id}`} className="block">
            <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed font-normal hover:text-slate-900 transition-colors">
              {product.shortDescription}
            </p>
          </Link>

          {/* Key Features Bullet List */}
          <Link href={`/products/${product.id}`} className="block mb-5 flex-1">
            <div className="space-y-1.5 bg-slate-50/70 hover:bg-blue-50/40 p-3 rounded-2xl border border-slate-100/80 transition-colors">
              {product.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          </Link>

          {/* Action Buttons: 1 for WhatsApp, 2nd for Product Details */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 mt-auto">
            {/* Button 1: Redirect to WhatsApp */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200/80 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
              <span>WhatsApp</span>
            </motion.a>

            {/* Button 2: Redirect to Product Details */}
            <motion.div whileTap={{ scale: 0.96 }} className="w-full">
              <Link
                href={`/products/${product.id}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all group/btn"
              >
                <span>Product Details</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
