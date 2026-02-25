import Layout from "@/components/layout/Layout";
import ServicesPage from "@/components/pages/ServicesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Services",
  description:
    "From concept to deployment, we provide end-to-end services to help your business thrive in the digital landscape.",
  path: "/services",
});

export default function Services() {
  return (
    <Layout>
      <ServicesPage />
    </Layout>
  );
}
