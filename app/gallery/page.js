import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Gallery — Amarante",
  description: "Recent colour, cutting, bridal and skin work from the Amarante studio.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Recent work"
        title="From the chair."
        maxWidth="14ch"
        lede="A working record of what we make, updated as it happens. Tap any image for a closer look."
      />

      <section className="px-6 pb-20 md:px-12 md:pb-32">
        <div className="mx-auto max-w-container">
          <Gallery />
          <div className="mt-16 md:mt-20">
            <CtaBand heading="See something you'd like for yourself?" cta="Book this look" />
          </div>
        </div>
      </section>
    </>
  );
}
