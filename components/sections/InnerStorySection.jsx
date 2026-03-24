"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import EnquiryFormModal from "@/components/ui/EnquiryFormModal";

export default function InnerStorySection() {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  /* SUBTLE PARALLAX */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden"
      >
        {/* BACKGROUND IMAGE WRAPPER */}
        <motion.div
          style={{ y: bgY }}
          className="relative w-full min-h-[70vh]"
        >
          {/* DESKTOP IMAGE */}
          <Image
            src="/assets/high.webp"
            alt="Elite Global School Vision"
            fill
            loading="lazy"
            unoptimized
            sizes="100vw"
            className="hidden md:block object-cover"
          />

          {/* MOBILE IMAGE */}
          <Image
            src="/assets/high-mob.jpg"
            alt="Elite Global School Vision Mobile"
            fill
            loading="lazy"
            unoptimized
            sizes="100vw"
            className="block md:hidden object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 container-lg flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl text-left"
          >
            {/* TITLE */}
            <h2 className="text-brand-primary font-primary font-bold text-4xl sm:text-5xl leading-tight">
              Elite Global School
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-white/80 text-xl">
              A Place Where Every Learner Is Meant To
            </p>

            <span className="block mt-2 text-white uppercase font-bold tracking-widest text-lg">
              Be a Star
            </span>

            {/* CTA → OPEN FORM MODAL */}
            <div className="mt-7">
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-sm bg-brand-secondary text-brand-accent font-bold text-lg tracking-wide shadow-lg shadow-brand-secondary/30 hover:bg-brand-primary hover:text-white transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {/* Download icon */}
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="relative z-10">Download Prospectus</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROSPECTUS FORM MODAL */}
      <EnquiryFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        mode="prospectus"
      />
    </>
  );
}
