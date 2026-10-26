# Hydrotech Drilling

Next.js website for Hydrotech Drilling, using a reusable component system, Public Sans typography, responsive layouts and transitions.

## Run

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
npm run build
npm start
npm run lint
node scripts/check-contact.cjs
```

On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`. The contact checks mock external delivery and never send email.

## Configuration

See `.env.example` and [CONTENT.md](CONTENT.md). Keep API keys and webhook credentials in local or deployment secrets.

The quote form requires an existing provider's HTTPS delivery adapter (`CONTACT_WEBHOOK_URL`, optional `CONTACT_WEBHOOK_TOKEN`) or Resend (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL` with a verified sender). Enquiries go to `sales@hydrotechdrilling.co.zw`. The endpoint returns a clear failure while delivery is unconfigured and never logs enquiry contents.

Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` only after confirming which company number supports WhatsApp. The floating control uses a phone link until then.

## Content and launch

Contact details live in `lib/site.ts`; service, project and article data live in `lib/content.ts`. Projects and published articles are empty pending verified material. Proposed article topics are visibly labelled. Reviews and fictional statistics are hidden.

Each service has a detail route. Future genuine project and article records automatically supply listing cards, detail routes and sitemap entries. Update sitemap modification dates when publishing content. See `CONTENT.md` for image provenance and editing guidance.

Deploy to a Node-compatible Next.js host; static-only hosting cannot run the contact endpoint. Set production secrets, rebuild after changing the public WhatsApp variable, and verify a real delivered enquiry before launch. This checkout has not been deployed and does not alter the current public company website.
