import type { Metadata } from 'next';
export const siteName = 'Orvanta HR Consultancy';
// Set the verified production origin in the deployment environment.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
export const pages = {
  home: { path: '/', title: 'HR Consultancy, Recruitment & Executive Search', description: 'Orvanta HR Consultancy helps businesses recruit talent, find executive leaders and strengthen HR through people strategy, leadership development and employee engagement.' },
  about: { path: '/about', title: 'About Our HR & Recruitment Consultancy', description: 'Learn how Orvanta HR Consultancy combines executive search, sector knowledge and practical HR advice to help organisations build stronger teams.' },
  services: { path: '/services', title: 'HR Consulting, Recruitment & Talent Services', description: 'Explore executive search, recruitment and staffing, HR consulting, leadership development, employee engagement and talent strategy with Orvanta.' },
  industries: { path: '/industries', title: 'Recruitment & HR Solutions by Industry', description: 'Discover recruitment and HR support for technology, BFSI, healthcare, manufacturing, retail, education, real estate and professional services teams.' },
  careers: { path: '/careers', title: 'Career Enquiries & Recruitment Support', description: 'Connect with Orvanta HR Consultancy about your experience, career goals and recruitment enquiries. Learn how to prepare for a career conversation.' },
  insights: { path: '/insights', title: 'HR, Recruitment & Leadership Insights', description: 'Read practical perspectives on talent acquisition, high-performing teams and leadership to help your organisation make better people decisions.' },
  contact: { path: '/contact', title: 'Contact Us & Book an HR Consultation', description: 'Book a consultation with Orvanta HR Consultancy to discuss recruitment, executive search, HR strategy or your next people challenge.' },
} as const;
export function pageMetadata(key: keyof typeof pages): Metadata {
 const page = pages[key];
 const url = siteUrl ? siteUrl + page.path : undefined;
 return { title: page.title, description: page.description,
  alternates: url ? { canonical: url } : undefined,
  openGraph: { title: page.title + ' | ' + siteName, description: page.description, url, siteName, type: 'website', locale: 'en_IN', images: siteUrl ? [{ url: siteUrl + '/orvanta-logo.jpeg', alt: siteName }] : undefined },
  twitter: { card: 'summary', title: page.title + ' | ' + siteName, description: page.description, images: siteUrl ? [siteUrl + '/orvanta-logo.jpeg'] : undefined }
 };
}
