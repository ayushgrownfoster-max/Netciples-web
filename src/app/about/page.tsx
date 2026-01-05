import { CONFIG } from '@/global-config';
import AboutUsSection from '@/sections/about-page';

export const metadata = { title: `About - ${CONFIG.appName}` };

export default function PortfolioPage() {
  return <AboutUsSection />;
}
