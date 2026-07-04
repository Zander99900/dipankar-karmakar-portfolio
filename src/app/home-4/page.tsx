import type { Metadata } from "next";
import HomeFour from "@/components/home-four";
import { heroContent, siteConfig } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Full Stack Developer`,
  description: heroContent.subheadline,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/home-4",
  },
  openGraph: {
    title: `${siteConfig.name} | Full Stack Developer`,
    description: heroContent.subheadline,
    url: `${siteConfig.url}/home-4`,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full Stack Developer`,
    description: heroContent.subheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeFourPage() {
  return <HomeFour />;
}
