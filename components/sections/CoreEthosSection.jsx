"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react"; // npm i lucide-react
const ITEMS = [
  {
    no: "01",
    tag: "Future Ready",
    title: "Empower",
    desc: "As a committed 21st century learning organisation, Elite Global School is focusing on cultivating a diverse, effective program.",
    image: "/assets/ethos-6.webp",
    color: "#FF6B6B",
  },
  {
    no: "02",
    tag: "Value Based",
    title: "Learn",
    desc: "We believe in a value-based education that accentuates Ethics, Empathy, Esteem and Collaboration in learning and life.",
    image: "/assets/ethos-2.webp",
    color: "#4ECDC4",
  },
  {
    no: "03",
    tag: "Creative Thinking",
    title: "Invoke",
    desc: "Enrich programs to support the teaching process and invoke the creativity and hidden skills of every student.",
    image: "/assets/ethos-3.webp",
    color: "#FFE66D",
  },
  {
    no: "04",
    tag: "Hidden Potential",
    title: "Treasure",
    desc: "To kindle the rich treasures hidden inside every child and motivate them with inspiring facilitators and learning methods.",
    image: "/assets/ethos-4.webp",
    color: "#1A535C",
  },
  {
    no: "05",
    tag: "Social Responsibility",
    title: "Enrich",
    desc: "We foster social responsibility to help learners play an active role in the community while upholding inclusive values and principles.",
    image: "/assets/ethos-5.webp",
    color: "#FF6B6B",
  },
];

export default function CoreEthosSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  /* HEADER FADE */
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.05], [0, -20]);

  /* HORIZONTAL TRACK */
  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `-${(ITEMS.length - 1) * 100}%`],
  );

  /* --- BALL ENTRANCE & PHYSICS --- */
  // The ball only appears after scrolling starts (0 to 0.05 progress)
  const ballOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const ballEntranceScale = useTransform(scrollYProgress, [0, 0.05], [0.5, 1]);

  const ballX = useTransform(smoothProgress, [0, 1], ["0%", "90vw"]);
  const ballRotate = useTransform(smoothProgress, [0, 1], [0, 3240]);

  const ballY = useTransform(smoothProgress, (latest) => {
    return Math.abs(Math.sin(latest * 12)) * 120;
  });

  const ballBounceScale = useTransform(smoothProgress, (latest) => {
    return 1 + Math.abs(Math.sin(latest * 12)) * 0.15;
  });

  const goNext = () => {
    if (!sectionRef.current) return;
    const progress = scrollYProgress.get();
    const nextIndex = Math.min(
      ITEMS.length - 1,
      Math.floor(progress * ITEMS.length) + 1,
    );
    window.scrollTo({
      top: sectionRef.current.offsetTop + nextIndex * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#fcfcfc] text-black"
      style={{ height: `${ITEMS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col items-center justify-center">
        {/* HEADER */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-12 left-0 right-0 z-10 text-center pointer-events-none px-4"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 text-brand-primary">
            Elite Global School
          </h2>
        </motion.div>

        {/* --- THE DELAYED BALL --- */}
        <motion.div
          className="absolute top-[12%] left-[5%] z-50 pointer-events-none flex flex-col items-center"
          style={{
            x: ballX,
            opacity: ballOpacity,
            scale: ballEntranceScale,
          }}
        >
          <motion.div
            style={{ y: ballY, rotate: ballRotate, scale: ballBounceScale }}
          >
            <motion.button
              onClick={goNext}
              className="relative pointer-events-auto cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <Image
                  src="/assets/ball.webp"
                  alt="Football"
                  fill
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 640px) 80px, 112px"
                  className="object-contain"
                />
              </div>
            </motion.button>
          </motion.div>

          {/* DYNAMIC SHADOW */}
          <motion.div
            className="w-12 h-2 sm:w-20 sm:h-3 bg-black/10 blur-xl rounded-[100%]"
            style={{
              opacity: useTransform(ballY, [0, 120], [0.6, 0.1]),
              scale: useTransform(ballY, [0, 120], [1.2, 0.5]),
              marginTop: "20px",
            }}
          />
        </motion.div>

        {/* HORIZONTAL CONTENT TRACK */}
        <motion.div style={{ x }} className="flex h-full w-full">
          {ITEMS.map((item) => (
            <div
              key={item.no}
              className="min-w-full h-full flex items-center justify-center px-6 lg:px-24"
            >
              {/* Added mt-20 to give space between Ball/Title and Content */}
              <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-20 sm:mt-24">
                {/* TEXT SIDE */}
                <div className="relative z-0 order-2 lg:order-1">
                  <div className="absolute -top-24 -left-12 text-[10rem] lg:text-[18rem] font-black text-black/[0.05] select-none pointer-events-none leading-none">
                    {item.no}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative"
                  >
                    <div className="mb-4">
                      <span className="px-4 py-1.5 rounded-full text-brand-secondary text-xs font-bold uppercase tracking-widest bg-brand-secondary/5 border border-brand-secondary/10">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-5xl lg:text-8xl font-black text-brand-primary tracking-tighter mb-6 leading-[0.9]">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-lg lg:text-xl max-w-md leading-relaxed mb-10">
                      {item.desc}
                    </p>
                    <Link
                      href="/about"
                      className="group relative inline-flex items-center gap-2 px-6 py-2 text-brand-secondary font-bold text-lg transition-all duration-300 rounded-full border border-transparent hover:border-brand-secondary hover:bg-brand-secondary/5 outline outline-0 hover:outline-2 outline-brand-secondary/20 outline-offset-4"
                    >
                      <span>Learn More</span>

                      <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={22} strokeWidth={2.5} />
                      </motion.div>

                      {/* Optional: The animated line if you still want it, or remove for cleaner look */}
                      <div className="absolute bottom-0 left-6 w-0 h-[2px] bg-brand-secondary transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
                    </Link>
                  </motion.div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative z-0 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[4/3] overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <motion.div
                      initial={{ scaleX: 1 }}
                      whileInView={{ scaleX: 0 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                      className="absolute inset-0 z-10 origin-right"
                      style={{ backgroundColor: item.color }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
