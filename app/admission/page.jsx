import MainHero from "@/components/MainHero";
import FeeStructure from "@/components/sections/FeeStructure";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Admission | Elite Global School ",
  description: "A place where every learner is meant to be a star",
  alternates: {
    canonical: "/admission",
  },
};

export default function FeeStructurePage() {
  return (
    <>
      <MainHero
        title="Admission"
        imageDesktop="/banner/addmission-banner.webp"
        imageMobile="/banner/addmission-banner-mob.jpg"
      />
      <FeeStructure />
    </>
  );
}
