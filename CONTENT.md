# Hydrotech website content

The website is implemented in Next.js. Legacy static HTML reference pages have been removed.

## Source of truth

Company name, Zimbabwe coverage, six services, mission and vision were checked against https://hydrotechdrilling.co.zw/ and https://hydrotechdrilling.co.zw/about-us/ on 26 October 2026. Contact details match the supplied brief and current contact search listing. The brief uses “119-117 Rotten Row Road”; an older source uses “117-119”. The map searches that same street-number range rather than inventing coordinates.

The original company logo, branded portrait, About-page rig photograph and borehole footage were recovered from Hydrotech's existing website. The homepage hero uses the 2181 x 3042-pixel licensed borehole photograph credited below; the original borehole footage frame remains available as a source asset. The drilling service uses the company's About-page rig photograph. The About composition uses the original branded portrait with a separate drilling photograph.

The other services have distinct subject-matched photographs: submersible pump and piping, flowing water, electrical resistivity field equipment, crop irrigation, and solar-powered pumping. The Why Choose section shows water entering a storage tank. Licensed illustrative images are credited publicly at `/image-credits`; they are not presented as verified Hydrotech projects. Resized/compressed Creative Commons images retain their original licences. Source references and authors are stored in `lib/image-credits.ts`.

Most new source images are 2,181?4,256 pixels wide. The original company rig photo is kept at its native 1,000-pixel width; it is not artificially upscaled. Main images are optimized to a maximum width of 2,200 pixels, with separate 900-pixel service thumbnails. Crops are set through CSS to keep the important equipment visible on mobile and desktop.

## Editing

- `lib/site.ts`: contact information, navigation and site URL.
- `lib/content.ts`: services, FAQs, process, proposed topics and typed project/article/review collections.
- `public/images/hydrotech-logo.png`: original company logo.
- `public/images/service-*.webp`, `about-borehole.webp`, `water-storage.webp`, `hydrotech-person.webp`: optimized section imagery.

Projects and published articles are empty because verified records were unavailable. Add real records using the existing types; listing cards, detail routes and sitemap entries are already connected. For projects, provide permission-cleared images, name, location, category, summary and actual scope. Leave unknown optional facts empty. Proposed topics are explicitly labelled and do not link to nonexistent articles.

Reviews are unpublished. The original reusable review card remains available; no ratings, testimonials or review totals are exposed.

## Delivery setup still needed

Copy `.env.example` to `.env.local`, or configure equivalent deployment secrets. Use `CONTACT_WEBHOOK_URL` for an existing provider adapter, or Resend with a real API key and verified sender. The webhook must accept the JSON payload, deliver it to the `to` address, return a failure status if delivery cannot be accepted, and return 2xx only on acceptance. Optional bearer authentication uses `CONTACT_WEBHOOK_TOKEN`. No live provider was supplied during implementation.

The form returns 503 whenever no provider is configured, including development. It returns success only after a provider accepts the request. Acceptance does not guarantee inbox delivery; monitor bounces with the chosen provider.

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` only after confirming WhatsApp is enabled on that company number. Use international digits without `+`. Until confirmation, the floating control offers a telephone call. Rebuild after changing this public environment value.
