"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ──────────────────────────────────────────
   API CONFIG (same endpoint as ContactSection)
────────────────────────────────────────── */
const API_URL =
  "https://api.ayatiworks.com/api/v1/public/elite-global-school/contact_us/records";
const API_KEY =
  "fa724d2d0e2b832193fb644c31dc0b2139858f9ecf211a4899377b92d15b2a6f";

/* ──────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
  exit: { opacity: 0, scale: 0.92, y: 30, transition: { duration: 0.22 } },
};

/* ──────────────────────────────────────────
   MODE: "prospectus" | "contact"
   - prospectus → downloads PDF after submit
   - contact   → just sends the message
────────────────────────────────────────── */
export default function EnquiryFormModal({
  isOpen,
  onClose,
  mode = "contact", // "prospectus" | "contact"
}) {
  const isProspectus = mode === "prospectus";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /* ── VALIDATION ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit number";
    if (!isProspectus && !form.message.trim())
      e.message = "Message is required";
    return e;
  };

  /* ── SUBMIT ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: isProspectus ? "Prospectus" : form.message,
        source: isProspectus ? "prospectus" : "contact_modal",
      };

      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify({ data: payload }),
      });

      /* If prospectus → trigger download */
      if (isProspectus) {
        const link = document.createElement("a");
        link.href = "/files/Prospectus.pdf";
        link.download = "Elite-Global-School-Prospectus.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", message: "" });
        onClose();
      }, 3000);
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  /* ── INPUT STYLE ── */
  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-sm font-secondary text-sm text-gray-700 placeholder-gray-400 outline-none transition-colors duration-200 focus:border-brand-secondary ${
      errors[field]
        ? "border-red-500 bg-red-50/50"
        : "border-gray-200 bg-white hover:border-gray-300"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-brand-accent/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md overflow-hidden shadow-2xl"
          >
            {/* TOP BAR — brand gradient */}
            <div className="h-1.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />

            <div className="bg-white px-6 pt-6 pb-8 sm:px-8">
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-sm bg-gray-100 hover:bg-brand-primary hover:text-white text-gray-500 transition-colors duration-200 cursor-pointer"
                aria-label="Close"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {!submitted ? (
                <>
                  {/* HEADER */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-brand-accent font-primary leading-tight">
                      {isProspectus ? (
                        <>
                          Download{" "}
                          <span className="text-brand-primary">Prospectus</span>
                        </>
                      ) : (
                        <>
                          Admissions Open{" "}
                          <span className="text-brand-secondary">
                            2026-2027
                          </span>
                        </>
                      )}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-500">
                      {isProspectus
                        ? "Fill in your details to get our school prospectus"
                        : "We'd love to hear from you. Send us a message!"}
                    </p>
                  </div>

                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* NAME */}
                    <div>
                      <input
                        type="text"
                        placeholder="Name *"
                        value={form.name}
                        onChange={handleChange("name")}
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email *"
                        value={form.email}
                        onChange={handleChange("email")}
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone number *"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className={inputClass("phone")}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* MESSAGE (only shown for contact mode) */}
                    {!isProspectus && (
                      <div>
                        <textarea
                          placeholder="Your Message *"
                          value={form.message}
                          onChange={handleChange("message")}
                          rows={3}
                          className={`${inputClass("message")} resize-y`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    )}

                    {/* SUBMIT */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.97 }}
                      className={`w-full py-3 rounded-sm font-secondary text-sm font-semibold tracking-wide text-white transition-all duration-300 cursor-pointer ${
                        submitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-brand-accent hover:bg-brand-primary shadow-lg shadow-brand-accent/20 hover:shadow-brand-primary/30"
                      }`}
                    >
                      {submitting
                        ? "Sending..."
                        : isProspectus
                          ? "Download Prospectus"
                          : "Send Message"}
                    </motion.button>
                  </form>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    We respect your privacy. No spam, ever.
                  </p>
                </>
              ) : (
                /* ── SUCCESS STATE ── */
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-accent font-primary">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {isProspectus
                      ? "Your download has started. We'll be in touch soon!"
                      : "Your message has been sent successfully!"}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
