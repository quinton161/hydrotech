import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata:Metadata=pageMetadata({title:"Website Terms",description:"Information about using the Hydrotech Drilling website.",alternates:{canonical:"/terms-conditions"}});
export default function Terms(){return <LegalPage eyebrow="Website information" title="Website Terms" updated="26 October 2026" intro="Use this website to learn about Hydrotech Drilling and enquire about water solutions." sections={[
{id:"information",title:"Service information",content:<p>Website descriptions introduce available services. The appropriate scope, availability, timing and cost depend on your site and requirements and are discussed directly with the team.</p>},
{id:"quotes",title:"Quote requests",content:<p>Submitting an enquiry does not confirm a booking or create a service contract. Project scope, pricing and any service agreement must be confirmed separately with Hydrotech Drilling.</p>},
{id:"links",title:"External links",content:<p>Map and communication links connect to external services. Their availability and terms are managed by their respective providers.</p>}
]}/>;}
