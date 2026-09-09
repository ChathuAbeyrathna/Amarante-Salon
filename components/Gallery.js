"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "colour", label: "Colour" },
  { key: "cutting", label: "Cutting" },
  { key: "bridal", label: "Bridal" },
  { key: "skin", label: "Skin" },
];

const ITEMS = [
  { src: "/images/balayage.jpg", category: "colour", tag: "Cut & Colour", title: "Balayage, gloss finish" },
  { src: "/images/precision-bob.jpg", category: "cutting", tag: "Cutting", title: "Precision bob" },
  { src: "/images/updo.jpg", category: "bridal", tag: "Bridal", title: "Trial updo" },
  { src: "/images/skin1.jpg", category: "skin", tag: "Skin", title: "Brightening ritual" },
  { src: "/images/root-melt.jpg", category: "colour", tag: "Cut & Colour", title: "Root melt correction" },
  { src: "/images/curl.jpg", category: "cutting", tag: "Cutting", title: "Curl-cut reshape" },
  { src: "/images/bridal.jpg", category: "bridal", tag: "Bridal", title: "Day-of styling" },
  { src: "/images/skin2.jpg", category: "skin", tag: "Skin", title: "Clinical renewal peel" },
  { src: "/images/vivid.jpg", category: "colour", tag: "Cut & Colour", title: "Vivid fashion colour" },
  { src: "/images/long-layers.jpg", category: "cutting", tag: "Cutting", title: "Long layers" },
  { src: "/images/bridal-glam.jpg", category: "bridal", tag: "Bridal", title: "Bridal party glam" },
  { src: "/images/scalp.jpg", category: "skin", tag: "Skin", title: "Scalp diagnostic" },
  { src: "/images/traditional-bride.jpg", category: "bridal", tag: "Bridal", title: "Traditional bridal dressing" },
  { src: "/images/wedding.jpg", category: "bridal", tag: "Bridal", title: "Wedding fashion" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [openIdx, setOpenIdx] = useState(null);

  const visible = ITEMS.filter((it) => filter === "all" || it.category === filter);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i + 1) % visible.length);
      if (e.key === "ArrowLeft") setOpenIdx((i) => (i - 1 + visible.length) % visible.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, visible.length]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3 md:mb-14">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => {
              setFilter(f.key);
              setOpenIdx(null);
            }}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ease-smooth ${
              filter === f.key
                ? "border-ink bg-ink text-paper"
                : "border-ink/20 text-inksoft hover:border-ink hover:bg-ink hover:text-paper"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setOpenIdx(i)}
            className="group relative mb-5 block w-full cursor-zoom-in break-inside-avoid text-left"
          >
            <div className="photo photo-hover relative aspect-[3/4] w-full">
              <Image src={item.src} alt={item.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="block text-xs text-goldlight">{item.tag}</span>
              <strong className="block text-sm font-semibold text-paper">{item.title}</strong>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIdx !== null && visible[openIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6 md:p-16"
            onClick={() => setOpenIdx(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setOpenIdx(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 text-xl text-paper"
            >
              &times;
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i - 1 + visible.length) % visible.length); }}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-xl text-paper md:left-8"
            >
              &larr;
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i + 1) % visible.length); }}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-xl text-paper md:right-8"
            >
              &rarr;
            </button>

            <motion.div
              key={visible[openIdx].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative h-[70vh] w-[90vw] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visible[openIdx].src}
                alt={visible[openIdx].title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
            <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-paper/70">
              {visible[openIdx].tag} — {visible[openIdx].title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
