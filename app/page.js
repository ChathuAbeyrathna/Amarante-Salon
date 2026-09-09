import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import RitualCard from "@/components/RitualCard";
import Testimonials from "@/components/Testimonials";
import HScroll from "@/components/HScroll";
import CtaBand from "@/components/CtaBand";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const RITUALS = [
  { num: "01", title: "Cut & Colour", desc: "Precision cutting paired with bespoke colour formulation, from soft balayage to full transformation.", price: "From LKR 8,500" },
  { num: "02", title: "Skin Rituals", desc: "Facials built around your skin's actual needs — hydration, brightening, or clinical-grade renewal.", price: "From LKR 6,000" },
  { num: "03", title: "Bridal Atelier", desc: "Trials, timelines and day-of styling for brides and their parties, managed start to finish.", price: "From LKR 45,000" },
  { num: "04", title: "Scalp Therapy", desc: "Diagnostic scalp treatments for thinning, buildup or sensitivity, using cold-pressed actives.", price: "From LKR 5,500" },
];

const GALLERY_TEASER = [
  { src: "/images/balayage.jpg", alt: "Balayage colour result" },
  { src: "/images/vivid.jpg", alt: "Vivid colour result", tall: true },
  { src: "/images/bridal-1.jpg", alt: "Bridal updo styling" },
  { src: "/images/skin1.jpg", alt: "Skin ritual in progress", tall: true },
  { src: "/images/curl.jpg", alt: "Curl definition result" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="flex min-h-[100svh] items-center px-6 pb-12 pt-24 md:px-12">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-[1.05fr_.95fr] md:gap-16">
          <div>
            <Reveal><p className="tag">Colombo 07 · Est. 2014</p></Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.7rem,6.6vw,6.4rem)] font-normal leading-[1.08]">
                Beauty,<br />practiced<br />
                <span className="italic text-bordeaux">as ritual.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-inksoft">
                Amarante is a studio for hair and skin, built around one idea: that a good appointment should feel considered from start to finish, not rushed between chairs.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href="/booking" className="btn btn-primary">Reserve a ritual</Link>
                <Link href="/rituals" className="link-arrow">View the menu <ArrowIcon /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex gap-8 border-t border-ink/15 pt-8 sm:gap-12">
                <div><strong className="block font-display text-2xl text-bordeaux">11</strong><span className="text-sm text-inksoft">Years in Colombo</span></div>
                <div><strong className="block font-display text-2xl text-bordeaux">9</strong><span className="text-sm text-inksoft">Master stylists</span></div>
                <div><strong className="block font-display text-2xl text-bordeaux">4.9</strong><span className="text-sm text-inksoft">Average rating</span></div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" className="relative order-first aspect-[4/5] rounded-[2px_140px_2px_2px] md:order-none">
            <Photo src="/images/home1.jpg" alt="Stylist finishing a client's colour service at Amarante" hover={false} className="h-full w-full ring-1 ring-inset ring-gold/40" priority sizes="(min-width: 768px) 45vw, 100vw" />
            <div className="absolute -left-0 bottom-4 max-w-[220px] bg-bordeaux p-5 font-display text-base italic leading-snug text-paper shadow-[0_22px_45px_-18px_rgba(59,17,32,0.6)] md:-left-6">
              &ldquo;The only place in Colombo I trust with my colour.&rdquo;
              <span className="mt-2 block font-body text-xs not-italic opacity-75">— House &amp; Home Magazine</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* PHILOSOPHY */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal variant="scale" className="relative aspect-[3/3.6]">
            <Photo src="/images/home2.jpg" alt="Detail of a precision haircut in progress" className="h-full w-full" />
          </Reveal>
          <Reveal>
            <p className="tag">Our approach</p>
            <h2 className="my-5 font-display text-[clamp(2.2rem,4.6vw,4rem)]">Slower appointments make for better results.</h2>
            <p className="mb-6 max-w-[46ch] text-lg leading-relaxed text-inksoft">
              Every ritual at Amarante begins with a consultation, not a clock. We spend the first ten minutes understanding your hair or skin before a single tool is picked up — it&apos;s the difference between a service and a result you keep.
            </p>
            <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-inksoft">
              Our stylists train continuously with colour houses in Milan and Seoul, and our skin therapists hold clinical certifications most salons don&apos;t ask for.
            </p>
            <Link href="/atelier" className="link-arrow">Meet the atelier <ArrowIcon /></Link>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE RITUALS */}
      <section className="bg-paper2 px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto mb-10 flex max-w-container flex-wrap items-end justify-between gap-6 md:mb-16">
          <Reveal>
            <p className="tag">Signature rituals</p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,4rem)]">Four ways to begin.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/rituals" className="link-arrow">Full menu &amp; pricing <ArrowIcon /></Link>
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-container grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {RITUALS.map((r) => (
            <RitualCard key={r.num} {...r} />
          ))}
        </div>
      </section>

      {/* ATELIER TEASER */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal variant="scale" className="relative order-first aspect-[16/11] md:order-2">
            <Photo src="/images/home3.jpg" alt="Interior of the Amarante studio on Horton Place" className="h-full w-full" />
          </Reveal>
          <Reveal className="md:order-1">
            <p className="font-display text-2xl italic leading-snug md:text-3xl">
              &ldquo;We didn&apos;t want another salon that felt like a waiting room. Amarante is closer to a workshop — quiet, deliberate, a little stubborn about doing things properly.&rdquo;
            </p>
            <cite className="mt-6 block font-body text-sm not-italic text-inksoft">Nadia Fernando, Founder &amp; Creative Director</cite>
            <Link href="/atelier" className="btn btn-ghost mt-8 inline-flex">The Amarante story</Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink px-6 py-20 md:px-12 md:py-32">
        <Testimonials />
      </section>

      {/* GALLERY TEASER */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto mb-10 flex max-w-container flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="tag">Recent work</p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,4rem)]">From the chair.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/gallery" className="link-arrow">Full gallery <ArrowIcon /></Link>
          </Reveal>
        </div>
        <HScroll items={GALLERY_TEASER} />
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-12 md:pb-32">
        <div className="mx-auto max-w-container">
          <CtaBand heading="Ready for your next appointment to feel different?" />
        </div>
      </section>
    </>
  );
}
