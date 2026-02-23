import Layout from "@/components/layout/Layout";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata = {
  title: "Our Services | WMSols",
  description:
    "From concept to deployment, we provide end-to-end services to help your business thrive in the digital landscape.",
};

export default function Services() {
  return (
    <Layout>
      <ServicesPage />
    </Layout>
  );
}
