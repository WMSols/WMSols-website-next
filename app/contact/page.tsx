import Layout from "@/components/layout/Layout";
import ContactPage from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Have a project in mind or just want to say hello? We'd love to hear from you.",
  path: "/contact",
});

export default function Contact() {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
}
