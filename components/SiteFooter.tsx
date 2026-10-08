import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const pages = [
  ['Home', '/'], ['About us', '/about'], ['Industries', '/industries'],
  ['Careers', '/careers'], ['Insights', '/insights'], ['Contact', '/contact'],
];
const services = [
  'Executive Search', 'Recruitment & Staffing', 'HR Consulting',
  'Leadership Development', 'Employee Engagement', 'Talent Strategy',
];
const linkStyle = 'transition-colors hover:text-[#087f7c] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f7c]';

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-[#062a4e]/10 text-[#36566a]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-7 border-b border-[#062a4e]/10 py-10 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-[#087f7c]">YOUR NEXT CHAPTER STARTS WITH PEOPLE</p>
            <h2 className="mt-3 text-2xl tracking-tight text-[#062a4e] sm:text-3xl">Build your team. Shape your future.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-lg bg-[#087f7c] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#066663] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f7c]">Hire with us <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link href="/careers" className={`inline-flex items-center gap-3 rounded-lg border border-[#062a4e]/20 px-5 py-3 text-sm font-semibold text-[#062a4e] ${linkStyle}`}>Explore careers <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Orvanta HR Consultancy home" className={`inline-flex rounded-lg ${linkStyle}`}>
              <img src="/orvanta-logo-transparent.png?v=2" alt="Orvanta" width={1662} height={946} className="site-logo h-auto w-56 max-w-full object-contain" loading="lazy" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-[#496575]">Connecting talent, leadership and people strategy to help organisations grow and professionals move forward.</p>
            <Link href="/about" className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087f7c] ${linkStyle}`}>Get to know us <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>

          <nav aria-label="Footer website navigation">
            <h3 className="mb-5 text-sm font-semibold text-[#062a4e]">Explore</h3>
            <ul className="space-y-3">{pages.map(([label, href]) => <li key={href}><Link href={href} className={`inline-block py-1 text-sm ${linkStyle}`}>{label}</Link></li>)}</ul>
          </nav>

          <nav aria-label="Footer service navigation">
            <h3 className="mb-5 text-sm font-semibold text-[#062a4e]">Our expertise</h3>
            <ul className="space-y-3">{services.map((label, index) => <li key={label}><Link href={`/services#service-${index}`} className={`inline-block py-1 text-sm leading-6 ${linkStyle}`}>{label}</Link></li>)}</ul>
          </nav>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#062a4e]">Let&apos;s connect</h3>
            <address className="space-y-5 text-sm not-italic">
              <a href="mailto:hello@talentbridge.co" className={`flex items-start gap-3 py-1 ${linkStyle}`}><Mail size={18} className="shrink-0 text-[#087f7c]" aria-hidden="true" /><span className="break-all">hello@talentbridge.co</span></a>
              <a href="tel:+912241028890" className={`flex items-start gap-3 py-1 ${linkStyle}`}><Phone size={18} className="shrink-0 text-[#087f7c]" aria-hidden="true" /><span>+91 22 4102 8890</span></a>
              <span className="flex items-start gap-3 py-1"><MapPin size={18} className="shrink-0 text-[#087f7c]" aria-hidden="true" /><span>BKC, Mumbai</span></span>
            </address>
            <p className="mt-5 text-xs leading-6 text-[#496575]">Contact our team to arrange a conversation or meeting.</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-[#062a4e]/10 py-6 text-xs leading-6 text-[#496575] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} TalentBridge Consulting. All rights reserved.</p>
          <span>People. Potential. Progress.</span>
        </div>
      </div>
    </footer>
  );
}


