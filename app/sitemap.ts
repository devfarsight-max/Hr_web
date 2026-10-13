import type { MetadataRoute } from 'next';
import { pages, siteUrl } from '../lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? Object.values(pages).map(page => ({ url: siteUrl + page.path })) : [];
}
