/**
 * Central SEO configuration and utilities for WMSols.
 * Used by layout, sitemap, robots, and page-level metadata.
 */

import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wmsols.com";

export const defaultSeo = {
  title: "WMSols | Digital Solutions That Matter",
  titleTemplate: "%s | WMSols",
  description:
    "WMSols is a modern technology agency crafting innovative digital solutions. We specialize in web development, mobile apps, cloud solutions, and UI/UX design.",
  keywords: [
    "web development",
    "mobile development",
    "cloud solutions",
    "UI/UX design",
    "MERN stack",
    "full stack development",
    "software agency",
    "digital solutions",
    "Flutter",
    "Next.js",
  ],
  openGraph: {
    type: "website" as const,
    siteName: "WMSols",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image" as const,
    site: "@wmsols",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

/** Build full URL for a path (no leading double slash). */
export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Generate page-level metadata with canonical URL and Open Graph.
 * Use for every public page so Google and social shares get correct URLs and descriptions.
 */
export function pageMetadata({
  title,
  description,
  path,
  imagePath = "/og-image.png",
  imageUrl: imageUrlOverride,
}: {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  /** Optional full URL for OG image (e.g. external hero image). */
  imageUrl?: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = imageUrlOverride ?? absoluteUrl(imagePath);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: defaultSeo.openGraph.siteName,
      type: defaultSeo.openGraph.type,
      locale: defaultSeo.openGraph.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: defaultSeo.twitter.card,
      site: defaultSeo.twitter.site,
      title,
      description,
      images: [imageUrl],
    },
  };
}

/** JSON-LD: Organization schema for rich results. */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WMSols",
    url: SITE_URL,
    logo: absoluteUrl("/og-image.png"),
    description: defaultSeo.description,
    sameAs: [
      "https://twitter.com/wmsols",
      "https://www.linkedin.com/company/wmsols",
      "https://github.com/wmtechdev",
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: absoluteUrl("/contact"),
      availableLanguage: "English",
    },
  };
}

/** JSON-LD: WebSite schema with search action (optional for sitelinks search box). */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WMSols",
    url: SITE_URL,
    description: defaultSeo.description,
    publisher: {
      "@type": "Organization",
      name: "WMSols",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/og-image.png"),
      },
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "ReadAction",
      target: SITE_URL,
    },
  };
}
