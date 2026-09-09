"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  { q: "How far in advance should I book?", a: "For colour and bridal services, two to three weeks is ideal, especially on weekends. Cuts and skin rituals can often be booked within a few days." },
  { q: "What's your cancellation policy?", a: "We ask for 24 hours' notice to cancel or reschedule. Late cancellations may be charged 50% of the service price to cover the stylist's held time." },
  { q: "Do you offer consultations before a colour service?", a: "Yes — every colour appointment starts with a consultation, and we offer free 15-minute standalone consultations for anyone unsure what to book." },
  { q: "Is parking available at the studio?", a: "There's metered street parking on Horton Place and a small validated lot behind the building, entrance on Alfred Place." },
  { q: "Can I bring reference photos?", a: "Please do — reference photos help your stylist calibrate expectations before starting, especially for colour work." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {FAQS.map((item, i) => (
        <div key={item.q} className="border-b border-ink/15">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-lg"
          >
            <span>{item.q}</span>
            <span
              className={`shrink-0 text-2xl text-gold transition-transform duration-500 ease-smooth ${
                open === i ? "rotate-[135deg] text-bordeaux" : ""
              }`}
            >
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-[62ch] pb-6 text-inksoft">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
