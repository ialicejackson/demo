import fs from "fs";
import path from "path";

const BASE_URL = "https://getadvisior.vercel.app";

function getAllPages() {
  const pagesDir = path.join(process.cwd(), "pages");
  const routes = [];

  function scanFolder(folderPath, routePrefix = "") {
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      const fullPath = path.join(folderPath, file);
      const stat = fs.statSync(fullPath);

      // If folder, scan inside it
      if (stat.isDirectory()) {
        scanFolder(fullPath, `${routePrefix}/${file}`);
        return;
      }

      // Only include Next.js page files
      if (!file.endsWith(".js")) {
        return;
      }

      // Don't include Next.js internal/system pages
      if (
        file.startsWith("_") ||
        file === "sitemap.xml.js" ||
        file === "404.js" ||
        file === "500.js"
      ) {
        return;
      }

      // Don't include dynamic route files like [slug].js
      if (file.includes("[") || file.includes("]")) {
        return;
      }

      let route;

      // index.js becomes folder root
      if (file === "index.js") {
        route = routePrefix || "/";
      } else {
        const pageName = file.replace(/\.js$/, "");
        route = `${routePrefix}/${pageName}`;
      }

      // Make sure route starts with one slash
      if (!route.startsWith("/")) {
        route = `/${route}`;
      }

      // Remove accidental duplicate slashes
      route = route.replace(/\/+/g, "/");

      // Remove trailing slash here
      // We add it consistently when generating XML
      if (route !== "/") {
        route = route.replace(/\/$/, "");
      }

      routes.push(route);
    });
  }

  scanFolder(pagesDir);

  // Remove duplicate routes
  return [...new Set(routes)].sort();
}

function generateSiteMap() {
  const pages = getAllPages();

  const urls = pages
    .map((page) => {
      const finalUrl =
        page === "/"
          ? `${BASE_URL}/`
          : `${BASE_URL}${page}/`;

      let priority = "0.8";

      if (page === "/") {
        priority = "1.0";
      } else if (
        page === "/blog" ||
        page === "/jetblue" ||
        page === "/expedia" ||
        page === "/delta"
      ) {
        priority = "0.9";
      }

      return `
  <url>
    <loc>${finalUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
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
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}