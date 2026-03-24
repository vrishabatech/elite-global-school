"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { desktop: "/banner/banner-4.webp", mobile: "/banner/banner-mob-4.webp" },
  { desktop: "/banner/banner-2.webp", mobile: "/banner/banner-mob-2.webp" },
  { desktop: "/banner/banner-1.webp", mobile: "/banner/banner-mob-1.webp" },
];

/* --- PAPER ROUND ROTATE ANIMATION --- */
const slideVariants = {
  enter: (direction) => ({
    clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    // 3D Rotation like a page
    rotateY: direction > 0 ? 45 : -45,
    scale: 1.1,
    opacity: 0,
    transformOrigin: direction > 0 ? "right center" : "left center",
  }),
  center: {
    clipPath: "inset(0 0 0 0%)",
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      clipPath: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
      rotateY: { duration: 1.4, ease: [0.25, 1, 0.5, 1] },
      scale: { duration: 1.4, ease: [0.25, 1, 0.5, 1] },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction) => ({
    clipPath: direction < 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    // Rotate away like a paper being pulled
    rotateY: direction < 0 ? 25 : -25,
    scale: 0.9,
    opacity: 0,
    transition: {
      clipPath: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
      rotateY: { duration: 1.1 },
      opacity: { duration: 0.8 },
    },
  }),
};

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  const index = Math.abs(page % SLIDES.length);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    // Perspective added to the container to make 3D rotations look real
    <section className="relative w-full h-[100dvh] overflow-hidden bg-neutral-950 [perspective:1500px]">
      {/* 1. THE NEXT.JS IMAGE CAROUSEL */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src={isMobile ? SLIDES[index].mobile : SLIDES[index].desktop}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : undefined}
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          {/* Subtle overlay to enhance the 3D depth during the turn */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* 2. INTERACTIVE SIDE CONTROLS */}
      <div className="absolute inset-0 z-20 flex">
        <div
          className="flex-1 cursor-west-resize"
          onClick={() => paginate(-1)}
        />
        <div
          className="flex-1 cursor-east-resize"
          onClick={() => paginate(1)}
        />
      </div>

      {/* 3. MINIMALIST PAGINATION */}
      <div className="absolute bottom-6 sm:bottom-12 left-0 right-0 z-30 hidden sm:flex items-center justify-center pointer-events-none">
        {/* Cinematic Slide Counter */}
        <div className="text-white flex items-baseline gap-1 sm:gap-2 overflow-hidden h-10 bg-black/10 sm:bg-transparent px-2 sm:px-0 rounded-md backdrop-blur-sm sm:backdrop-blur-none pointer-events-auto">
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="text-3xl sm:text-4xl font-medium tracking-tighter"
          >
            0{index + 1}
          </motion.span>
          <span className="text-white/60 text-lg sm:text-xl font-light">
            / 0{SLIDES.length}
          </span>
        </div>
      </div>

      {/* 4. TOP LASER PROGRESS BAR */}
      <div className="absolute top-0 left-0 w-full z-40 h-[3px]">
        <motion.div
          key={page}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "linear" }}
          className="w-full h-full bg-brand-primary shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        />
      </div>
    </section>
  );
}
