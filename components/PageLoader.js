"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // brief, deliberate pause so the mark is always visible even on fast
    // connections — a real "loading state", not just a flash.
    const t = setTimeout(() => setHidden(true), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed inset-0 z-[900] flex items-center justify-center bg-paper"
        >
          <motion.span
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display text-3xl italic text-bordeaux"
          >
            Amarante
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
