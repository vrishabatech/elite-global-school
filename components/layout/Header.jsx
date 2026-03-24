"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Admission", href: "/admission" },
  { label: "About Us", href: "/about" },
  { label: "Sports Academy", href: "/sports-academy" },
  { label: "Gallery", href: "/gallery" },

  // { label: "News & Events", href: "/news-events" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const rawPathname = usePathname();
  const pathname = rawPathname === "/" ? "/" : rawPathname.replace(/\/+$/, "");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white"
      >
        <div className="container-lg flex items-center justify-between h-21">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Link href="/">
              {" "}
              <Image
                src="/elite-logos.png"
                alt="Elite Global School"
                width={160}
                height={50}
                priority
                className="h-28 w-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.25"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-10 px-6 space-y-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={pathname === item.href}
                  onClick={() => setOpen(false)}
                  mobile
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
