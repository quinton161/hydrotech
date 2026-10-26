import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Post } from "@/lib/content";
import { formatDate } from "@/lib/utils";

type PostCardProps = {
  post: Post;
  featured?: boolean;
  priority?: boolean;
};

export function PostCard({
  post,
  featured = false,
  priority = false,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`post-card${featured ? " post-card-featured" : ""}`}
    >
      <div className="post-media">
        <Image
          src={featured ? post.image : post.thumb}
          alt=""
          fill
          priority={priority}
          sizes={
            featured
              ? "(max-width: 767px) 100vw, 55vw"
              : "(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          }
        />
      </div>
      <div className="post-content">
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime}</span>
        </div>
        <h3>{post.title}</h3>
        {featured ? <p>{post.excerpt}</p> : null}
        <span className="card-action">
          Read article
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
