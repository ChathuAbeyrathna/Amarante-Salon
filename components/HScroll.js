import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

export default function HScroll({ items }) {
  return (
    <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:-mx-12 md:px-12">
      {items.map((item, i) => (
        <Reveal
          key={i}
          delay={i * 0.05}
          className={`shrink-0 snap-start ${
            item.tall ? "w-[min(60vw,300px)]" : "w-[min(78vw,340px)]"
          } aspect-[3/4]`}
        >
          <Photo src={item.src} alt={item.alt} hover className="h-full w-full" sizes="340px" />
        </Reveal>
      ))}
    </div>
  );
}
