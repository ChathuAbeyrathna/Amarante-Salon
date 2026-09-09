"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/rituals", label: "Rituals" },
  { href: "/atelier", label: "Atelier" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Booking" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-smooth ${
          scrolled
            ? "border-gold/30 bg-paper/85 py-3 backdrop-blur-lg"
            : "border-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-container items-center justify-between gap-8 px-6 md:px-12">
          <Link href="/" className="font-display text-2xl">
            Amarante<em className="not-italic text-bordeaux italic">.</em>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`group relative py-1 text-sm font-medium transition-colors ${
                  pathname === n.href ? "text-bordeaux" : "text-ink"
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px origin-left bg-bordeaux transition-transform duration-300 ease-smooth ${
                    pathname === n.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="btn btn-primary hidden py-2.5 text-xs md:inline-flex"
            >
              Reserve
            </Link>
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-11 flex-col items-end justify-center gap-[7px] md:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 4.5, width: 26 } : { rotate: 0, y: 0, width: 26 }}
                className="block h-[1.5px] bg-ink"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3.5, width: 26 } : { rotate: 0, y: 0, width: 18 }}
                className="block h-[1.5px] bg-ink"
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-6 text-paper"
          >
            <nav>
              {NAV.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-paper/15 py-3 font-display text-4xl"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10 flex justify-between text-sm text-paper/60">
              <span>Colombo, Sri Lanka</span>
              <span>+94 11 234 5678</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
