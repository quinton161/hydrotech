import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  detailed?: boolean;
  priority?: boolean;
};

export function ProjectCard({
  project,
  detailed = false,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-card${detailed ? " project-card-detailed" : ""}`}
    >
      <div className="project-media">
        <Image
          src={project.thumb}
          alt={`${project.title} in ${project.location}`}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
      <div className="project-overlay">
        <span className="project-meta">
          {project.location}
          <span aria-hidden="true">/</span>
          {project.year}
        </span>
        <h3>{project.title}</h3>
        {detailed ? <p>{project.summary}</p> : null}
        <span className="project-open">
          View project
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
