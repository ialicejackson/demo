import fs from "fs";
import path from "path";

const BASE_URL = "https://getadvisor.vercel.app";

function getAllPages() {
  const pagesDir = path.join(process.cwd(), "pages");

  const urls = [];

  function walkDirectory(currentDir, routePrefix = "") {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDirectory(fullPath, `${routePrefix}/${file}`);
        return;
      }

      if (!file.endsWith(".js")) return;

      // Next.js internal / non-page files
      if (
        file.startsWith("_") ||
        file === "sitemap.xml.js" ||
        file === "404.js" ||
        file === "500.js"
      ) {
        return;
      }

      let route = `${routePrefix}/${file.replace(".js", "")}`;

      // index.js => folder root
      if (file === "index.js") {
        route = routePrefix || "/";
      }

      // Make sure route starts with /
      if (!route.startsWith("/")) {
        route = `/${route}`;
      }

      // Remove accidental double slashes
      route = route.replace(/\/+/g, "/");

      urls.push(route);
    });
  }

  walkDirectory(pagesDir);

  return urls;
}

function generateSiteMap() {
  const pages = getAllPages();

  const urls = pages
    .map((page) => {
      const finalUrl =
        page === "/"
          ? `${BASE_URL}/`
          : `${BASE_URL}${page}`;

      const priority = page === "/" ? "1.0" : "0.8";

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
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}