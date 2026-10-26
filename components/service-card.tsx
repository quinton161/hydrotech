import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Service } from "@/lib/content";

type ServiceCardProps = {
  service: Service;
  index: number;
  showImage?: boolean;
};

export function ServiceCard({
  service,
  index,
  showImage = true,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card">
      <div className="service-card-head">
        <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="service-icon">
          <Image
            src={service.icon}
            alt=""
            width={42}
            height={42}
            aria-hidden="true"
          />
        </span>
      </div>
      <div className="service-card-copy">
        <h3>{service.title}</h3>
        <p>{service.excerpt}</p>
      </div>
      {showImage ? (
        <div className="service-card-media">
          <Image
            src={service.thumb}
            alt={service.imageAlt}
            style={{ objectPosition: service.imagePosition }}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <span className="card-action">
        Explore service
        <ArrowUpRight />
      </span>
    </Link>
  );
}
