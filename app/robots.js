export const dynamic = "force-static";

export default function robots() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://eliteglobalschools.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
