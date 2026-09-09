"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const move = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };
    const grow = () => dot.classList.add("scale-[4.5]", "bg-bordeaux/15", "border", "border-bordeaux");
    const shrink = () => dot.classList.remove("scale-[4.5]", "bg-bordeaux/15", "border", "border-bordeaux");

    // event delegation so this keeps working across client-side route changes
    // and content that mounts after this component's first render
    const onOver = (e) => {
      if (e.target.closest && e.target.closest("a, button, .photo-hover")) grow();
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest("a, button, .photo-hover")) shrink();
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bordeaux transition-[transform,background,border] duration-200 md:block"
      aria-hidden="true"
    />
  );
}
