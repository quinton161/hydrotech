import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";
export const metadata:Metadata=pageMetadata({title:"Privacy Policy",description:"How Hydrotech Drilling uses information supplied through website enquiries.",alternates:{canonical:"/privacy-policy"}});
export default function Privacy(){return <LegalPage eyebrow="Your information" title="Privacy Policy" updated="26 October 2026" intro="This notice describes the information handled by this website when you enquire about Hydrotech Drilling’s water services." sections={[
{id:"information",title:"Information you provide",content:<p>The quote form asks for your name, phone number, email address, project location, required service, property type and project description. Please avoid including sensitive information that is unnecessary for your enquiry.</p>},
{id:"purpose",title:"How your information is used",content:<p>Your information is used to respond to your enquiry, discuss your requirements and prepare follow-up communication about your project.</p>},
{id:"delivery",title:"Delivery and service providers",content:<p>When online enquiry delivery is enabled, your form details are sent to Hydrotech Drilling through its configured email delivery service. Website hosting and delivery providers may process technical information needed to operate these services.</p>},
{id:"external",title:"External services",content:<p>The contact page embeds Google Maps. Using the map, or following a WhatsApp link when available, connects you with a third-party service whose own privacy terms apply. Phone and email links open your chosen communication application.</p>},
{id:"storage",title:"Storage and questions",content:<p>The website does not save quote requests to a website database. Submitted enquiries may be retained in the company’s email or enquiry systems for follow-up. For questions about access, correction or deletion of information you supplied, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
]}/>;}
