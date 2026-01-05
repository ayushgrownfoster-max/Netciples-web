import { CONFIG } from "@/global-config";
import BlogsSection from "@/sections/blog-page";

export const metadata = { title: `Blogs - ${CONFIG.appName}` };


export default function BlogsPage() {
  return <BlogsSection/>;
}
