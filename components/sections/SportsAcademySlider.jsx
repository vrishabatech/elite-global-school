"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

/* FIXED CONTENT */
const CONTENT = {
  tag: "Elite Sports Academy",
  title: "Physical And Mental Ability Enhances A Child’s Early Growth",
  desc: `Understanding the long gap of generation which had not experienced the value of sports academy in a school campus due to space constraints in city limits.
  
We thought of filling this gap by giving our children the opportunity for them to explore their talents in sports and make them physically fit and healthy. This evoked us to dedicate a stretch of 6000 Sq. ft. of carpet area for the sports academy comprising a Football Turf and a wide area for physically trimming our children with different kinds of Martial arts to be taught by well experienced trainers.`,
};

/* ONLY IMAGES SLIDE */
const IMAGES = [
  { src: "/assets/fac-3.webp", label: "FOOTBALL TRAINING" },
  { src: "/assets/fac-1.jpg", label: "KARATE TRAINING" },
  { src: "/assets/fac-2.webp", label: "SILAMBAM TRAINING" },
  { src: "/assets/fac-4.jpeg", label: "CRICKET TRAINING" },
  { src: "/assets/fac-5.jpg", label: "TABLE TENNIS TRAINING" },
  { src: "/assets/fac-6.jpg", label: "SKATING TRAINING" },
  { src: "/assets/fac-7.jpg", label: "ARCHERY TRAINING" },
  { src: "/assets/fac-8.jpg", label: "SHOOTING GAME TRAINING" },
  { src: "/assets/fac-9.jpg", label: "TENNIS TRAINING" },
  { src: "/assets/fac-10.jpg", label: "SELF DEFENCE TRAINING" },
  { src: "/assets/fac-11.jpg", label: "MARTIAL ARTS TRAINING" },
];

export default function SportsAcademyCard() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const change = (d) => {
    setDir(d);
    setIndex((p) => (p + d + IMAGES.length) % IMAGES.length);
  };

  /* AUTO SLIDE (IMAGES ONLY) */
  useEffect(() => {
    const timer = setInterval(() => change(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-lg bg-white overflow-hidden">
      <div className="container-lg">
        <div className="relative md:p-6">
          {/* LEFT ARROW */}
          <button
            onClick={() => change(-1)}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur shadow-lg rounded-full text-brand-secondary hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            <HiChevronLeft size={24} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => change(1)}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur shadow-lg rounded-full text-brand-secondary hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            <HiChevronRight size={24} />
          </button>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start border border-brand-secondary">
            {/* LEFT – IMAGE SLIDER */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ x: dir > 0 ? 80 : -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: dir > 0 ? -80 : 80, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={IMAGES[index].src}
                    alt={IMAGES[index].label}
                    width={640}
                    height={740}
                    unoptimized
                    className="w-full h-140 object-cover"
                    priority={index === 0}
                  />

                  {/* IMAGE LABEL */}
                  <span className="absolute bottom-5 left-5 text-brand-primary text-md sm:text-base font-semibold tracking-[0.35em] uppercase px-5 py-2">
                    {IMAGES[index].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT – FIXED CONTENT */}
            <div className="mt-6 px-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-10 h-0.5 bg-brand-secondary" />
                <span className="text-sm sm:text-base tracking-[0.35em] text-brand-secondary uppercase">
                  {CONTENT.tag}
                </span>
              </div>

              <h3 className="font-primary font-bold text-2xl lg:text-3xl text-brand-primary leading-snug max-w-lg">
                {CONTENT.title}
              </h3>

              <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg whitespace-pre-line">
                {CONTENT.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
