import Layout from "@/components/layout/Layout";
import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
  title: "About Us | WMSols",
  description:
    "We're a team of passionate technologists, designers, and strategists dedicated to crafting digital solutions that make a real difference.",
};

export default function About() {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}
