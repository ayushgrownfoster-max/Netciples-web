import HomePageView from '@/sections/home-page';

import { CONFIG } from 'src/global-config';


// ----------------------------------------------------------------------
export const metadata = { title: `Home - ${CONFIG.appName}` };

export default function Page() {

  return <HomePageView />;
}
