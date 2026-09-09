import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Booking — Amarante",
  description: "Reserve a ritual at Amarante — hair, skin, scalp and bridal appointments in Colombo 07.",
};

const HOURS = [
  ["Monday", "Closed"],
  ["Tuesday – Friday", "9:00 – 19:00"],
  ["Saturday", "9:00 – 20:00"],
  ["Sunday", "10:00 – 17:00"],
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        crumb="Booking"
        eyebrow="Reserve a ritual"
        title="Let's find you a chair."
        lede="Tell us what you're after and we'll confirm a time within one business day. For same-day requests, call the studio directly."
      />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-container items-start gap-12 md:grid-cols-[1.15fr_.85fr] md:gap-16">
          <Reveal>
            <BookingForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-ink p-8 text-paper md:p-10">
              <h3 className="mb-6 font-display text-2xl">Visit the studio</h3>

              <div className="border-t border-paper/10 py-4 first:border-t-0 first:pt-0">
                <strong className="mb-1 block text-sm text-goldlight">Address</strong>
                <span className="text-sm text-paper/75">24 Horton Place, Colombo 07, Sri Lanka</span>
              </div>
              <div className="border-t border-paper/10 py-4">
                <strong className="mb-1 block text-sm text-goldlight">Phone</strong>
                <span className="text-sm text-paper/75">+94 11 234 5678</span>
              </div>
              <div className="border-t border-paper/10 py-4">
                <strong className="mb-1 block text-sm text-goldlight">Email</strong>
                <span className="text-sm text-paper/75">hello@amarante.studio</span>
              </div>

              <div className="border-t border-paper/10 pt-5">
                <strong className="mb-2 block text-sm text-goldlight">Studio hours</strong>
                <table className="w-full">
                  <tbody>
                    {HOURS.map(([day, time]) => (
                      <tr key={day} className="border-t border-paper/10">
                        <td className="py-2 text-sm text-paper/80">{day}</td>
                        <td className="py-2 text-right text-sm text-goldlight">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative mt-6 aspect-[16/11] rounded-[2px_60px_2px_2px]">
              <Photo src="/images/booking.jpg" alt="Amarante studio storefront on Horton Place" className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper2 px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <p className="tag">Before you book</p>
            <h2 className="mb-10 mt-5 font-display text-[clamp(2.2rem,4.6vw,4rem)] md:mb-14">A few common questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq />
          </Reveal>
        </div>
      </section>
    </>
  );
}
