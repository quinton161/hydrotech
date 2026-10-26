import { NextResponse } from "next/server";
import { services } from "@/lib/content";
import { propertyTypes } from "@/lib/enquiries";
import { site } from "@/lib/site";
export async function POST(request:Request){
 if(Number(request.headers.get("content-length")||0)>20000)return NextResponse.json({error:"Request too large."},{status:413});
 const origin=request.headers.get("origin");
 if(origin){
   try{const parsed=new URL(origin);const host=request.headers.get("host")||new URL(request.url).host;
     if(!["http:","https:"].includes(parsed.protocol)||parsed.host!==host)return NextResponse.json({error:"Invalid request origin."},{status:403});
   }catch{return NextResponse.json({error:"Invalid request origin."},{status:403});}
 }
 let data:Record<string,unknown>;
 try{const raw=await request.text();if(raw.length>20000)return NextResponse.json({error:"Request too large."},{status:413});data=JSON.parse(raw);if(!data||typeof data!=="object"||Array.isArray(data))throw new Error();}catch{return NextResponse.json({error:"Invalid request body."},{status:400});}
 if(data.website)return NextResponse.json({error:"Could not submit this request."},{status:400});
 const limits={name:120,email:200,phone:30,location:200,projectType:120,propertyType:40,message:5000};const payload:Record<string,string>={};
 for(const [key,max] of Object.entries(limits)){const value=typeof data[key]==="string"?data[key].trim():"";if(!value||value.length>max)return NextResponse.json({error:"Please complete all required fields within the allowed length."},{status:400});payload[key]=value;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)||!/^\+?[0-9() .-]{7,30}$/.test(payload.phone)||payload.phone.replace(/\D/g,"").length<7)return NextResponse.json({error:"Please enter a valid email address and phone number."},{status:400});
 if(!services.some(s=>s.title===payload.projectType)||!propertyTypes.some(t=>t===payload.propertyType))return NextResponse.json({error:"Please select a valid service and property type."},{status:400});
 const webhook=process.env.CONTACT_WEBHOOK_URL;const key=process.env.RESEND_API_KEY;const from=process.env.CONTACT_FROM_EMAIL;
 if(!webhook&&!(key&&from))return NextResponse.json({error:`Online requests are temporarily unavailable. Please call ${site.phone} or email ${site.email}.`},{status:503});
 try{let response:Response;
 if(webhook){if(new URL(webhook).protocol!=="https:")throw new Error("Invalid webhook configuration");response=await fetch(webhook,{method:"POST",headers:{"Content-Type":"application/json",...(process.env.CONTACT_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({source:"hydrotech-quote",to:site.email,...payload}),signal:AbortSignal.timeout(15000)});}
 else{response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[site.email],reply_to:payload.email,subject:`Water solution enquiry: ${payload.projectType}`,text:Object.entries(payload).map(([k,v])=>`${k}: ${v}`).join("\n\n")}),signal:AbortSignal.timeout(15000)});}
 if(!response.ok)throw new Error("Provider rejected request");if(!webhook){const receipt=await response.json();if(!receipt.id)throw new Error("Missing delivery receipt");}return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:`Your request could not be sent. Please try again or email ${site.email}.`},{status:502});}
}
