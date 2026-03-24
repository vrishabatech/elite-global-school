"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "EVENTS",
    title: "Stars of Ramadhan",
    // Added \n\n for line breaks
    description: `The month of Ramadan is always special for us, especially in terms of acquiring knowledge. The management of Elite Global School has initiated a special programme for this month in order to make use of the valuable time of our “little ummatis”, to spend their time in acquiring knowledge with fun & interesting activities and to reward them for the same.

Alhamdulillah, this is the third year of this programme, where we had a huge number of students participating every year by the motivation given by parents and made it beneficial for them. All the competition and activities would be planned for just 1 day offline at school premises.`,
    details: [
      "Date: 08/05/2023 - 27/05/2023",
      "Age Group: 5-12 years",
      "Timing: 10 am - 12 noon",
    ],
    description_1: "For More Details Click the button below to join the group",
    ctaText: "Join Group",
    image: "/assets/news-img-1.webp",
    ctaLink: "https://chat.whatsapp.com/DQAg6bYbsmtBURipaSACTY",
  },
  {
    id: 2,
    category: "NEWS",
    title: "Sports Camp Trained by Experts",
    // Added \n for list-like spacing
    description: `Football,
Silambam,
Karate.`,
    details: [
      "Timing (08.05.2023 - 27.05.2023)",
      "04:30pm to 6:30pm",
      "6:30pm to 8:30pm",
    ],
    ctaText: "Join Group",
    image: "/assets/news-img-2.webp",
    ctaLink: "https://chat.whatsapp.com/HomDoAnqvdfGQ8XDoqPggN",
  },
  {
    id: 3,
    category: "NEWS",
    title: "IQ & Memory Development Camp",
    description: "This camp helps your child:",
    bulletPoints: [
      "To Improve IQ & Memory Power",
      "To Remember Lessons easily",
      "To Improve concentration",
      "To Increase learning Skills",
      "To Score more marks",
    ],
    ctaText: "Join Group",
    image: "/assets/news-img-3.webp",
    ctaLink: "https://chat.whatsapp.com/GwaWSFj6wVd7GAngnyHkvo",
  },
];

export default function NewsEventsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.25em] text-brand-secondary font-extrabold uppercase block mb-4"
          >
            News And Events
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-primary relative inline-block"
          >
            What&apos;s Happening at EGS
          </motion.h2>
        </div>

        {/* --- CONTENT BLOCKS --- */}
        <div className="space-y-24 md:space-y-32">
          {newsItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-20 items-center`}
              >
                {/* IMAGE COLUMN */}
                <motion.div
                  className="w-full lg:w-1/2 relative"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="relative aspect-4/3 overflow-hidden shadow-2xl group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border-8 border-white/20 pointer-events-none"></div>
                  </div>
                  <div className={`absolute -bottom-6 ${isEven ? "-left-6" : "-right-6"} w-24 h-24 bg-orange-100 -z-10 hidden lg:block`}></div>
                </motion.div>

                {/* TEXT COLUMN */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-0.5 bg-brand-secondary"></span>
                    <span className="text-sm tracking-[0.2em] text-brand-secondary font-bold uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 leading-tight">
                    {item.title}
                  </h3>

                  {/* KEY CHANGE HERE: 
                      Added 'whitespace-pre-line' to render \n as actual new lines 
                  */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 whitespace-pre-line">
                    {item.description}
                  </p>

                  {item.bulletPoints ? (
                    <ul className="space-y-2 mb-8">
                      {item.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                          <span className="text-brand-secondary mt-1.5 text-xs">●</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-1 mb-8">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-600 text-lg leading-relaxed mb-6 whitespace-pre-line">
                    {item.description_1}
                  </p>

                  <Link href={item.ctaLink} passHref legacyBehavior>
                    <motion.a
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-wider text-sm group cursor-pointer"
                    >
                      {item.ctaText}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </Link>

                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}