"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Loader2,
  ExternalLink
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import { companyData } from "@/data/company";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefillInterest = searchParams.get("interest") || searchParams.get("service") || "";
  const isQuote = searchParams.get("type") === "quote";
  const isWaterTest = searchParams.get("type") === "watertest";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestedIn: isWaterTest
      ? "Services"
      : prefillInterest.includes("Purifier")
      ? "Water Purifier"
      : prefillInterest.includes("Plant") || prefillInterest.includes("FRP")
      ? "Water Treatment Plant"
      : prefillInterest.includes("Oxygen")
      ? "Medical Oxygen"
      : prefillInterest.includes("Gas")
      ? "Industrial Gases"
      : "Water Purifier",
    message: isWaterTest
      ? "I would like to book a Free Water Quality Test (TDS, pH, Iron) at my address."
      : isQuote
      ? "Please provide a quotation for a customized water filtration system."
      : prefillInterest
      ? `I am enquiring about: ${prefillInterest}. Please share details.`
      : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a brief message or requirements.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getWhatsAppDirectUrl = () => {
    const lines = [
      `*New Website Enquiry - C-Tech Water Solution*`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Interested In:* ${formData.interestedIn}`,
      `*Message / Requirements:* ${formData.message}`,
      ``,
      `_Sent via C-Tech Water Solution Portal_`
    ].filter(Boolean);

    return `https://wa.me/91${companyData.phones.whatsappFormatted}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const waUrl = getWhatsAppDirectUrl();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = waUrl;
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="relative py-6 sm:py-8 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-sky-300 text-xs sm:text-sm font-bold mb-2 shadow-inner"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>Direct Customer &amp; Emergency Support</span>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-2 font-display">
            <TextReveal text="Contact C-Tech Water Solution" />
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Get in touch for free water testing, water purifier sales, whole-house filtration plants, industrial gases, and urgent medical oxygen deliveries.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Information Column (5 cols) */}
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6 text-center lg:text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
                    Official Contacts
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                    We Are Here to Assist You
                  </h2>
                </div>

                {/* Key Personnel */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-blue-900 tracking-wider font-display">
                    Technical Leadership:
                  </h4>
                  <div className="text-xs text-slate-700 space-y-1">
                    <p>
                      <strong className="text-slate-900">{companyData.contacts.sankaranarayanan.name}:</strong>{" "}
                      Ph: {companyData.contacts.sankaranarayanan.phone} | Mob: {companyData.contacts.sankaranarayanan.mobile}
                    </p>
                    <p>
                      <strong className="text-slate-900">{companyData.contacts.manesh.name}:</strong>{" "}
                      WhatsApp / GPay: {companyData.contacts.manesh.whatsapp}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-4 text-sm">
                  <div className="flex flex-col items-center lg:flex-row lg:items-start gap-2.5 lg:gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-display">Direct Calling Numbers</h4>
                      <div className="space-y-0.5 text-xs sm:text-sm text-slate-600">
                        <a href={`tel:${companyData.phones.landline}`} className="block hover:text-blue-600 font-semibold transition-colors">
                          Landline: {companyData.phones.landline}
                        </a>
                        <a href={`tel:${companyData.phones.primaryMobile}`} className="block hover:text-blue-600 font-semibold transition-colors">
                          Mobile: {companyData.phones.primaryMobile}
                        </a>
                        <a href={`tel:${companyData.phones.secondaryMobile}`} className="block hover:text-blue-600 font-semibold transition-colors">
                          Mobile / WhatsApp: {companyData.phones.secondaryMobile}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex flex-col items-center lg:flex-row lg:items-start gap-2.5 lg:gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-display">Email Addresses</h4>
                      <div className="space-y-0.5 text-xs text-slate-600">
                        <a href={`mailto:${companyData.emails.primary}`} className="block hover:text-blue-600 font-medium transition-colors">
                          {companyData.emails.primary}
                        </a>
                        <a href={`mailto:${companyData.emails.secondary}`} className="block hover:text-blue-600 font-medium transition-colors">
                          {companyData.emails.secondary}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Direct */}
                  <div className="flex flex-col items-center lg:flex-row lg:items-start gap-2.5 lg:gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                      <WhatsAppIcon className="w-5 h-5 fill-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-display">WhatsApp Enquiry</h4>
                      <p className="text-xs text-slate-600 mb-1">
                        Instant responses for water diagnosis or urgent medical oxygen.
                      </p>
                      <a
                        href={companyData.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <span>Chat on WhatsApp (+91 {companyData.phones.whatsappFormatted})</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Addresses */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex flex-col items-center lg:flex-row lg:items-start gap-2.5 lg:gap-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-xs">
                      <h4 className="font-bold text-slate-900 font-display">Main Office (Chambamkulath Traders)</h4>
                      <p className="text-slate-600">
                        Kaipamangalam - 680 681, Thrissur Dist., Kerala, India.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center lg:flex-row lg:items-start gap-2.5 lg:gap-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-xs">
                      <h4 className="font-bold text-slate-900 font-display">Service Hub &amp; Agencies</h4>
                      <p className="text-slate-600">
                        Panambikunnu, Vadanappilly, Panangad - 680 665, Thrissur Dist., Kerala.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authentic Visiting Card Card */}
              <div className="rounded-3xl bg-slate-900 p-6 text-white space-y-4 hover:shadow-2xl transition-shadow">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block font-display">
                  Original Reference Card
                </span>
                <div className="relative rounded-2xl overflow-hidden border border-white/20 aspect-16/10">
                  <Image
                    src="/images/visiting-card.jpg"
                    alt="C-Tech Water Solution Visiting Card"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-slate-300">
                  Chambamkulath Traders (Since 1992) &bull; Dealers in Co2, O2, Medical Oxygen, Water Purifiers, Soda Machines, and Nilkamal Bottle Crates.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Contact Enquiry Form (7 cols) */}
            <ScrollReveal direction="left" delay={0.15} className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
                    Send an Enquiry
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                    Request a Quote or Service Visit
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    Fill out the form below and our technical experts will reach out to you within a few hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-3xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 text-center space-y-4"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md"
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </motion.div>
                      <h3 className="text-xl font-black text-emerald-950 font-display">
                        Thank You, {formData.fullName}!
                      </h3>
                      <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                        Your enquiry regarding <strong>{formData.interestedIn}</strong> has been submitted. Redirecting to WhatsApp...
                      </p>
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={getWhatsAppDirectUrl()}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                        >
                          <WhatsAppIcon className="w-4 h-4 fill-white" />
                          <span>Click here if WhatsApp didn&apos;t open automatically</span>
                        </motion.a>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              fullName: "",
                              phone: "",
                              email: "",
                              interestedIn: "Water Purifier",
                              message: "",
                            });
                          }}
                          className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-bold"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-display">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Kumar"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.fullName
                              ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                              : "border-slate-200 focus:ring-blue-600 focus:border-blue-600 bg-slate-50/50 focus:bg-white"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-display">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="e.g. 9846644232"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                              errors.phone
                                ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                                : "border-slate-200 focus:ring-blue-600 focus:border-blue-600 bg-slate-50/50 focus:bg-white"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-display">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. name@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                              errors.email
                                ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                                : "border-slate-200 focus:ring-blue-600 focus:border-blue-600 bg-slate-50/50 focus:bg-white"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Interested In Dropdown */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-display">
                          Interested In <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.interestedIn}
                          onChange={(e) =>
                            setFormData({ ...formData, interestedIn: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="Water Purifier">Water Purifier (Domestic / Commercial RO)</option>
                          <option value="Water Treatment Plant">Water Treatment Plant (Whole-House FRP, Softener, Iron Removal)</option>
                          <option value="Industrial Gases">Industrial Gases (CO2, O2, Argon, Nitrogen)</option>
                          <option value="Medical Oxygen">Medical Oxygen (Cylinders, Refilling, Flowmeter)</option>
                          <option value="Services">Services (Water Testing, Installation, Filter Service)</option>
                          <option value="Other">Other (Soda Machines, Crates, Machinery)</option>
                        </select>
                      </div>

                      {/* Message Box */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-display">
                          Your Message / Requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Please specify your water source (well, borewell, tap), issue faced, or cylinder requirement..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.message
                              ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                              : "border-slate-200 focus:ring-blue-600 focus:border-blue-600 bg-slate-50/50 focus:bg-white"
                          }`}
                        ></textarea>
                        {errors.message && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Submit Button with Motion & Spinner */}
                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Redirecting to WhatsApp...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Enquiry</span>
                            </>
                          )}
                        </motion.button>
                      </div>

                      <div className="text-center pt-2">
                        <span className="text-xs text-slate-400">or</span>
                        <div className="pt-2">
                          <motion.a
                            whileHover={{ scale: 1.03 }}
                            href={getWhatsAppDirectUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                          >
                            <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
                            <span>Chat directly with our Technical Lead on WhatsApp</span>
                          </motion.a>
                        </div>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end text-center sm:text-left justify-between gap-4 mb-8">
            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Visit Our Location</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                Find Chambamkulath Agencies on Google Maps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                C-Tech Water Solution &amp; Chambamkulath Agencies — Kaipamangalam / Panambikunnu, Thrissur, Kerala
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <a
                href="https://www.google.com/maps/search/?api=1&query=10.3303404,76.1392929"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 text-xs sm:text-sm font-bold transition-colors shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Shop Storefront Photo Card */}
            <ScrollReveal direction="right" className="lg:col-span-5 h-full">
              <div className="group relative h-full min-h-[360px] sm:min-h-[450px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-50 p-2 sm:p-3 flex flex-col">
                <div className="relative w-full flex-1 min-h-[340px] sm:min-h-[426px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/shop-storefront.jpg"
                    alt="C-Tech Water Solution & Chambamkulath Traders Storefront — Kaipamangalam, Panambikunnu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <div className="px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/70">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 block leading-tight">
                        Our Storefront
                      </span>
                      <span className="text-xs font-bold text-slate-900 block leading-tight mt-0.5">
                        C-Tech Water Solution &amp; Chambamkulath Traders
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Maps Interactive Embed Card */}
            <ScrollReveal direction="left" delay={0.1} className="lg:col-span-7 h-full">
              <div className="h-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-50 p-2 sm:p-3 flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1442316405683!2d76.13929287503578!3d10.330340389792397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f561b90a4ef9%3A0xa0fedaad894657d7!2sChambamkulath%20Agencies!5e0!3m2!1sen!2sin!4v1795150709092!5m2!1sen!2sin"
                  title="Chambamkulath Agencies & C-Tech Water Solution Google Map Location"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full flex-1 min-h-[360px] sm:min-h-[426px] rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Verified Locations & Service Areas Strip with Stagger */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Coverage &amp; Service Locations
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
              Serving residential homes, hospitals, schools, and industrial facilities across Thrissur District and neighboring Kerala regions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { name: "Kaipamangalam", label: "Head Office Hub" },
              { name: "Panambikunnu", label: "Agencies & Gas Hub" },
              { name: "Vadanappilly", label: "Water Treatment Center" },
              { name: "Panangad & Thrissur", label: "Service Network" }
            ].map((loc, lIdx) => (
              <ScrollReveal key={lIdx} direction="up" delay={lIdx * 0.08}>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <span className="font-bold text-slate-800 text-sm block font-display">{loc.name}</span>
                  <span className="text-xs text-slate-500 font-normal">{loc.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center">Loading contact page...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
