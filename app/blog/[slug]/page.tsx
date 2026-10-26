import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { ButtonLink } from "@/components/button-link";
import { Facebook, LinkedIn } from "@/components/icons";
import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { getPost, posts } from "@/lib/content";
import type { PostBlock } from "@/lib/content";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export const instant = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug })) .concat(posts.length ? [] : [{ slug: "__unpublished__" }]);
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

function renderBlock(block: PostBlock) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "paragraph":
      return <p>{block.text}</p>;
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
  }
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const recent = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const shareUrl = `${site.url}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/hydrotech-logo.png`,
      },
    },
    mainEntityOfPage: shareUrl,
  };

  return (
    <>
      <article>
        <header className="article-header">
          <div className="container">
            <div className="article-meta">
              <span className="article-category">{post.category}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </header>

        <div className="container">
          <div className="article-cover">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(max-width: 1376px) 100vw, 1336px"
            />
          </div>
        </div>

        <div className="container">
          <div className="article-layout">
            <div>
              <div className="prose">
                {post.content.map((block, index) => (
                  <Fragment key={`${block.type}-${index}`}>
                    {renderBlock(block)}
                    {index === 2 ? (
                      <figure className="article-inline-image">
                        <Image
                          src={post.bodyImage}
                          alt=""
                          width={900}
                          height={600}
                          sizes="(max-width: 1000px) 100vw, 760px"
                        />
                      </figure>
                    ) : null}
                  </Fragment>
                ))}
              </div>

              <div className="share-row">
                <span>Share this article</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <LinkedIn />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Facebook"
                >
                  <Facebook />
                </a>
              </div>
            </div>

            <aside className="article-aside">
              <div className="aside-box">
                <h3>Recent insights</h3>
                <div className="aside-recent">
                  {recent.map((item) => (
                    <Link key={item.slug} href={`/blog/${item.slug}`}>
                      <div className="aside-recent-image">
                        <Image
                          src={item.thumb}
                          alt=""
                          fill
                          sizes="68px"
                        />
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                        <span>{formatDate(item.date)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="aside-box aside-cta">
                <h3>Planning a project?</h3>
                <p>
                  Get a clear view of feasibility, cost, and programme before
                  you commit.
                </p>
                <ButtonLink href="/contact">Ask us anything</ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="related-section">
        <div className="container">
          <SectionHeading
            eyebrow="Keep reading"
            title="More from the field."
            link={{ href: "/blog", label: "All insights" }}
          />
          <div className="related-grid">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
