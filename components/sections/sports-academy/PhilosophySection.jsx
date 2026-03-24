"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="section bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-xl px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN: Image & Decorations */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageReveal}
          >
            {/* FIX: Removed h-150. 
                Using aspect-auto or a defined aspect ratio (like aspect-[4/3]) 
                ensures the container scales with the actual image.
            */}
            <div className="relative z-10 w-full aspect-auto min-h-[300px] md:min-h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/assets/philosophy.webp"
                alt="Kids holistic training"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>

            {/* Subtle decorative glow to fill space if img is transparent */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-12 h-0.5 bg-brand-secondary"></span>
              <span className="text-sm tracking-[0.4em] text-brand-secondary font-bold uppercase">
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6 leading-tight"
            >
              More Than Just a Game
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed"
            >
              We believe in holistic development. Our student-athletes receive
              rigorous training in their chosen sport while maintaining high
              academic standards, preparing them for university scholarships and
              professional careers.
            </motion.p>

            <ul className="space-y-5">
              {[
                "Personalized athletic development plans",
                "NCAA eligibility center compliance",
                "Sports psychology & nutrition support",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-brand-secondary text-xl leading-none mt-0.5">
                    •
                  </span>
                  <span className="font-extrabold text-gray-800 uppercase tracking-[0.4em] text-xs md:text-sm">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
