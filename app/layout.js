import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";
import PageLoader from "@/components/PageLoader";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Amarante — Hair, skin & the rituals in between",
  description:
    "Amarante is a Colombo studio for hair, skin and considered beauty rituals — cut, colour, texture and bridal, practiced by hand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-paper font-body text-ink antialiased">
        <PageLoader />
        <CursorDot />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
