import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";
import {
  defaultSeo,
  SITE_URL,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultSeo.title,
    template: defaultSeo.titleTemplate,
  },
  description: defaultSeo.description,
  authors: [{ name: "WMSols", url: SITE_URL }],
  creator: "WMSols",
  publisher: "WMSols",
  keywords: defaultSeo.keywords,
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: defaultSeo.title,
    description:
      "We build digital experiences that empower businesses to thrive. From concept to deployment, we craft innovative software solutions.",
    type: defaultSeo.openGraph.type,
    url: SITE_URL,
    siteName: defaultSeo.openGraph.siteName,
    locale: defaultSeo.openGraph.locale,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WMSols – Digital Solutions That Matter",
      },
    ],
  },
  twitter: {
    card: defaultSeo.twitter.card,
    site: defaultSeo.twitter.site,
    title: defaultSeo.title,
    description:
      "We build digital experiences that empower businesses to thrive.",
    images: ["/og-image.png"],
  },
  robots: defaultSeo.robots,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // Add your verification tokens when you have them (Google Search Console, etc.)
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = getOrganizationJsonLd();
  const websiteJsonLd = getWebSiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className={`antialiased ${sora.variable} ${inter.variable}`} suppressHydrationWarning>
        <GoogleAnalytics />
        <Toaster />
        <Sonner />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
