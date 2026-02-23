import Layout from "@/components/layout/Layout";
import CareersPage from "@/components/pages/CareersPage";

export const metadata = {
  title: "Careers | WMSols",
  description:
    "Join the WMSols family. Build innovative digital products with us.",
};

export default function Careers() {
  return (
    <Layout>
      <CareersPage />
    </Layout>
  );
}
