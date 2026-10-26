import { Fragment } from "react";
import type { ReactNode } from "react";

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>Last updated: {updated}</p>
        </div>
      </section>

      <div className="container">
        <div className="legal-layout">
          <nav className="legal-nav" aria-label="On this page">
            <p>On this page</p>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </nav>
          <div className="legal-content">
            <p>{intro}</p>
            {sections.map((section) => (
              <Fragment key={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.content}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
