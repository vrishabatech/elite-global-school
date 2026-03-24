"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";

export default function MainHero({
  title = "",
  imageDesktop = "",       // Default for Desktop
  imageMobile = "", // Default for Mobile
}) {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">

      {/* === BACKGROUND IMAGES === */}

      {/* 1. Desktop Image (Visible on md screens and up) */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src={imageDesktop}
          alt={`${title} Banner`}
          fill
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 2. Mobile Image (Visible on small screens only) */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src={imageMobile}
          alt={`${title} Banner`}
          fill
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* === CONTENT === */}

      {/* CENTER TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-full flex items-center justify-center text-center px-4"
      >
        <h1 className="font-primary font-bold text-white text-4xl lg:text-5xl drop-shadow-md">
          {title}
        </h1>
      </motion.div>

      {/* BREADCRUMB – BOTTOM LEFT */}
      <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 text-lg font-medium text-white  drop-shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-brand-secondary transition-colors"
        >
          <HiHome className="text-2xl mb-0.5" />
          Home
        </Link>
        <span className="opacity-60">/</span>
        <span className="text-white border-b border-transparent">
          {title}
        </span>
      </div>

    </section>
  );
}