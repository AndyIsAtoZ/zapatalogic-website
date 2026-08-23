import type { Metadata } from "next";

export const siteConfig = {
  name: "ZapataLogic",
  url: "https://zapatalogic.com",
  title: "Fractional CTO and Technology Leadership for Growing Businesses",
  description:
    "ZapataLogic provides fractional CTO leadership across infrastructure, providers, endpoints, security, cloud platforms, and practical AI for growing businesses.",
  ogImage: "/icon.png",
  email: "info@zapatalogic.com",
  founder: "Andy Zapata",
  location: "Dallas-Fort Worth, Texas",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 491,
          height: 400,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.ogImage),
    image: absoluteUrl(siteConfig.ogImage),
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    areaServed: {
      "@type": "Place",
      name: siteConfig.location,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas-Fort Worth",
      addressRegion: "TX",
      addressCountry: "US",
    },
    description: siteConfig.description,
    serviceType: [
      "Fractional CTO leadership",
      "Apple-focused consulting",
      "Infrastructure and provider guidance",
      "AI implementation",
    ],
  };
}
