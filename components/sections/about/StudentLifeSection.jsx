"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const DATA = [
  {
    id: 1,
    category: "CLUBS & SOCIETIES",
    title: "Find Your Passion",
    description:
      "Join one of our 50+ student-led organizations. Whether you're into robotics, debate, or environmental science, there's a place for you to lead and learn.",
    image: "/assets/student-1.jpg", // Replace with your image path
  },
  {
    id: 2,
    category: "ARTS & EXPRESSION",
    title: "Creative Excellence",
    description:
      "Our vibrant arts program includes painting, sketching, craft, design activities, and creative exhibitions that inspire imagination, self-expression, and artistic confidence in every learner.",
    image: "/assets/student-2.jpg", // Replace with your image path
  },
  {
    id: 3,
    category: "ATHLETICS",
    title: "Team Spirit",
    description:
      "With top-tier facilities and coaching, our athletes learn the value of teamwork, resilience, and sportsmanship on and off the field.",
    image: "/assets/student-3.jpg", // Replace with your image path
  },
];

export default function StudentLifeSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400; // Adjust scroll distance
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f5] overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Small Tag */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-lg font-semibold tracking-[0.4em] text-brand-secondary uppercase mb-4"
          >
            Student Life
          </motion.span>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary font-serif"
          >
            Beyond Academic Boundaries
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mt-5 leading-relaxed max-w-2xl mx-auto"
          >
            Experience a community where learning extends beyond the classroom.
            From spirited athletic competitions to inspiring artistic
            performances, every day is an opportunity to grow.
          </motion.p>
        </div>

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative group px-4 lg:px-12">
          {/* LEFT ARROW (Custom SVG) */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute top-[35%] -left-2 z-10 text-brand-secondary hover:text-[#e63946] transition-colors"
            aria-label="Scroll Left"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* RIGHT ARROW (Custom SVG) */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute top-[35%] -right-2 z-10 text-brand-secondary hover:text-[#e63946] transition-colors"
            aria-label="Scroll Right"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[31%] snap-center flex flex-col group cursor-pointer"
              >
                {/* IMAGE CARD */}
                <div className="relative w-full aspect-4/3 overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col grow">
                  <span className="text-sm font-bold tracking-[0.5em] text-brand-secondary uppercase mb-5">
                    {item.category}
                  </span>

                  <h3 className="text-3xl font-bold text-brand-primary mb-5">
                    {item.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6 ">
                    {item.description}
                  </p>

                  {/* BOTTOM LINE (Animated) */}
                  <div className="mt-auto w-full h-px bg-brand-secondary/30 relative">
                    <span className="absolute top-0 left-0 h-full w-0 bg-brand-secondary transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
