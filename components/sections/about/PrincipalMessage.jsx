"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="relative section-lg overflow-hidden py-16 lg:py-28">
      {/* --- BACKGROUND SPLIT (60% Dark / 40% White) --- */}
      <div className="absolute inset-0 z-0">
        <div className="h-[75%] bg-brand-accent" /> {/* Dark Navy Top */}
        <div className="h-[25%] bg-white" /> {/* White Bottom */}
      </div>

      {/* --- "WELCOME" WATERMARK TEXT --- */}
      <div className="absolute top-0 lg:-top-10 left-0 right-0 overflow-hidden pointer-events-none z-0 flex justify-center">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-primary font-bold text-white text-[18vw] lg:text-[14vw] tracking-widest leading-none select-none"
        >
          Welcome
        </motion.span>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* === CONTENT COLUMN === */}
          <div className="text-white order-1 lg:order-2">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-8 lg:w-12 h-0.5 bg-brand-secondary" />
              <span className="text-lg font-bold tracking-[0.4em] text-brand-secondary uppercase">
                Get Started
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-primary mb-6 lg:mb-8 leading-tight"
            >
              Welcome from principal
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg leading-relaxed text-gray-200 lg:text-gray-300 font-light max-w-xl"
            >
              Our institution is committed to providing quality education in a
              safe, supportive, and inclusive environment. We focus on academic
              excellence, strong values, and the overall development of every
              student.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg leading-relaxed text-gray-200 lg:text-gray-300 font-light max-w-xl"
            >
              Along with strong academics, we focus on character building,
              creativity, and confidence. We believe that every student has
              unique talents, and it is our responsibility to help them discover
              and develop those strengths.
            </motion.p>

            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-10"
            >
              {/* <h4 className="text-lg font-bold tracking-[0.4em] text-white uppercase">
                Dr. Eleanor Vance.
              </h4> */}
              <span className="text-sm font-medium tracking-[0.4em] text-white uppercase ">
                Principal
              </span>
            </motion.div>
          </div>

          {/* === IMAGE CARD COLUMN === */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              // Removed h-full/w-full constraints so div wraps the image naturally
              className="relative z-10 w-full max-w-md lg:max-w-full md:mt-20"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* 1. Removed `fill`
                     2. Added `width` and `height` (Aspect Ratio will be preserved)
                     3. Added `h-auto w-full` to make it responsive
                  */}
                <Image
                  src="/assets/about-01.webp"
                  alt="Principal Dr. Eleanor Vance"
                  width={600}
                  height={800}
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
