import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { imageCredits } from "@/lib/image-credits";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Image Credits",
  description: "Photography sources and licences for Hydrotech Drilling's website.",
  alternates: { canonical: "/image-credits" },
});

export default function ImageCredits() {
  return <>
    <PageHero eyebrow="Photography" title="Image credits" description="Photography illustrating the equipment, processes and water systems discussed on this website." />
    <section className="section section-white"><div className="container">
      <div className="prose">
        <h2>Company website imagery</h2>
        <p>The logo, branded portrait and drilling-service photograph come from <a href="https://hydrotechdrilling.co.zw/">Hydrotech Drilling&apos;s existing website</a>. The homepage hero uses the borehole drilling photograph credited below.</p>
        <h2>Illustrative service photography</h2>
        <p>The external photographs below illustrate service subjects. They are not photographs of verified Hydrotech projects, equipment or customer installations.</p>
        <p>Images have been resized and compressed to WebP for web delivery. Display crops vary with screen size. Creative Commons versions remain available under the licence linked for each photograph.</p>
        {imageCredits.map(credit => <section key={credit.image}>
          <h3>{credit.title}</h3>
          <p>{credit.author}. <a href={credit.source} target="_blank" rel="noreferrer">Original photograph</a> · <a href={credit.licenseUrl} target="_blank" rel="noreferrer">{credit.license}</a> · <a href={credit.image}>Web version</a></p>
        </section>)}
      </div>
    </div></section>
  </>;
}
