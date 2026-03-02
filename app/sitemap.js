export const dynamic = "force-static";

export default function sitemap() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://eliteglobalschools.com";

  const routes = [
    "",
    "/about",
    "/admission",
    "/contact",
    "/gallery",
    "/news-events",
    "/sports-academy",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
