import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import { FloatingContact } from "@/components/floating-contact";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: { icon: "/images/hydrotech-icon.webp" },
  title: {
    default: `${site.name} | Borehole Drilling Zimbabwe & Harare`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: ["Borehole Drilling Zimbabwe", "Borehole Drilling Harare", "Borehole Installation Zimbabwe", "Borehole Siting Zimbabwe", "Borehole Flushing Zimbabwe", "Solar Borehole Installation Zimbabwe", "Irrigation Systems Zimbabwe"],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Borehole Drilling Zimbabwe & Harare`,
    description: site.description,
    images: [
      {
        url: "/images/about-borehole.webp",
        width: 1200,
        height: 630,
        alt: `Borehole drilling equipment`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Borehole Drilling Zimbabwe & Harare`,
    description: site.description,
    images: ["/images/about-borehole.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}/images/about-borehole.webp`,
  areaServed: { "@type": "Country", name: "Zimbabwe" },
  logo: `${site.url}/images/hydrotech-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },

};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingContact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </body>
    </html>
  );
}
