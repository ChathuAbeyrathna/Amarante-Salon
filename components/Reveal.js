"use client";

import { motion } from "framer-motion";

/**
 * Reusable scroll-triggered reveal wrapper.
 * variant: "up" (default fade+translate), "scale" (fade+scale)
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as = "div",
}) {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.94 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants[variant]}
      transition={{ duration: variant === "scale" ? 0.9 : 0.7, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container — animates children in sequence as it enters the viewport */
export function StaggerGroup({ children, className = "", stagger = 0.12 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
