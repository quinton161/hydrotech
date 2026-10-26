import Link from "next/link";
import { ArrowRight } from "@/components/icons";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  link?: { href: string; label: string };
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""} ${className}`.trim()}>
      <div className="section-heading-main">
        <p className="eyebrow">
          <span className="eyebrow-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          {eyebrow}
        </p>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {link ? (
        <Link href={link.href} className="section-link">
          <span>{link.label}</span>
          <ArrowRight />
        </Link>
      ) : null}
    </div>
  );
}
