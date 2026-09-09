"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inputClass =
  "w-full border-0 border-b border-ink/25 bg-transparent py-3 font-body text-base text-ink transition-colors duration-300 ease-smooth focus:border-bordeaux focus:outline-none";
const labelClass = "mb-2 block text-sm font-bold text-inksoft";

const RITUALS = [
  "Signature Cut",
  "Balayage & Gloss",
  "Full Colour Transformation",
  "Curl Definition Treatment",
  "Scalp Diagnostic & Reset",
  "The Considered Facial",
  "Clinical Renewal Peel",
  "Bridal Trial",
  "Not sure yet — advise me",
];
const STYLISTS = ["Nadia Fernando", "Kavindu Silva", "Tharushi Bandara", "Amaya Jayasuriya"];
const TIMES = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form
          key="form"
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="bk-name">Full name</label>
              <input
                id="bk-name"
                required
                className={inputClass}
                placeholder="Amara Perera"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="bk-phone">Phone number</label>
              <input id="bk-phone" type="tel" required className={inputClass} placeholder="+94 77 123 4567" />
            </div>
          </div>

          <div className="mt-6">
            <label className={labelClass} htmlFor="bk-email">Email address</label>
            <input id="bk-email" type="email" required className={inputClass} placeholder="you@email.com" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="bk-ritual">Ritual</label>
              <select id="bk-ritual" required className={inputClass} defaultValue="">
                <option value="" disabled>Select a ritual</option>
                {RITUALS.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="bk-stylist">Preferred stylist</label>
              <select id="bk-stylist" className={inputClass} defaultValue="">
                <option value="">No preference</option>
                {STYLISTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="bk-date">Preferred date</label>
              <input id="bk-date" type="date" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="bk-time">Preferred time</label>
              <select id="bk-time" required className={inputClass} defaultValue="">
                <option value="" disabled>Select a time</option>
                {TIMES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className={labelClass} htmlFor="bk-notes">Anything we should know?</label>
            <textarea id="bk-notes" rows={3} className={`${inputClass} resize-y`} placeholder="Allergies, reference photos, past colour history…" />
          </div>

          <button type="submit" disabled={sending} className="btn btn-primary mt-8 w-full disabled:opacity-70">
            {sending ? "Sending…" : "Request appointment"}
          </button>
          <p className="mt-4 text-sm text-inksoft">
            We&apos;ll confirm by phone or email — this form doesn&apos;t guarantee an exact slot until we reply.
          </p>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="py-14 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-bordeaux text-2xl text-bordeaux">
            ✓
          </div>
          <h3 className="font-display text-2xl md:text-3xl">
            Thank you, {name ? name.split(" ")[0] : "there"}.
          </h3>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg leading-relaxed text-inksoft">
            Your request has been sent. Someone from the studio will confirm your appointment within one business day.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
