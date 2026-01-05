import { CONFIG } from "@/global-config";
import IndustrySection from "@/sections/industry-page";

export const metadata = { title: `Industries - ${CONFIG.appName}` };

export default function IndustryPage() {
  return <IndustrySection />;
}
