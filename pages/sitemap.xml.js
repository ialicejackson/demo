const BASE_URL = "https://getadvisior.vercel.app";

const pages = [
  "/",
  "/about",
  "/Asiana-Airlines-Contact",
  "/expedia-reviews",
  "/How-Do-I-Reach-Amtrak-Customer-Service",
  "/JetBlue-Customer-Service-for-International-Flights",
  "/JetBlue-Delayed-Flight",
  "/JetBlue-Same-Day-Flight-Change",
  "/royal-caribbean-Customer-Service",
  "/ways-to-get-allegiant-air-to-respond-quickly",

  "/blog/Airlines-phone-Numbers",
  "/blog/delta-airlines-name-change",
  "/blog/delta-airlines-rebooking-guide",
  "/blog/delta-flight-cancellation-refund",
  "/blog/delta-legal-name-change",
  "/blog/delta-missed-flight",
  "/blog/delta-reservation-help",
  "/blog/delta-same-day-flight-change",
  "/blog/expedia-customer-service",
  "/blog/expedia-missed-flight",
  "/blog/How-to-Cancel-a-JetBlue-Flight",
  "/blog/how-to-cancel-Expedia-booking",
  "/blog/How-to-Change-a-JetBlue-Flight",
  "/blog/How-to-Change-an-Expedia-Flight",
  "/blog/how-to-change-my-delta-flight",
  "/blog/How-to-Contact-Expedia",
  "/blog/How-to-get-Allegiant-Air-to-respond-quickly",
  "/blog/How-to-Reach-JetBlue-Immediately",
  "/blog/Ways-to-Reach-Expedia",
];

function generateSiteMap() {
  const urls = pages
    .map((page) => {
      const finalUrl =
        page === "/"
          ? `${BASE_URL}/`
          : `${BASE_URL}${page}/`;

      return `
  <url>
    <loc>${finalUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
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