# TalentBridge HR website

## Local development

Run `npm ci`, then `npm run dev` for the existing Vinext/Cloudflare preview.

## Vercel deployment

The Vercel deployment uses native Next.js. `vercel.json` selects the Next.js framework, runs `npm run build:vercel`, and reads `.next` output. The default `npm run build` still builds the Cloudflare Worker and must not be used as the Vercel build command.

In Vercel, select this repository and the directory containing `package.json` as the Root Directory. Use Node.js 22 or newer. Remove dashboard build/output overrides that point to `dist` or `public`, then redeploy the updated commit. The effective build command should be `npm run build:vercel` and the output directory `.next`.

To verify the Vercel build locally, run `npm run build:vercel`, then `npm run start:vercel`.

## Search engine setup

Set NEXT_PUBLIC_SITE_URL to the verified public origin (for example https://your-domain.com) in the deployment environment before building. This enables absolute canonical URLs, social images, the sitemap and website structured data. Without it, domain-dependent fields are omitted rather than pointing to a guessed domain. Rebuild after changing it.

After deploying, verify the domain in Google Search Console, submit /sitemap.xml, and inspect the homepage and main service pages. Confirm the business name, service regions, client logos and published performance claims are accurate. Add verified location details before targeting local search.
