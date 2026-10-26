import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InsightsSection } from "@/components/insights-section";
export const metadata:Metadata=pageMetadata({title:"Water Insights",description:"Planned topics on borehole drilling, maintenance, solar pumping and irrigation in Zimbabwe.",alternates:{canonical:"/blog"}});
export default function Blog(){return <><PageHero eyebrow="Insights" title="Better informed. Better prepared." description="Our planned water-solutions reading list. Articles will appear here once reviewed and published."/><InsightsSection/></>;}
