import { CONFIG } from "@/global-config";
import ServiceSection from "@/sections/service-page";

export const metadata = { title: `Services - ${CONFIG.appName}` };

export default function ServicePage() {
  return <ServiceSection />;
}
