"use client";

import { motion } from "framer-motion";

export default function WhyChooseSportsSection() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#e5a952] uppercase tracking-wide">
            Why Choose Our Sports Program?
          </h2>
        </motion.div>

        <div className="space-y-6 md:space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="text-brand-primary font-bold mt-1 text-xl">•</span>
            <p className="text-lg md:text-xl text-[#2b3a55]">
              <span className="font-extrabold">Expert Coaches:</span> Specialized trainers for every discipline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <span className="text-brand-primary font-bold mt-1 text-xl">•</span>
            <p className="text-lg md:text-xl text-[#2b3a55]">
              <span className="font-extrabold">Modern Infrastructure:</span> State-of-the-art facilities at our new Madhavaram Campus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-3"
          >
            <span className="text-brand-primary font-bold mt-1 text-xl">•</span>
            <p className="text-lg md:text-xl text-[#2b3a55]">
              <span className="font-extrabold">Holistic Growth:</span> Balancing academic excellence with physical grit.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-[#c23546]">
            "A healthy body houses a powerful mind."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
