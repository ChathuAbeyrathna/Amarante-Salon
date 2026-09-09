import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaBand({ heading, cta = "Reserve your ritual", href = "/booking" }) {
  return (
    <Reveal>
      <div className="relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-sm bg-bordeaux px-6 py-10 text-paper sm:px-10 md:px-16 md:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-12 select-none font-display text-[14rem] leading-none text-paper/5"
        >
          ✦
        </span>
        <h2 className="relative max-w-[18ch] font-display text-2xl text-paper sm:text-3xl md:text-4xl">
          {heading}
        </h2>
        <Link href={href} className="btn btn-light relative">
          {cta}
        </Link>
      </div>
    </Reveal>
  );
}
