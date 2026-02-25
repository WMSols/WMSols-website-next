import Layout from "@/components/layout/Layout";
import CaseStudyDetailPage from "@/components/pages/CaseStudyDetailPage";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { getCaseStudyBySlug } = await import("@/data/caseStudies");
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) {
    return { title: "Case Study | WMSols" };
  }
  return pageMetadata({
    title: caseStudy.title,
    description: caseStudy.shortDescription,
    path: `/case-studies/${slug}`,
    imageUrl: caseStudy.heroImage.startsWith("http")
      ? caseStudy.heroImage
      : undefined,
  });
}

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;
  return (
    <Layout>
      <CaseStudyDetailPage slug={slug} />
    </Layout>
  );
}
