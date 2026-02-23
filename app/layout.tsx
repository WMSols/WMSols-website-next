import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "WMSols | Digital Solutions That Matter",
  description:
    "WMSols is a modern technology agency crafting innovative digital solutions. We specialize in web development, mobile apps, cloud solutions, and UI/UX design.",
  authors: [{ name: "WMSols" }],
  keywords: [
    "web development",
    "mobile development",
    "cloud solutions",
    "UI/UX design",
    "MERN stack",
    "full stack development",
    "software agency",
  ],
  openGraph: {
    title: "WMSols | Digital Solutions That Matter",
    description:
      "We build digital experiences that empower businesses to thrive. From concept to deployment, we craft innovative software solutions.",
    type: "website",
    url: "https://wmsols.com",
    siteName: "WMSols",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wmsols",
    title: "WMSols | Digital Solutions That Matter",
    description: "We build digital experiences that empower businesses to thrive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://wmsols.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <GoogleAnalytics />
        <Toaster />
        <Sonner />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
