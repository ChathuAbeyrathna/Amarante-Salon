import Image from "next/image";

/**
 * Full-color photo wrapper with a subtle hover-zoom. `hover` enables
 * the slow zoom-on-hover effect used across cards and gallery items.
 */
export default function Photo({ src, alt, className = "", hover = false, sizes = "50vw", priority = false }) {
  return (
    <div className={`photo ${hover ? "photo-hover" : ""} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
