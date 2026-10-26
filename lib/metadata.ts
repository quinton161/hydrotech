import type { Metadata } from "next";
import { site } from "@/lib/site";
export function pageMetadata(page: Metadata): Metadata {
  const title = typeof page.title === "string" ? `${page.title} | ${site.name}` : site.name;
  const description = page.description || site.description;
  const canonical = page.alternates?.canonical;
  const url = typeof canonical === "string" || canonical instanceof URL ? canonical : site.url;
  return { ...page, openGraph: { type: "website", title, description, url, siteName: site.name, images: [{url:"/images/about-borehole.webp",alt:"Borehole drilling equipment"}] }, twitter: { card: "summary_large_image", title, description, images: ["/images/about-borehole.webp"] } };
}
