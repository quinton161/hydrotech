import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Frequently asked questions",
  description:
    "Answers to common questions about working with Hydrotech Drilling, about boreholes and water solutions in Zimbabwe.",
  alternates: { canonical: "/faq" },
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers before you need them."
        description="The questions we hear most often from homeowners, farmers, businesses and institutions. If yours is not here, ask us directly."
      />

      <section className="section section-white">
        <div className="container">
          <div className="faq-page">
            <FaqAccordion items={faqs} />
            <aside className="faq-aside">
              <p className="eyebrow">
                <span className="eyebrow-mark" aria-hidden="true">
                  <span />
                  <span />
                </span>
                Still curious?
              </p>
              <h2>Ask us anything.</h2>
              <p>
                No sales script and no obligation. Tell us what you are planning
                and we will give you a straight answer.
              </p>
              <ButtonLink href="/contact">Contact our team</ButtonLink>
              <div className="faq-aside-contact">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
