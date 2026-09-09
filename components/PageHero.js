import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function PageHero({ crumb, eyebrow, title, lede, maxWidth = "16ch" }) {
  return (
    <section className="px-6 pb-10 pt-32 sm:pb-14 md:px-12 md:pt-40 lg:pb-16 lg:pt-44">
      <div className="mx-auto max-w-container">
        <Reveal>
          <div className="mb-6 flex items-center gap-2 text-sm text-inksoft">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span className="text-gold">/</span>
            <span className="text-ink">{crumb}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="tag">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="mt-5 font-display text-[clamp(2.7rem,6.6vw,5.2rem)] font-normal leading-[1.05]"
            style={{ maxWidth }}
          >
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-inksoft">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
