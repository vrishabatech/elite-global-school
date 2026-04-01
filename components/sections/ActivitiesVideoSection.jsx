"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ActivitiesVideoSection() {
  const videoId = "eu-Jp9UEPIg";

  // NOTE: mute=1 is REQUIRED for autoplay to work in 99% of browsers.
  // I have added 'controls=1' so users can easily turn the sound on.
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&controls=1&showinfo=0`;

  return (
    <section className="relative bg-white py-10 overflow-hidden">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-primary font-bold text-3xl sm:text-4xl text-brand-primary mb-10 px-4"
        >
          All about the school in a video
        </motion.h2>

        {/* FULL WIDTH VIDEO CONTAINER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full shadow-2xl"
        >
          {/* 16:9 Aspect Ratio */}
          <div className="relative w-full pt-[56.25%] bg-black">
            <iframe
              src={embedUrl}
              title="Elite Global School Activities"
              // Autoplay permission is mandatory here
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center px-4"
        >
          <Link
            href="https://www.youtube.com/channel/UCZpuYEecLKm6TAA-duHzSRQ/videos"
            target="_blank"
          >
            <Button variant="primary">View more videos →</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
