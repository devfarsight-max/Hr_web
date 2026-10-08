'use client';

import { Menu, X } from 'lucide-react';
import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';

const stickyThreshold = 120;
function subscribeToScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}
const getStickySnapshot = () => window.scrollY > stickyThreshold;
const getServerSnapshot = () => false;

const navigation = ['Home', 'About', 'Services', 'Industries', 'Careers', 'Insights', 'Contact'];
const hrefFor = (item: string) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

export default function SiteHeader({ active }: { active: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isSticky = useSyncExternalStore(subscribeToScroll, getStickySnapshot, getServerSnapshot);
  return <div className="relative z-50 h-[81px] shrink-0"><header className={`site-header inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur ${isSticky ? 'is-fixed fixed shadow-lg shadow-black/20' : 'relative'}`}>
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
      <Link href="/" aria-label="Orvanta HR Consultancy home" className="inline-flex shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16A6A3]">
        <img src="/orvanta-logo-transparent.png?v=2" alt="Orvanta" width={1662} height={946} className="site-logo h-16 w-auto object-contain" fetchPriority="high" />
      </Link>
      <nav className="hidden gap-6 text-sm font-medium text-[#36566a] lg:flex" aria-label="Main navigation">{navigation.map((item) => <Link aria-current={item.toLowerCase() === active ? 'page' : undefined} className={item.toLowerCase() === active ? 'border-b-2 border-[#087f7c] pb-1 font-semibold text-[#087f7c]' : 'hover:text-[#087f7c]'} href={hrefFor(item)} key={item}>{item}</Link>)}</nav>
      <Link href="/contact" className="hidden rounded-lg bg-[#087f7c] px-5 py-3 text-sm font-semibold text-white lg:block">Book a Consultation</Link>
      <button type="button" onClick={() => setIsOpen((open) => !open)} className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-[#0B1F33] transition hover:bg-[#d5eeeb] lg:hidden" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    {isOpen && <nav id="mobile-navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-81px)] overflow-y-auto border-t border-[#062a4e]/15 bg-[#e8f5f4] px-5 py-3 shadow-lg lg:hidden" aria-label="Mobile navigation"><div className="mx-auto max-w-7xl">{navigation.map((item) => <Link aria-current={item.toLowerCase() === active ? 'page' : undefined} onClick={() => setIsOpen(false)} className={item.toLowerCase() === active ? 'block rounded-lg bg-[#cce9e6] px-3 py-3 font-semibold text-[#087f7c]' : 'block rounded-lg px-3 py-3 font-medium text-[#36566a] hover:bg-[#d5eeeb]'} href={hrefFor(item)} key={item}>{item}</Link>)}<Link onClick={() => setIsOpen(false)} href="/contact" className="mt-3 block rounded-lg bg-[#087f7c] px-4 py-3 text-center text-sm font-semibold text-white">Book a Consultation</Link></div></nav>}
  </header></div>;
}



