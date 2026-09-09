"use client";

import { motion } from "framer-motion";

export default function RitualCard({ num, title, desc, price }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden bg-paper p-8"
    >
      <span className="absolute left-7 top-7 z-10 font-display text-sm italic text-gold transition-colors group-hover:text-goldlight">
        {num}
      </span>
      <div className="absolute inset-0 z-0 origin-bottom translate-y-full bg-ink transition-transform duration-500 ease-smooth group-hover:translate-y-0" />
      <div className="relative z-10">
        <h3 className="mb-2 font-display text-2xl transition-colors group-hover:text-paper">
          {title}
        </h3>
        <p className="max-h-0 max-w-[30ch] overflow-hidden text-sm text-inksoft opacity-0 transition-all duration-500 ease-smooth group-hover:max-h-24 group-hover:opacity-100 group-hover:text-paper/75">
          {desc}
        </p>
        <span className="mt-4 block font-display text-lg text-bordeaux transition-colors group-hover:text-paper">
          {price}
        </span>
      </div>
    </motion.div>
  );
}
