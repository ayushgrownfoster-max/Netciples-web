import { CONFIG } from "@/global-config";
import CareerDetailsPage from "@/sections/career-page";

export const metadata = { title: `Career - ${CONFIG.appName}` };

export default function CareerPage() {
  return <CareerDetailsPage />;
}
