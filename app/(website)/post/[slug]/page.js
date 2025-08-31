import PostPage from "./default";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";
export const revalidate = 60;

// Commented out to avoid build-time Sanity fetching issues
// export async function generateStaticParams() {
//   return await getAllPostsSlugs();
// }

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}
