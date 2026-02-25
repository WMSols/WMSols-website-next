import Layout from "@/components/layout/Layout";
import CaseStudiesPage from "@/components/pages/CaseStudiesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Real products. Real impact. Built and delivered by WMSols.",
  path: "/case-studies",
});

export default function CaseStudies() {
  return (
    <Layout>
      <CaseStudiesPage />
    </Layout>
  );
}
