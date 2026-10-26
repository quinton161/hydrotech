import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
export const metadata:Metadata=pageMetadata({title:"Request a Quote",description:"Request borehole drilling, installation, flushing, siting, irrigation or solar water pumping in Zimbabwe.",alternates:{canonical:"/request-a-quote"}});
export default function Quote(){return <><PageHero eyebrow="Request a Quote" title="Let’s plan your water solution." description="Tell us where your project is and what you need."/><ContactSection/></>;}
