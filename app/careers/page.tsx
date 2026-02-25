import Layout from "@/components/layout/Layout";
import CareersPage from "@/components/pages/CareersPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join the WMSols family. Build innovative digital products with us.",
  path: "/careers",
});

export default function Careers() {
  return (
    <Layout>
      <CareersPage />
    </Layout>
  );
}
