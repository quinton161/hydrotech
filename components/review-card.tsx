import Image from "next/image";
import { QuoteMark, Star } from "@/components/icons";
import type { Review } from "@/lib/content";

export function ReviewCard({
  review,
  dark = false,
}: {
  review: Review;
  dark?: boolean;
}) {
  return (
    <article className={`review-card${dark ? " review-card-dark" : ""}`}>
      <div className="review-top">
        <div className="review-stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
        <QuoteMark className="review-quote" />
      </div>
      <blockquote>{review.quote}</blockquote>
      <footer className="review-person">
        <Image
          src={review.image}
          alt=""
          width={56}
          height={56}
          className="review-avatar"
        />
        <div>
          <p className="review-name">{review.name}</p>
          <p className="review-detail">
            {review.role} · {review.location}
          </p>
        </div>
      </footer>
      <span className="review-project">{review.project}</span>
    </article>
  );
}
