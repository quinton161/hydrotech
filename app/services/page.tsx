import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { StatsBand } from "@/components/stats-band";
import { services } from "@/lib/content";
export const metadata:Metadata=pageMetadata({title:"Borehole & Water Services Zimbabwe",description:"Borehole drilling, installation, flushing, siting, irrigation systems and solar borehole installation across Zimbabwe.",alternates:{canonical:"/services"}});
export default function Services(){return <><PageHero eyebrow="What we do" title="Every stage of your water supply." description="From groundwater siting to drilling, installation and maintenance. Explore our six services and discuss the right solution for your property."/><section className="section section-white"><div className="container"><div className="services-grid">{services.map((s,i)=><ServiceCard key={s.slug} service={s} index={i}/>)}</div></div></section><StatsBand/></>;}
