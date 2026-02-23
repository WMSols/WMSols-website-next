import Layout from "@/components/layout/Layout";
import CaseStudiesPage from "@/components/pages/CaseStudiesPage";

export const metadata = {
  title: "Case Studies | WMSols",
  description:
    "Real products. Real impact. Built and delivered by WMSols.",
};

export default function CaseStudies() {
  return (
    <Layout>
      <CaseStudiesPage />
    </Layout>
  );
}
