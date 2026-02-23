import Layout from "@/components/layout/Layout";
import ContactPage from "@/components/pages/ContactPage";

export const metadata = {
  title: "Contact Us | WMSols",
  description:
    "Have a project in mind or just want to say hello? We'd love to hear from you.",
};

export default function Contact() {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
}
