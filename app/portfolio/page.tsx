import Layout from "@/components/layout/Layout";
import PortfolioPage from "@/components/pages/PortfolioPage";

export const metadata = {
  title: "Portfolio | WMSols",
  description:
    "A curated collection of full-stack projects demonstrating technical expertise and creative problem-solving.",
};

export default function Portfolio() {
  return (
    <Layout>
      <PortfolioPage />
    </Layout>
  );
}
