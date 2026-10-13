import type { Metadata } from "next";
import { siteName, siteUrl, pages } from "../lib/seo";
import "./globals.css";
import PageMotion from "../components/PageMotion";
import SiteFooter from "../components/SiteFooter";
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: siteName + ' | HR & Recruitment Solutions', template: '%s | ' + siteName },
  description: pages.home.description,
  applicationName: siteName,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/icon.svg', apple: '/orvanta-logo.jpeg' },
};
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: siteName, ...(siteUrl ? { '@id': siteUrl + '/#organization', url: siteUrl, logo: siteUrl + '/orvanta-logo.jpeg' } : {}), email: 'hrm@orvantahrconsultancy.com', description: pages.home.description },
    ...(siteUrl ? [{ '@type': 'WebSite', '@id': siteUrl + '/#website', url: siteUrl, name: siteName, publisher: { '@id': siteUrl + '/#organization' }, inLanguage: 'en' }] : []),
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <PageMotion />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
