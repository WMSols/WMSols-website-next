import Layout from "@/components/layout/Layout";
import AboutPage from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "We're a team of passionate technologists, designers, and strategists dedicated to crafting digital solutions that make a real difference.",
  path: "/about",
});

export default function About() {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}
