"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import Button from "../ui/Button";

/* ───────────────────────────────────
   CAMPUS DATA
─────────────────────────────────── */
const campuses = [
  {
    id: "villivakkam",
    name: "Villivakkam Campus",
    shortName: "Villivakkam",
    address: "No. 48 & 49, Kumaraswamy Nagar, Villivakkam, Chennai - 600049.",
    phone: "+91 - 94980 70404",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31087.665678936897!2d80.199034!3d13.101834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52651337384f67%3A0xe7a322331f3c198f!2sElite%20Global%20Nursery%20%26%20Primary%20CBSE%20School!5e0!3m2!1sen!2sin!4v1768222730521!5m2!1sen!2sin",
  },
  {
    id: "madhavaram",
    name: "Madhavaram Smart Campus",
    shortName: "Madhavaram",
    address:
      "Survey No.221, 225, 227, Kosappur Village, Madhavaram Taluk, Chennai - 600060.",
    phone: "+91 - 94980 70404",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.967!2d80.2350706!3d13.1910554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527b8ddf70c5b3%3A0x85221eb4c1550d51!2sElite%20Global%20School%20-%20Smart%20Campus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapLink: "https://maps.app.goo.gl/UVtqw5TCp9wVNF3J9",
  },
];

export default function ContactSection() {
  const [activeCampus, setActiveCampus] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch(
        "https://api.ayatiworks.com/api/v1/public/elite-global-school/contact_us/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key":
              "fa724d2d0e2b832193fb644c31dc0b2139858f9ecf211a4899377b92d15b2a6f",
          },
          body: JSON.stringify({ data }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const current = campuses[activeCampus];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-16 lg:py-24">
      {/* ── Background accent strip ── */}
      <div className="hidden lg:block absolute top-0 right-0 w-[38%] h-full bg-brand-accent z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_520px] gap-12 lg:gap-20 items-start">
          {/* ═══════════════════════════════════
              LEFT COLUMN — FORM & CONTACT INFO
          ═══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-4 font-serif">
                Get in <span className="text-brand-secondary">Touch</span>
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed">
                Discover how we nurture academic excellence and holistic student
                growth.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-12">
              <div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name *"
                  className={`w-full px-4 py-3 border ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-secondary transition-colors text-base`}
                />
              </div>
              <div>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-secondary transition-colors text-base`}
                />
              </div>
              <div>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  placeholder="Phone number *"
                  className={`w-full px-4 py-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  } rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-secondary transition-colors text-base`}
                />
              </div>
              <div>
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Your Message *"
                  rows={4}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  } rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-secondary transition-colors text-base resize-y`}
                />
              </div>
              <motion.div
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </motion.div>
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 mt-4 font-medium"
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 mt-4 font-medium"
                >
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>

            {/* Shared Contact Details */}
            <div className="space-y-5 text-gray-600 text-xl font-medium mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-5 h-5 text-brand-secondary">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <span className="group-hover:text-brand-primary transition-colors duration-300">
                  +91 - 94980 70404
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-5 h-5 text-brand-secondary">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <a
                  href="mailto:info@eliteglobalschools.com"
                  className="hover:text-brand-secondary transition-colors"
                >
                  info@eliteglobalschools.com
                </a>
              </div>
            </div>

            {/* ── Campus Address Cards ── */}
            <div className="flex flex-col gap-4">
              {campuses.map((campus, idx) => (
                <motion.button
                  key={campus.id}
                  onClick={() => setActiveCampus(idx)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative text-left p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                    activeCampus === idx
                      ? "border-brand-primary bg-brand-primary/5 shadow-lg shadow-brand-primary/10"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {/* Active indicator dot */}
                  {activeCampus === idx && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-brand-primary"
                    />
                  )}

                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        activeCampus === idx
                          ? "bg-brand-primary text-white"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                      }`}
                    >
                      <Building2 size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-base mb-1 transition-colors duration-300 ${
                          activeCampus === idx
                            ? "text-brand-primary"
                            : "text-gray-800"
                        }`}
                      >
                        {campus.name}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {campus.address}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════
              RIGHT COLUMN — MAP (switches per campus)
          ═══════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Campus label badge */}
            <motion.div
              key={current.id + "-badge"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <MapPin size={18} className="text-brand-primary" />
              <span className="text-sm font-bold text-brand-primary tracking-wide uppercase">
                {current.name}
              </span>
            </motion.div>

            {/* Map container */}
            <div className="relative w-full h-[400px] lg:h-[580px] shadow-2xl bg-gray-100 rounded-xl overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    title={`${current.name} Location`}
                    className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={current.mapSrc}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />

              {/* Address overlay on map */}
              <motion.div
                key={current.id + "-overlay"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 z-20"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
                  <h4 className="font-bold text-brand-primary text-base mb-1">
                    {current.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {current.address}
                  </p>
                  <a
                    href={current.mapLink || `https://www.google.com/maps/search/${encodeURIComponent(
                      current.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Map switcher pills (mobile-friendly alternative) */}
            <div className="flex items-center justify-center gap-3 mt-5">
              {campuses.map((campus, idx) => (
                <button
                  key={campus.id}
                  onClick={() => setActiveCampus(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    activeCampus === idx
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }`}
                >
                  {campus.shortName}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
