import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
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
    url: absoluteUrl(route || "/"),
  }));
}
