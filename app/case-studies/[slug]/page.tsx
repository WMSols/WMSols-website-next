import Layout from "@/components/layout/Layout";
import CaseStudyDetailPage from "@/components/pages/CaseStudyDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { getCaseStudyBySlug } = await import("@/data/caseStudies");
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) {
    return { title: "Case Study | WMSols" };
  }
  return {
    title: `${caseStudy.title} | WMSols`,
    description: caseStudy.shortDescription,
  };
}

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;
  return (
    <Layout>
      <CaseStudyDetailPage slug={slug} />
    </Layout>
  );
}
