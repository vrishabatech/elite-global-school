"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Football",
    image: "/assets/fac-3.webp",
    description:
      "Comprehensive tactical and physical training for offensive and defensive positions.",
  },
  {
    id: 2,
    title: "KARATE TRAINING",
    image: "/assets/fac-1.jpg",
    description:
      "Focus on skill development, game IQ, and strength conditioning for all court positions.",
  },
  {
    id: 3,
    title: "SILAMBAM TRAINING",
    image: "/assets/fac-2.webp",
    description:
      "Clay and hard court training focused on technique, agility, and mental toughness.",
  },
  {
    id: 4,
    title: "CRICKET TRAINING",
    image: "/assets/fac-4.jpeg",
    description:
      "Comprehensive coaching covering batting stance, bowling action, and fielding drills.",
  },

  {
    id: 5,
    title: "TABLE TENNIS TRAINING",
    image: "/assets/fac-5.jpg",
    description:
      "High-speed training designed to improve reflex speed and spin techniques.",
  },
];

export default function EliteSportsAcademySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = programs.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const cardWidthPercentage = 100 / cardsPerView;

  return (
    <section className="py-12 md:py-20 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/about-bg.svg"
          alt="Grid Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary tracking-[0.25em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-semibold block mb-3 md:mb-4"
          >
            Elite Sports Academy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-4 md:mb-6 leading-tight"
          >
            Physical And Mental Ability Enhances A Child&apos;s Early Growth
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative px-2 md:px-12">
          {/* Desktop Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-brand-secondary"
          >
            <ArrowLeft size={28} strokeWidth={1.5} />
          </motion.button>

          {/* Desktop Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-0 top-[40%] -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-brand-secondary"
          >
            <ArrowRight size={28} strokeWidth={1.5} />
          </motion.button>

          {/* Cards */}
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * cardWidthPercentage}%`,
              }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="shrink-0 px-2 sm:px-3 md:px-4 box-border"
                  style={{ width: `${cardWidthPercentage}%` }}
                >
                  <div className="h-full flex flex-col bg-white/50 backdrop-blur-sm p-3 md:p-4 rounded-xl">
                    {/* Image */}
                    <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 md:mb-6 overflow-hidden group">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="grow flex flex-col justify-between px-1 md:px-2">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-brand-primary uppercase mb-2 md:mb-3">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {program.description}
                        </p>
                      </div>

                      <div className="w-full h-px bg-brand-secondary/50 mt-4 md:mt-6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-6 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-brand-secondary"
            >
              <ArrowLeft size={22} strokeWidth={1.5} />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-brand-secondary"
            >
              <ArrowRight size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
