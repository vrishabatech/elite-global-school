import MainHero from "@/components/MainHero";

import EliteSportsAcademySection from "@/components/sections/sports-academy/EliteSportsAcademySection";
import FacilitiesSection from "@/components/sections/sports-academy/FacilitiesSection";
import PhilosophySection from "@/components/sections/sports-academy/PhilosophySection";
import StudentAthleteSuccessSection from "@/components/sections/sports-academy/StudentAthleteSuccessSection";
import WhyChooseSportsSection from "@/components/sections/sports-academy/WhyChooseSportsSection";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Sports Academy | Elite Global School ",
  description: "A place where every learner is meant to be a star",
  alternates: {
    canonical: "/sports-academy",
  },
};

export default function SportsAcademyPage() {
  return (
    <>
      <MainHero
        title="Sports Academy"
        imageDesktop="/banner/sports-banner.jpg"
        imageMobile="/banner/sports-banner-mob.jpg"
      />
      <PhilosophySection />
      <EliteSportsAcademySection />
      <FacilitiesSection />
      <WhyChooseSportsSection />
      <StudentAthleteSuccessSection />
    </>
  );
}
