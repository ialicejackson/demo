/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://getadvisior.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.8,
  trailingSlash: true,

  // Saare URLs direct sitemap.xml me
  generateIndexSitemap: false,
};