"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="bg-ink pt-16 text-paper/80 md:pt-24">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-paper/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-2xl text-paper">
              Amarante<em className="not-italic text-bordeaux italic">.</em>
            </Link>
            <p className="mt-5 max-w-[32ch] text-sm text-paper/65">
              A studio for hair, skin and the rituals in between. Colombo&apos;s
              quiet corner for considered beauty.
            </p>
            <div className="mt-6 flex gap-4">
              {["IG", "FB", "TT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-xs transition-colors hover:border-goldlight hover:bg-paper/5"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-paper">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/rituals" className="hover:text-goldlight">Rituals menu</Link></li>
              <li><Link href="/atelier" className="hover:text-goldlight">The atelier</Link></li>
              <li><Link href="/gallery" className="hover:text-goldlight">Gallery</Link></li>
              <li><Link href="/booking" className="hover:text-goldlight">Book a visit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-paper">Studio</h4>
            <ul className="space-y-2.5 text-sm">
              <li>24 Horton Place</li>
              <li>Colombo 07, Sri Lanka</li>
              <li>hello@amarante.studio</li>
              <li>+94 11 234 5678</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-paper">Stay in the loop</h4>
            <p className="text-sm text-paper/65">
              Seasonal edits, colour trends, and first access to new rituals.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
              className="mt-4 flex items-end gap-2 border-b border-paper/35 pb-2"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent py-1 text-sm placeholder:text-paper/40 focus:outline-none"
              />
              <button type="submit" className="text-sm font-bold text-goldlight">
                {joined ? "Subscribed ✓" : "Join"}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 py-6 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} Amarante Studio. All rights reserved.</span>
          <span>Crafted for the salon &amp; beauty culture assessment.</span>
        </div>
      </div>
    </footer>
  );
}
