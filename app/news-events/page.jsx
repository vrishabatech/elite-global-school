import MainHero from "@/components/MainHero";
import NewsEventsSection from "@/components/sections/NewsEventsSection";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "News & Events | Elite Global School ",
  description: "A place where every learner is meant to be a star",
  alternates: {
    canonical: "/news-events",
  },
};

export default function NewsAndEventsPage() {
  return (
    <>
      <MainHero
        title="News & Events"
        imageDesktop="/banner/news-banner.png"
        imageMobile="/banner/news-banner-mob.png"
      />
      <NewsEventsSection />
    </>
  );
}
