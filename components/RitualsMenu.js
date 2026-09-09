"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const FILTERS = [
  { key: "all", label: "All rituals" },
  { key: "hair", label: "Hair" },
  { key: "scalp", label: "Scalp" },
  { key: "skin", label: "Skin" },
  { key: "bridal", label: "Bridal" },
  { key: "addon", label: "Add-ons" },
];

const CATEGORIES = [
  {
    key: "hair",
    title: "Hair",
    subtitle: "Cut, colour & texture",
    items: [
      { name: "Signature Cut", desc: "Consultation, precision cut and finish styling with one of our senior stylists.", dur: "50 min", price: "LKR 8,500" },
      { name: "Balayage & Gloss", desc: "Hand-painted, low-maintenance colour with a tone-matched gloss finish.", dur: "3 hr 15 min", price: "LKR 24,000" },
      { name: "Full Colour Transformation", desc: "Root-to-tip colour correction or a complete change, spread across two visits when needed.", dur: "4 hr+", price: "From LKR 32,000" },
      { name: "Curl Definition Treatment", desc: "A cut and styling system built specifically for wavy, curly and coily textures.", dur: "1 hr 30 min", price: "LKR 12,000" },
      { name: "Keratin Smoothing", desc: "A frizz-reducing treatment that softens texture without erasing natural movement.", dur: "2 hr 30 min", price: "LKR 18,500" },
    ],
  },
  {
    key: "scalp",
    title: "Scalp therapy",
    subtitle: "Diagnostic treatments",
    items: [
      { name: "Scalp Diagnostic & Reset", desc: "Microscope analysis followed by a targeted exfoliation and cold-pressed serum treatment.", dur: "45 min", price: "LKR 5,500" },
      { name: "Density Recovery Course", desc: "A four-session course addressing thinning, using derma-stamping and active tonics.", dur: "4 x 40 min", price: "LKR 21,000" },
    ],
  },
  {
    key: "skin",
    title: "Skin",
    subtitle: "Facials & clinical care",
    items: [
      { name: "The Considered Facial", desc: "A double-cleanse, enzyme exfoliation and mask facial tailored to your skin on the day.", dur: "1 hr", price: "LKR 6,000" },
      { name: "Brightening Ritual", desc: "Vitamin C infusion with LED therapy to even tone and fade pigmentation over time.", dur: "1 hr 15 min", price: "LKR 9,500" },
      { name: "Clinical Renewal Peel", desc: "A supervised chemical peel for texture, congestion and fine lines, with aftercare included.", dur: "50 min", price: "LKR 13,000" },
    ],
  },
  {
    key: "bridal",
    title: "Bridal atelier",
    subtitle: "Trials & day-of styling",
    items: [
      { name: "Bridal Trial", desc: "A full run-through of hair and makeup, photographed for reference before the big day.", dur: "2 hr", price: "LKR 15,000" },
      { name: "Bridal Day-Of Styling", desc: "On-site or in-studio styling for the bride, with a dedicated timeline coordinator.", dur: "3 hr", price: "LKR 45,000" },
      { name: "Bridal Party Styling", desc: "Per-person hair and makeup for bridesmaids and family, booked alongside the bride.", dur: "1 hr each", price: "From LKR 9,000" },
    ],
  },
  {
    key: "addon",
    title: "Add-ons",
    subtitle: "To extend any ritual",
    items: [
      { name: "Scalp Massage Add-On", desc: "Ten minutes of pressure-point massage, added to any hair or scalp service.", dur: "10 min", price: "LKR 1,500" },
      { name: "Gloss Refresh", desc: "A tone-refreshing gloss added onto any cut or styling appointment.", dur: "15 min", price: "LKR 3,000" },
    ],
  },
];

export default function RitualsMenu() {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-3 md:mb-16">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ease-smooth ${
              filter === f.key
                ? "border-ink bg-ink text-paper"
                : "border-ink/20 text-inksoft hover:border-ink hover:bg-ink hover:text-paper"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {CATEGORIES.filter((c) => filter === "all" || filter === c.key).map((cat) => (
        <div key={cat.key} className="mb-14 md:mb-20">
          <Reveal className="mb-6 flex items-baseline gap-4">
            <h2 className="font-display text-2xl md:text-3xl">{cat.title}</h2>
            <span className="text-sm text-inksoft">{cat.subtitle}</span>
          </Reveal>
          <Reveal>
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-1 gap-2 border-b border-ink/15 py-6 transition-all duration-500 ease-smooth hover:bg-gold/[0.08] hover:pl-4 sm:grid-cols-[1fr_auto] sm:gap-8"
              >
                <div>
                  <p className="font-display text-xl">{item.name}</p>
                  <p className="mt-1 max-w-[46ch] text-sm text-inksoft">{item.desc}</p>
                  <span className="mt-2 block text-xs lowercase text-gold">{item.dur}</span>
                </div>
                <p className="self-start whitespace-nowrap font-display text-xl text-bordeaux sm:text-2xl">
                  {item.price}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      ))}
    </div>
  );
}
