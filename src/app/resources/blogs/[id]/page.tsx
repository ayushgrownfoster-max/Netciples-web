// import { CONFIG } from "@/global-config";
// import BlogIdDetailPage from "@/sections/blog-page/blog-id-section";

// export const metadata = { title: `Blogs - ${CONFIG.appName}` };

// export default function BlogsPage() {
//   return <BlogIdDetailPage/>;
// }


// import { blogs } from "@/data/blogs";
// import { CONFIG } from "@/global-config";
// import BlogIdDetailPage from "@/sections/blog-page/blog-id-section";

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const blogId = Number(params.id);
//   const blog = blogs.find((b) => b.id === blogId);

//   return {
//     title: blog
//       ? `${blog.title} - ${CONFIG.appName}`
//       : `Blogs - ${CONFIG.appName}`,
//   };
// }

// export default function BlogsPage() {
//   return <BlogIdDetailPage />;
// }


import { blogs } from "@/data/blogs";
import { CONFIG } from "@/global-config";
import BlogIdDetailPage from "@/sections/blog-page/blog-id-section";

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; //  MUST AWAIT params
  const blogId = Number(id);

  const blog = blogs.find((b) => b.id === blogId);

  return {
    title: blog
      ? `${blog.title} - ${CONFIG.appName}`
      : `Blogs - ${CONFIG.appName}`,
  };
}

export default function BlogsPage() {
  return <BlogIdDetailPage />;
}
