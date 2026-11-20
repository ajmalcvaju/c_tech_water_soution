import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  Award, 
  Truck, 
  Wrench,
  Layers,
  SlidersHorizontal,
  Droplet
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { productsData, Product } from "@/data/products";
import { companyData } from "@/data/company";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return productsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found | C-Tech Water Solution" };

  return {
    title: `${product.name} | C-Tech Water Solution`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);
  if (!product) notFound();

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappUrl = `https://wa.me/91${companyData.phones.whatsappFormatted}?text=${encodeURIComponent(
    `Hello C-Tech Water Solution, I am interested in knowing more about ${product.name}. Please share complete specifications and availability.`
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-blue-600 transition-colors">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-slate-900 line-clamp-1 font-bold">{product.name}</span>
        </div>
      </nav>

      {/* Main Product Showcase Section */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Products</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Product Photography & Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 sm:aspect-square bg-gradient-to-b from-slate-50 via-slate-100/60 to-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden flex items-center justify-center p-6 group">
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.22),transparent_70%)] pointer-events-none" />

                {/* Floating Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#081b36] text-sky-300 text-[11px] font-black tracking-wider uppercase flex items-center gap-2 border border-sky-500/60 shadow-lg backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{product.badge}</span>
                  </div>
                )}

                {/* Main Product Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Service Trust Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs text-center flex flex-col items-center">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mb-1.5" />
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">Certified Quality</span>
                  <span className="text-[10px] text-slate-500 leading-tight">100% Genuine Media</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs text-center flex flex-col items-center">
                  <Truck className="w-5 h-5 text-emerald-600 mb-1.5" />
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">Kerala Delivery</span>
                  <span className="text-[10px] text-slate-500 leading-tight">Prompt Doorstep Reach</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs text-center flex flex-col items-center">
                  <Wrench className="w-5 h-5 text-sky-600 mb-1.5" />
                  <span className="text-[11px] font-bold text-slate-900 block leading-tight">Expert Support</span>
                  <span className="text-[10px] text-slate-500 leading-tight">Installation &amp; AMC</span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Product Info & Actions */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div>
                {/* Category Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  <span>{product.categoryLabel}</span>
                </div>

                {/* Product Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-display mb-3">
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons Box */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Button 1: Direct WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  {/* Button 2: Book Site Visit / Quotation */}
                  <Link
                    href={`/contact?interest=${encodeURIComponent(product.name)}`}
                    className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Direct phone support: <strong className="text-slate-700">{companyData.phones.primaryMobile} / {companyData.phones.secondaryMobile}</strong></span>
                </div>
              </div>

              {/* Technical Specifications Table */}
              {product.specs && product.specs.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                    <span>Technical Specifications</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100/80">
                        <span className="text-[11px] font-semibold text-slate-500 block">{spec.label}</span>
                        <span className="text-xs font-bold text-slate-900 block mt-0.5">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features Bullet List */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Features &amp; Performance Highlights</span>
                </div>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
                    Related Solutions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    More in {product.categoryLabel}
                  </h2>
                </div>
                <Link
                  href={`/products?category=${product.category}`}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>View All in Category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((relProduct, idx) => (
                  <ProductCard key={relProduct.id} product={relProduct} index={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
