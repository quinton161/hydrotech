import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsSection } from "@/components/projects-section";
export const metadata:Metadata=pageMetadata({title:"Projects",description:"Hydrotech Drilling’s borehole, irrigation and solar water project portfolio.",alternates:{canonical:"/projects"}});
export default function Projects(){return <><PageHero eyebrow="Our projects" title="Water infrastructure for everyday life." description="A space for verified Hydrotech project stories, locations and photographs."/><ProjectsSection/></>;}
