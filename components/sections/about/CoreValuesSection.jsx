"use client";

import { motion } from "framer-motion";
// Importing clean, modern icons from Lucide (via react-icons)
import { LuBadgeCheck, LuUsers, LuLightbulb, LuShieldCheck } from "react-icons/lu";

const VALUES = [
  {
    id: 1,
    title: "Integrity",
    desc: "Acting with honesty and honor in all we do.",
    icon: <LuBadgeCheck size={40} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Community",
    desc: "Building strength through diverse connections.",
    icon: <LuUsers size={40} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Innovation",
    desc: "Embracing creativity to solve future problems.",
    icon: <LuLightbulb size={40} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "Resilience",
    desc: "Growing stronger through challenges.",
    icon: <LuShieldCheck size={40} strokeWidth={1.5} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CoreValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-semibold tracking-[0.4em] text-brand-secondary uppercase block mb-3"
          >
            Our Core Values
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-primary font-bold text-4xl lg:text-5xl text-brand-primary mb-4"
          >
            The Heart of Our School
          </motion.h2>

        </div>

        {/* --- GRID VALUES --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center px-4 py-8 lg:px-6"
            >
              {/* Icon Circle */}
              <div className="mb-6 p-5 rounded-full bg-gray-50 text-brand-accent transition-all duration-300 hover:scale-110 hover:bg-brand-primary hover:text-white hover:shadow-lg">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-primary font-bold text-3xl text-brand-primary mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-brand-accent leading-relaxed max-w-[240px]">
                {item.desc}
              </p>

              {/* --- CUSTOM CENTERED SEPARATOR --- */}
              {/* Render separator for all items EXCEPT the last one */}
              {index !== VALUES.length - 1 && (
                <div 
                  className="absolute bg-gray-200 bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px lg:top-1/2 lg:right-0 lg:left-auto lg:bottom-auto lg:-translate-y-1/2 lg:w-px lg:h-[60%]"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}