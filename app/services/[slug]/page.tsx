import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Check } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getService, services } from "@/lib/content";

export const instant = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: `${service.title} Zimbabwe`,
    description: service.excerpt,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} Zimbabwe`,
      description: service.excerpt,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-grid">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-mark" aria-hidden="true">
                  <span />
                  <span />
                </span>
                Service
              </p>
              <h1>{service.title}</h1>
            </div>
            <div className="detail-hero-aside">
              <p>{service.excerpt}</p>
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="cover-section">
        <div className="container">
          <div className="detail-cover">
            <Image
              src={service.image}
              alt={service.imageAlt}
              style={{ objectPosition: service.imagePosition }}
              fill
              priority
              sizes="(max-width: 1376px) 100vw, 1336px"
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="detail-intro">
            <h2>Water solutions for your property.</h2>
            <p>{service.intro[0]}</p>
          </div>

          <div className="detail-layout mt-section">
            <div className="detail-main">
              <section>
                <h2>How we approach it</h2>
                <p>{service.intro[1]}</p>
              </section>

              <section>
                <h2>What this service covers</h2>
                <ul className="check-list">
                  {service.includes.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Who it is for</h2>
                <p>
                  This service is a good fit when the priorities below match the
                  stage and complexity of your project.
                </p>
                <ul>
                  {service.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="detail-aside">
              <div className="aside-box">
                <h3>At a glance</h3>
                <dl className="facts-list">
                  <div>
                    <dt>Discipline</dt>
                    <dd>{service.title}</dd>
                  </div>
                  <div>
                    <dt>Delivery</dt>
                    <dd>Discuss with our team</dd>
                  </div>
                  <div>
                    <dt>Engagement</dt>
                    <dd>Flexible</dd>
                  </div>
                  <div>
                    <dt>Coverage</dt>
                    <dd>Zimbabwe</dd>
                  </div>
                </dl>
              </div>
              <div className="aside-box aside-cta">
                <h3>Have a brief in mind?</h3>
                <p>
                  Tell us what you are planning. We will tell you what it takes
                  to deliver it well.
                </p>
                <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="related-section">
        <div className="container">
          <SectionHeading
            eyebrow="Related services"
            title="Keep the right expertise close."
            link={{ href: "/services", label: "All services" }}
          />
          <div className="related-grid">
            {related.map((item, index) => (
              <ServiceCard
                key={item.slug}
                service={item}
                index={index}
                showImage={false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
