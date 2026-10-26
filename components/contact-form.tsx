"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { services } from "@/lib/content";
import { propertyTypes } from "@/lib/enquiries";
export function ContactForm(){
 const [status,setStatus]=useState<"idle"|"submitting"|"success"|"error">("idle");
 const [error,setError]=useState("");
 async function submit(event:FormEvent<HTMLFormElement>){
 event.preventDefault();if(status==="submitting")return;
 const form=event.currentTarget;if(!form.reportValidity())return;
 const payload=Object.fromEntries(new FormData(form));setStatus("submitting");setError("");
 try{const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const data=await response.json();if(!response.ok||data.ok!==true)throw new Error(data.error||"Could not submit your request.");form.reset();setStatus("success");}
 catch(e){setError(e instanceof Error?e.message:"Could not send your request.");setStatus("error");}}
 if(status==="success")return <div className="form-success" role="status"><h3>Request submitted</h3><p>Thank you. Your enquiry has been accepted for delivery to Hydrotech Drilling.</p><button className="btn btn-outline" onClick={()=>setStatus("idle")}>Send another request</button></div>;
 return <form className="contact-form" onSubmit={submit}><h3 className="form-heading">Tell us about your project</h3><div className="form-grid">
 <div className="field"><label htmlFor="quote-name">Full Name *</label><input id="quote-name" name="name" autoComplete="name" required maxLength={120}/></div>
 <div className="field"><label htmlFor="quote-phone">Phone / WhatsApp Number *</label><input id="quote-phone" name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30}/></div>
 <div className="field"><label htmlFor="quote-email">Email Address *</label><input id="quote-email" name="email" type="email" autoComplete="email" required maxLength={200}/></div>
 <div className="field"><label htmlFor="quote-location">Project Location *</label><input id="quote-location" name="location" required maxLength={200} placeholder="Town, suburb or district"/></div>
 <div className="field"><label htmlFor="quote-service">Service Required *</label><select id="quote-service" name="projectType" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}</select></div>
 <div className="field"><label htmlFor="quote-property">Property Type *</label><select id="quote-property" name="propertyType" defaultValue="" required><option value="" disabled>Select a property type</option>{propertyTypes.map(t=><option key={t}>{t}</option>)}</select></div>
 <div className="field field-full"><label htmlFor="quote-description">Project Description *</label><textarea id="quote-description" name="message" rows={5} required maxLength={5000} placeholder="Describe your water requirements and any existing system."/></div>
 <div className="field field-honeypot" aria-hidden="true"><label htmlFor="quote-website">Website</label><input id="quote-website" name="website" tabIndex={-1} autoComplete="off"/></div>
 </div>{status==="error"?<p className="form-error" role="alert">{error}</p>:null}<div className="form-actions"><button type="submit" className="btn btn-primary" disabled={status==="submitting"}>{status==="submitting"?"Submitting…":"Submit Request"}<span aria-hidden="true">↗</span></button><p>Your details are used to respond to this enquiry. <Link href="/privacy-policy">Privacy Policy</Link></p></div><p role="status" aria-live="polite">{status==="submitting"?"Sending your request…":""}</p></form>;
}
