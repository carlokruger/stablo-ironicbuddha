import { getSettings } from "@/lib/sanity/client";
import Manifesto from "./manifesto";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function ManifestoPage() {
  const settings = await getSettings();
  return <Manifesto settings={settings} />;
}