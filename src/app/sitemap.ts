export default function sitemap() {
  const routes = [
    "",
    "/ai-deployment",
    "/technology-advisory",
    "/apple-first-consulting",
    "/industries",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://zapatalogic.com${route}`,
    lastModified: new Date(),
  }));
}
