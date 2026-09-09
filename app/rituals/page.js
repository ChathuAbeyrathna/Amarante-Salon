import PageHero from "@/components/PageHero";
import RitualsMenu from "@/components/RitualsMenu";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Rituals & Pricing — Amarante",
  description: "The full Amarante ritual menu: hair, skin, bridal and scalp treatments with duration and pricing.",
};

export default function RitualsPage() {
  return (
    <>
      <PageHero
        crumb="Rituals"
        eyebrow="The full menu"
        title="Rituals & pricing"
        maxWidth="14ch"
        lede="Every price includes consultation. Durations are a guide — we'd rather run fifteen minutes long than rush the last part of your appointment."
      />

      <section className="px-6 pb-20 md:px-12 md:pb-32">
        <div className="mx-auto max-w-container">
          <RitualsMenu />
          <CtaBand heading="Not sure which ritual is right for you?" cta="Book a consultation" />
        </div>
      </section>
    </>
  );
}
