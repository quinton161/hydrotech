import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
export const metadata:Metadata=pageMetadata({title:"Contact Hydrotech Drilling Harare",description:"Contact Hydrotech Drilling in Harare for borehole drilling and water solutions across Zimbabwe.",alternates:{canonical:"/contact"}});
export default function Contact(){return <><PageHero eyebrow="Contact Hydrotech" title="A direct line to dependable water." description="Call, email or share your project requirements with our team."/><ContactSection map/></>;}
