import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <About settings={settings} authors={authors} />;
}
