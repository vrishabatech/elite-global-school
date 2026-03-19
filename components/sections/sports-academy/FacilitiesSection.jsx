"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const facilities = [
  {
    id: "archery",
    title: "Archery",
    subtitle: "Precision Training",
    description:
      "Professional archery range specifically designed for precision, focus, and technique development.",
    image: "/assets/facilities-1.jpg",
  },
  {
    id: "shooting",
    title: "Shooting",
    subtitle: "Standard Range",
    description:
      "Safe and controlled shooting range to practice marksmanship and concentration under expert guidance.",
    image: "/assets/facilities-2.jpg",
  },
  {
    id: "cricket",
    title: "Cricket",
    subtitle: "Practice Nets",
    description:
      "Dedicated cricket nets and pitch for batting, bowling, and fielding drills to hone cricketing skills.",
    image: "/assets/facilities-3.png",
  },
  {
    id: "football",
    title: "Football",
    subtitle: "FIFA Standard",
    description:
      "Professional-grade turf designed for skill development, stamina building, and tactical teamwork.",
    image: "/assets/facilities-4.png",
  },
  {
    id: "tennis",
    title: "Tennis",
    subtitle: "Synthetic Courts",
    description:
      "High-quality tennis courts designed for optimal grip, bounce, and all-weather gameplay.",
    image: "/assets/facilities-5.jpg",
  },
  {
    id: "martial-arts",
    title: "Martial Arts",
    subtitle: "Indoor Dojo",
    description:
      "Spacious, climate-controlled indoor dojo equipped with professional safety mats.",
    image: "/assets/facilities-6.png",
  },
  {
    id: "self-defence",
    title: "Self-Defence",
    subtitle: "Tactical Arena",
    description:
      "Specialized zones for teaching crucial self-defense techniques, building confidence and physical resilience.",
    image: "/assets/facilities-7.jpg",
  },
  {
    id: "skating",
    title: "Skating",
    subtitle: "Skating Rink",
    description:
      "Smooth, well-maintained skating rink perfect for roller skating practice, balance, and agility training.",
    image: "/assets/facilities-8.jpg",
  },
];

export default function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const DURATION = 5000; // 5 seconds per slide

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facilities.length);
    }, DURATION);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-12 h-0.5 bg-brand-secondary"></span>
            <span className="text-sm tracking-[0.25em] text-brand-secondary font-extrabold uppercase">
              Facilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6"
          >
            World-Class Facilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl leading-relaxed"
          >
            Train in professional-grade environments designed for peak
            performance.
          </motion.p>
        </div>

        {/* --- EXPANDING CARDS --- */}
        <div
          className="flex flex-col lg:flex-row h-[600px] gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {facilities.map((facility, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={facility.id}
                layout
                onClick={() => setActiveIndex(index)}
                // Active: flex-3.5, Inactive: flex-1
                className={`relative overflow-hidden cursor-pointer shadow-xl border border-gray-100 ${
                  isActive ? "flex-[3.5]" : "flex-[1]"
                }`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Image Layer */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      isActive
                        ? "scale-100"
                        : "scale-125 saturate-50 hover:saturate-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 duration-500 ${
                      isActive ? "opacity-90" : "opacity-70"
                    }`}
                  ></div>
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  {/* 1. ACTIVE STATE TEXT (Horizontal) */}
                  <AnimatePresence mode="popLayout">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-[0.4em] mb-2">
                          {facility.title}
                        </h3>
                        <p className="text-brand-secondary font-semibold mb-3 text-sm tracking-wide">
                          {facility.subtitle}
                        </p>
                        <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-lg mb-6">
                          {facility.description}
                        </p>

                        {/* Progress Bar */}
                        {!isPaused && (
                          <div className="w-full h-1 bg-white/20 overflow-hidden mt-4">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{
                                duration: DURATION / 1000,
                                ease: "linear",
                              }}
                              className="h-full bg-brand-secondary"
                            />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 2. INACTIVE STATE TEXT (Vertical - Bottom to Top) */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        // CORRECTION: Absolute positioning with origin-bottom-left ensures it starts at bottom and reads up
                        className="absolute bottom-10 left-8 origin-bottom-left -rotate-90 whitespace-nowrap"
                      >
                        <h3 className="text-2xl font-bold text-white uppercase tracking-[0.2em]">
                          {facility.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- BACKGROUND WATERMARK --- */}
      <div className="absolute bottom-[1%] -right-[1%]  pointer-events-none select-none z-0">
        <span className="text-5xl md:text-5xl lg:text-9xl font-bold text-gray-100/80 leading-none block">
          Sport
        </span>
      </div>
    </section>
  );
}
