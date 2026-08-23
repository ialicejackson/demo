const EXTERNAL_DATA_URL = "https://getadvisior.vercel.app/";

function generateSiteMap() {
  const pages = [
    "",
    "/about",
    "/Asiana-Airlines-Contact",
    "/expedia-reviews",
    "/How-Do-I-Reach-Amtrak-Customer-Service",
    "/JetBlue-Customer-Service-for-International-Flights",
    "/JetBlue-Delayed-Flight",
    "/JetBlue-Same-Day-Flight-Change",
    "/royal-caribbean-Customer-Service",
    "/ways-to-get-allegiant-air-to-respond-quickly",

    // BLOG PAGES
    "/blog/How-to-Reach-JetBlue-Immediately",
    "/blog/Ways-to-Reach-Expedia",
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    return `
  <url>
    <loc>${EXTERNAL_DATA_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}