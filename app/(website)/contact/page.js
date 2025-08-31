import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}
