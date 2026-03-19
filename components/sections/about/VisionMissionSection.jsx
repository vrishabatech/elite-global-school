"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionMissionSection() {
  return (
    <section className="relative overflow-hidden">

      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/assets/about-bg.svg" 
            alt="Background Pattern"
            fill
            className="object-cover opacity-30" // Adjusted opacity for better readability
        />
      </div>

      {/* TOP CONTENT */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-12 lg:pb-16 text-center z-10">

        {/* TAG */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-bold tracking-[0.4em] text-brand-secondary uppercase"
        >
          Vision and Mission
        </motion.span>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 lg:mt-6 font-primary font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-primary mb-4"
        >
          Shaping Futures Through Education
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-brand-accent max-w-2xl mx-auto font-light leading-relaxed"
        >
          We aim to nurture curious minds, strong values, and confident learners for the future.
        </motion.p>

        {/* KEYWORDS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 lg:mt-12 mx-auto flex flex-wrap justify-center bg-white shadow-lg rounded-sm max-w-2xl p-4 lg:p-5 items-center gap-3 lg:gap-8 text-sm sm:text-lg font-bold uppercase tracking-widest text-gray-800"
        >
          <span>Learn</span>
          <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
          <span>Grow</span>
          <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
          <span>Explore</span>
          <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
          <span>Achieve</span>
        </motion.div>
      </div>

      {/* VISION + MISSION + ORANGE STRIP CONTAINER */}
      <div className="relative z-10">
        
        {/* ORANGE BASE STRIP */}
        {/* Adjusted left/right margins for responsiveness */}
        <div className="absolute bottom-0 left-0 lg:left-10 right-0 h-[calc(100%-60px)] lg:h-[calc(100%-80px)] bg-brand-secondary z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 lg:pb-20">
          
          {/* SINGLE WHITE CARD CONTAINER */}
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             viewport={{ once: true }}
             className="bg-white shadow-2xl relative mx-auto max-w-6xl rounded-sm overflow-hidden"
          >
            <div className="grid md:grid-cols-2 relative">

              {/* === VISION (Left Side) === */}
              {/* Added 'relative' to position the divider inside this block */}
              <div className="relative p-8 sm:p-10 lg:p-16">
                <h3 className="font-primary font-bold text-3xl lg:text-4xl text-brand-primary mb-4 lg:mb-6">
                  Our Vision
                </h3>
                <p className="text-base lg:text-lg text-brand-accent leading-relaxed">
                  Our vision is to build a sturdy and highly educated citizen who are articulate,
                  thoughtful, trusts to express and debate ideas and actively contributes to their
                  own and others growth and also to uphold a learning community that produces leaders
                  through faith, knowledge and inspiration.
                </p>

                {/* --- CUSTOM CENTERED DIVIDER --- */}
                <div 
                    className="absolute bg-brand-secondary/70 bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px md:top-1/2 md:right-0 md:bottom-auto md:left-auto md:-translate-y-1/2 md:w-px md:h-[60%]"
                />
              </div>

              {/* === MISSION (Right Side) === */}
              <div className="p-8 sm:p-10 lg:p-16">
                <h3 className="font-primary font-bold text-3xl lg:text-4xl text-brand-primary mb-4 lg:mb-6">
                  Our Mission
                </h3>
                <p className="text-base lg:text-lg text-brand-accent leading-relaxed">
                  Elite Global is dedicated to build an enriched learning environment using
                  modern-day teaching pedagogy to cultivate an innovative and rigorous academic
                  program streamed with CBSE Curriculum.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}