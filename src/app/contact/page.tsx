import { CONFIG } from "@/global-config";
import ContactPage from "@/sections/contact-page";

export const metadata = { title: `Contact Us - ${CONFIG.appName}` };

export default function ContactInfoPage() {
  return <ContactPage />;
}
