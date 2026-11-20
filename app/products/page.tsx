"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Droplet, 
  Layers, 
  Search, 
  Sparkles
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { productsData, productCategories, Product } from "@/data/products";
import { companyData } from "@/data/company";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header Banner */}
      <section className="relative py-6 sm:py-8 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/30 text-sky-300 text-xs sm:text-sm font-bold mb-2 shadow-inner"
          >
            <Droplet className="w-3.5 h-3.5 text-sky-400" />
            <span>Complete Water &amp; Industrial Catalogue</span>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-2 font-display">
            <TextReveal text="Our Products & Solutions" />
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            From certified domestic RO purifiers and whole-house FRP treatment plants to industrial gases and 24/7 medical oxygen cylinders.
          </motion.p>
        </div>
      </section>

      {/* Main Filter & Search Section */}
      <section className="sticky top-[69px] z-30 py-5 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Box with Focus Glow */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search purifiers, plants, gases, spares..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm placeholder:text-slate-400 bg-slate-50/80 focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Quick Contact Badge */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-600">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>Direct factory support &amp; free water consultation available</span>
            </div>
          </div>

          {/* Animated Category Filter Pills with layoutId */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none relative">
            {productCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors duration-200 z-10 ${
                    isSelected ? "text-white" : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-600 rounded-xl shadow-md shadow-blue-600/30 -z-10"
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid with Smooth Animated Transitions */}
      <section className="py-14 sm:py-20 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Showing {filteredProducts.length} Product{filteredProducts.length !== 1 ? "s" : ""}
            </span>

            <a
              href={`https://wa.me/91${companyData.phones.whatsappFormatted}?text=${encodeURIComponent(
                "Hello C-Tech Water Solution, I am browsing your products and would like immediate assistance."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
              <span>Need help deciding? Chat on WhatsApp</span>
            </a>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product, pIdx) => (
                  <ProductCard key={product.id} product={product} index={pIdx} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8"
              >
                <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1 font-display">
                  No products found matching your filter
                </h3>
                <p className="text-sm text-slate-500 mb-4 font-normal">
                  Try searching for something else or clear the active category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Need a Customized Water or Industrial Setup?"
        description="Every water source in Kerala has unique hardness and iron profiles. We custom-engineer FRP plants and RO skids tailored to your water test results."
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center">Loading catalogue...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
