import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function IndexPage() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}
