import Image from "next/image";
import Link from "next/link";
export function Logo({light=false}:{light?:boolean}){return <Link href="/" className={`brand${light?" brand-light":""}`} aria-label="Hydrotech Drilling home"><Image src="/images/hydrotech-logo.png" alt="Hydrotech Drilling" width={190} height={76} priority className="company-logo"/></Link>;}
