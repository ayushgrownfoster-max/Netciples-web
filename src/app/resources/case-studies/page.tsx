import { CONFIG } from "@/global-config";
import CaseStudiesSection from "@/sections/case-studies-page";

export const metadata = { title: `Case Studies - ${CONFIG.appName}` };


export default function CaseStudiesPage() {
  return <CaseStudiesSection />;
}
