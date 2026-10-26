import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { StatsBand } from "@/components/stats-band";
import { ProjectsSection } from "@/components/projects-section";
import { InsightsSection } from "@/components/insights-section";
import { WaterAbout } from "@/components/water-about";
import { WhyHydrotech } from "@/components/why-hydrotech";
import { ContactSection } from "@/components/contact-section";
import { services, strengths } from "@/lib/content";
import { site } from "@/lib/site";
export default function Home(){return <>
<section className="home-hero drill-hero"><div className="drill-hero-media"><Image src="/images/about-borehole.webp" alt="Borehole drilling equipment at work" fill priority sizes="100vw"/><div className="container drill-heading-wrap"><h1 className="drill-title"><span>Reliable Water.</span><span>Professional Drilling.</span></h1></div></div><div className="container"><div className="drill-hero-bottom"><div><p className="eyebrow">Hydrotech Drilling / Zimbabwe</p><p>{site.description}</p></div><div className="hero-actions"><ButtonLink href="/request-a-quote">Request a Quote</ButtonLink><ButtonLink href="/services" variant="outline">Explore Our Services</ButtonLink></div></div></div></section>
<section className="strengths-section"><div className="container"><div className="strengths-grid">{strengths.map((item,i)=><div className="strength-card" key={item.title}><span className="strength-symbol" aria-hidden="true">{['↗','◎','✳'][i]}</span><div><h2>{item.title}</h2><p>{item.description}</p></div></div>)}</div></div></section>
<ProjectsSection/><WaterAbout/>
<section className="section section-white"><div className="container"><SectionHeading eyebrow="What we do" title="Our Services" description="Complete water solutions, from the ground up." link={{href:"/services",label:"All services"}}/><div className="services-grid">{services.map((s,i)=><ServiceCard key={s.slug} service={s} index={i}/>)}</div></div></section>
<WhyHydrotech/><StatsBand/><InsightsSection/><ContactSection/>
</>;}
