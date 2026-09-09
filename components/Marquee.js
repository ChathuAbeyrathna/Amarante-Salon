const ITEMS = ["Cut & Colour", "Skin Rituals", "Bridal Atelier", "Scalp Therapy", "Texture & Curl"];

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden whitespace-nowrap border-y border-gold/35 bg-ink py-4"
    >
      <div className="inline-flex animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 px-8 font-display text-lg italic text-goldlight md:text-2xl"
          >
            {item}
            <span className="flex h-[1.6em] w-[1.6em] items-center justify-center rounded-full bg-goldlight text-sm not-italic text-bordeauxdeep">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
