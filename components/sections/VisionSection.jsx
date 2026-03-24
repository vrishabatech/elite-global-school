"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONTENT = {
  vision: {
    title: "Our Vision",
    text: `Our vision is to build a sturdy and highly educated citizen who are articulate, thoughtful, trusts to express and debate ideas and actively contributes to their own and others growth and also to uphold a learning community that produces leaders through faith, knowledge and inspiration.`,
    image: "/assets/our-vision-1.webp",
  },
  mission: {
    title: "Our Mission",
    text: `Elite Global is dedicated to build an enriched learning environment using modern-day teaching pedagogy to cultivate an innovative and rigorous academic program streamed with CBSE Curriculum.`,
    image: "/assets/our-mission-1.webp",
  },
};

export default function VisionSection() {
  const [mode, setMode] = useState("vision");

  /* AUTO-TRANSITION LOGIC */
  useEffect(() => {
    const timer = setInterval(() => {
      setMode((prev) => (prev === "vision" ? "mission" : "vision"));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const data = CONTENT[mode];

  return (
    <section className="section-lg bg-white overflow-hidden">
      <div className="container-lg relative">
        {/* IMAGE BLOCK */}
        <div className="relative w-full lg:ml-auto lg:w-[70%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={data.image}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={360}
                unoptimized
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="w-full h-auto object-cover rounded-sm"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* GLASS CONTENT CARD */}
        <div className="relative mt-8 bg-white border border-gray-200 shadow-lg rounded-xl p-6 lg:absolute lg:top-1/2 lg:right-[55%] lg:-translate-y-1/2 lg:mt-0 lg:max-w-xl lg:bg-white/5 lg:backdrop-blur-lg lg:border-white/40 lg:shadow-xl lg:p-10 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <span className="block w-12 h-0.5 bg-brand-secondary mb-4" />

              <h3 className="font-primary text-2xl sm:text-3xl lg:text-4xl text-brand-primary mb-4">
                {data.title}
              </h3>

              <p className="text-base sm:text-lg text-black leading-relaxed">
                {data.text}
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-5 text-lg font-medium text-brand-secondary hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
