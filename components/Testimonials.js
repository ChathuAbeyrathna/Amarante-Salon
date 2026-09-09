"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "First salon that's ever fixed my curl pattern instead of fighting it. My stylist actually explained what my hair was doing wrong for years.",
    name: "Ishara Perera",
    role: "Client since 2021",
  },
  {
    quote:
      "The bridal team ran my entire wedding morning like clockwork — six people, three hours, zero panic. Worth every rupee.",
    name: "Dilani Wickrama",
    role: "Bridal Atelier client",
  },
  {
    quote:
      "My scalp therapist diagnosed a buildup issue my dermatologist missed. Three sessions in and the difference is obvious.",
    name: "Ruwan de Silva",
    role: "Scalp Therapy client",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const active = TESTIMONIALS[idx];

  return (
    <div className="mx-auto max-w-[760px] text-center">
      <p className="tag justify-center text-goldlight">Client notes</p>
      <div className="mt-8 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="mb-5 tracking-[0.2em] text-gold">★★★★★</div>
            <p className="font-display text-2xl font-normal leading-snug text-paper md:text-3xl">
              &ldquo;{active.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-bold text-paper">{active.name}</p>
            <p className="text-sm text-paper/60">{active.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-10 flex justify-center gap-2.5">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === idx ? "scale-125 bg-bordeaux" : "bg-paper/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
