import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-inner">
          <span className="not-found-code">404</span>
          <h1>This page is not part of the build.</h1>
          <p>
            The link may be old, or the page may have moved. Start from the
            homepage, or tell us what you were looking for.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
