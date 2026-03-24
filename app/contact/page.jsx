import MainHero from "@/components/MainHero";
import ContactSection from "@/components/sections/ContactSection";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Contact Us | Elite Global School ",
  description: "A place where every learner is meant to be a star",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <MainHero
        title="Contact US"
        imageDesktop="/banner/contact-banner.webp"
        imageMobile="/banner/contact-banner-mob.jpg"
      />
      <ContactSection />
    </>
  );
}
