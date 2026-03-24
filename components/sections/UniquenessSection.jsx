"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    title: "Playground",
    desc: "Bright, focused spaces designed for creative play and physical development.",
    image: "/assets/our-1.webp",
  },
  {
    title: "Classroom",
    desc: "Open, safe areas where students explore, collaborate and build teamwork.",
    image: "/assets/our-2.jpg",
  },
  {
    title: "Campus",
    desc: "A secure, inspiring environment that supports learning beyond classrooms.",
    image: "/assets/our-3.jpg",
  },
  {
    title: "Library",
    desc: "A knowledge hub that encourages reading, research, and independent thinking.",
    image: "/assets/our-4.jpg",
  },
  {
    title: "Canteen",
    desc: "Hygienic, welcoming spaces serving nutritious meals for growing minds.",
    image: "/assets/our-5.jpg",
  },
];

export default function UniquenessSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const timerRef = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % FEATURES.length);
    }, 4000);
  };

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <section className="section-lg bg-white overflow-hidden">
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-4 lg:px-0">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
        >
          <span className="text-sm sm:text-lg tracking-widest text-brand-secondary uppercase">
            Why Elite Global School?
          </span>
          <h2 className="mt-4 font-primary font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-primary">
            Our Uniqueness Well
            <br />
            Defined Here
          </h2>
        </motion.div>

        {/* ================= MOBILE VIEW (UNCHANGED) ================= */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {FEATURES.map((item, index) => (
            <motion.div
              key={item.title}
              onClick={() => setActiveIndex(index)}
              whileTap={{ scale: 0.97 }}
              className="relative flex-shrink-0 w-[85%] h-[260px] snap-center rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                loading="lazy"
                sizes="85vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h4 className="font-primary text-xl mb-1">{item.title}</h4>
                <p className="text-sm text-white/90">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (AUTO + FULL WIDTH) ================= */}
        <div
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className="relative hidden lg:flex justify-center items-end h-[360px] w-full"
        >
          {FEATURES.map((item, index) => {
            const total = FEATURES.length;
            let distance = index - activeIndex;
            if (distance > total / 2) distance -= total;
            if (distance < -total / 2) distance += total;

            const abs = Math.abs(distance);
            const isActive = distance === 0;

            return (
              <motion.div
                key={item.title}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: distance * 220,
                  scale: isActive ? 1 : abs === 1 ? 0.92 : 0.88,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{ y: -8 }}
                className={`absolute overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] cursor-pointer group transition-all duration-300
    ${isActive
                    ? "z-30 w-[520px] h-[340px] shadow-brand-primary/20"
                    : abs === 1
                      ? "z-20 w-[480px] h-[300px]"
                      : "z-10 w-[460px] h-[280px]"
                  }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  loading="lazy"
                  sizes="520px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-90"}`}
                />

                <div
                  className={`absolute bottom-0 w-full p-6 text-white transition-all duration-500 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"}`}
                >
                  <h4 className="font-primary text-2xl lg:text-3xl font-bold mb-2 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
