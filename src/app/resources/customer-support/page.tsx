import { CONFIG } from "@/global-config";
import SupportPage from "@/sections/support-page";

export const metadata = { title: `Support - ${CONFIG.appName}` };

export default function CustomerSupportPage() {
  return <SupportPage />;
}
