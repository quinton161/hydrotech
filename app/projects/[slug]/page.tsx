import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Check } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getProject, projects } from "@/lib/content";

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug })) .concat(projects.length ? [] : [{ slug: "__unpublished__" }]);
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const related = projects
    .filter((item) => item.slug !== project.slug)
    .sort((a, b) => {
      if (a.category === project.category && b.category !== project.category) {
        return -1;
      }
      if (b.category === project.category && a.category !== project.category) {
        return 1;
      }
      return 0;
    })
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
                {project.category}
              </p>
              <h1>{project.title}</h1>
            </div>
            <div className="detail-hero-aside">
              <p>{project.summary}</p>
              <ButtonLink href="/contact">Start a similar project</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="cover-section">
        <div className="container">
          <div className="detail-cover">
            <Image
              src={project.image}
              alt={`${project.title} in ${project.location}`}
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
            <h2>{project.title}</h2>
            <p>{project.overview[0]}</p>
          </div>

          <div className="detail-layout mt-section">
            <div className="detail-main">
              <section>
                <h2>The brief</h2>
                <p>{project.overview[0]}</p>
                {project.overview[1] ? <p>{project.overview[1]}</p> : null}
              </section>

              <section>
                <h2>Scope of work</h2>
                <p>
                  The project brought together several disciplines under one
                  delivery team, with a shared programme and a single quality
                  standard.
                </p>
                <ul className="check-list">
                  {project.scope.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Outcome</h2>
                <p>
                  {project.title} was delivered by Hydrotech Drilling
                  with a focus on {project.category.toLowerCase()}, durable
                  detailing, and clear communication from mobilisation to
                  handover.
                </p>
                <p>
                  The result is a project that meets its brief, performs in daily
                  use, and gives the owner a clear record for future operation.
                </p>
              </section>
            </div>

            <aside className="detail-aside">
              <div className="aside-box">
                <h3>Project facts</h3>
                <dl className="facts-list">
                  <div>
                    <dt>Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div>
                    <dt>Client</dt>
                    <dd>{project.client}</dd>
                  </div>
                  <div>
                    <dt>Value</dt>
                    <dd>{project.value}</dd>
                  </div>
                  <div>
                    <dt>Size</dt>
                    <dd>{project.size}</dd>
                  </div>
                  <div>
                    <dt>Duration</dt>
                    <dd>{project.duration}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{project.status}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </div>
                </dl>
              </div>
              <div className="aside-box aside-cta">
                <h3>Planning something similar?</h3>
                <p>
                  Bring us in early and we will help you test the brief, budget,
                  and programme before you commit.
                </p>
                <ButtonLink href="/contact">Talk to our team</ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="related-section">
        <div className="container">
          <SectionHeading
            eyebrow="More projects"
            title="See how the thinking carries across."
            link={{ href: "/projects", label: "All projects" }}
          />
          <div className="related-grid">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} detailed />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
