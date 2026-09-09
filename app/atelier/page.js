import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import HScroll from "@/components/HScroll";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "The Atelier — Amarante",
  description: "The story, process and people behind Amarante — a Colombo studio for hair and skin.",
};

const TIMELINE = [
  { num: "01", title: "Consultation", desc: "Ten unhurried minutes to understand your hair or skin history, and what you actually want out of today." },
  { num: "02", title: "Plan", desc: "Your stylist or therapist talks through the approach and timing before starting, so there are no surprises." },
  { num: "03", title: "The ritual", desc: "The service itself, at a pace built around the result — not the next appointment on the book." },
  { num: "04", title: "Aftercare", desc: "A short walkthrough of upkeep, with product recommendations only when they'll genuinely help." },
];

const TEAM = [
  { src: "/images/nadia.jpg", name: "Nadia Fernando", role: "Founder & Colour Director" },
  { src: "/images/kavindu.jpg", name: "Kavindu Silva", role: "Senior Cutting Specialist" },
  { src: "/images/tharushi.jpg", name: "Tharushi Bandara", role: "Lead Skin Therapist" },
  { src: "/images/amaya.jpg", name: "Amaya Jayasuriya", role: "Bridal Atelier Lead" },
];

const SPACE = [
  { src: "/images/salon1.jpg", alt: "Styling chair at Amarante", tall: true },
  { src: "/images/salon2.jpg", alt: "Reception at Amarante" },
  { src: "/images/salon3.jpg", alt: "Skin treatment room", tall: true },
  { src: "/images/salon4.jpg", alt: "Colour bar at Amarante" },
];

const VALUES = [
  { title: "Time, not turnover", desc: "We book fewer appointments per day than most studios our size, deliberately." },
  { title: "Honest recommendations", desc: "If a treatment won't help your hair or skin, we'll tell you before we sell you." },
  { title: "Continuous training", desc: "Every stylist and therapist trains at least twice a year, on our time, at our cost." },
];

export default function AtelierPage() {
  return (
    <>
      <PageHero
        crumb="Atelier"
        eyebrow="Our story"
        title="Eleven years of doing it properly."
        lede="Amarante opened in 2014 as a three-chair studio on Horton Place. It's grown into Colombo's home for considered hair and skin work — but the pace hasn't changed."
      />

      {/* Founder */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="font-display text-2xl italic leading-snug md:text-3xl">
              &ldquo;I trained in London and Seoul and kept coming back to the same complaint: salons rush the part that actually matters — listening. Amarante was built to fix that, one appointment at a time.&rdquo;
            </p>
            <cite className="mt-6 block font-body text-sm not-italic text-inksoft">Nadia Fernando, Founder &amp; Creative Director</cite>
          </Reveal>
          <Reveal variant="scale" className="relative aspect-[3/3.6]">
            <Photo src="/images/atelier.jpg" alt="Nadia Fernando, founder of Amarante" className="h-full w-full" />
          </Reveal>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-paper2 px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-container">
          <Reveal className="mb-12 md:mb-16">
            <p className="tag">How a ritual works</p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,4rem)]">Four steps, every time.</h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t) => (
              <StaggerItem key={t.num} className="border-t-2 border-gold pt-6">
                <span className="mb-3 block font-display text-lg italic text-gold">{t.num}</span>
                <h4 className="mb-2 font-display text-lg">{t.title}</h4>
                <p className="text-sm text-inksoft">{t.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <Reveal>
              <p className="tag">The people</p>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,4rem)]">Meet the stylists.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[42ch] text-lg text-inksoft">
                Nine specialists across colour, cutting, texture, skin and bridal work — most trained internationally before joining Amarante.
              </p>
            </Reveal>
          </div>
          <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-7">
            {TEAM.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative mb-4 aspect-[3/3.8]">
                  <Photo src={t.src} alt={t.name} hover className="h-full w-full" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <h4 className="font-display text-lg">{t.name}</h4>
                <span className="text-sm text-gold">{t.role}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Space */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <Reveal>
            <p className="tag">The space</p>
            <h2 className="mb-8 mt-4 font-display text-2xl md:text-3xl">A studio, not a showroom.</h2>
          </Reveal>
        </div>
        <HScroll items={SPACE} />
      </section>

      {/* Values */}
      <section className="bg-ink px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="tag text-goldlight">What we hold to</p>
            <h2 className="mb-12 mt-5 font-display text-[clamp(2.2rem,4.6vw,4rem)] text-paper md:mb-16">
              Three things we won&apos;t compromise on.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-px border border-paper/15 bg-paper/15 md:grid-cols-3">
            {VALUES.map((v) => (
              <StaggerItem key={v.title} className="bg-ink p-8 transition-colors duration-500 hover:bg-bordeauxdeep">
                <h4 className="mb-3 font-display text-xl text-paper">{v.title}</h4>
                <p className="text-sm text-paper/70">{v.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-container">
          <CtaBand heading="Come see the studio for yourself." cta="Book your first visit" />
        </div>
      </section>
    </>
  );
}
