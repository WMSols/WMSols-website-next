import Layout from "@/components/layout/Layout";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "A curated collection of full-stack projects demonstrating technical expertise and creative problem-solving.",
  path: "/portfolio",
});

export default function Portfolio() {
  return (
    <Layout>
      <PortfolioPage />
    </Layout>
  );
}
