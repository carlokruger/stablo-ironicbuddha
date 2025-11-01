import PostPage from "./default";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";
export const revalidate = 60;

// Commented out to avoid build-time Sanity fetching issues
// export async function generateStaticParams() {
//   return await getAllPostsSlugs();
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return <PostPage post={post} />;
}
