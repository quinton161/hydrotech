type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? (
          <p className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="page-title">{title}</h1>
        {description ? <p className="page-intro">{description}</p> : null}
      </div>
    </section>
  );
}
