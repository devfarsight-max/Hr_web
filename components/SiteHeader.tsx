'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = ['Home', 'About', 'Services', 'Industries', 'Careers', 'Insights', 'Contact'];
const hrefFor = (item: string) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

export default function SiteHeader({ active }: { active: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
      <a href="/" className="flex min-w-0 items-center gap-2.5 font-bold text-[#0B1F33] sm:gap-3"><b className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0B1F33] text-sm text-white">TB</b><span className="truncate">TalentBridge <em className="font-medium text-[#16A6A3]">Consulting</em></span></a>
      <nav className="hidden gap-6 text-sm font-medium text-slate-600 lg:flex" aria-label="Main navigation">{navigation.map((item) => <a className={item.toLowerCase() === active ? 'border-b-2 border-[#16A6A3] pb-1 text-[#0B1F33]' : 'hover:text-[#2457A6]'} href={hrefFor(item)} key={item}>{item}</a>)}</nav>
      <a href="/contact" className="hidden rounded-lg bg-[#0B1F33] px-5 py-3 text-sm font-semibold text-white lg:block">Book a Consultation</a>
      <button type="button" onClick={() => setIsOpen((open) => !open)} className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-[#0B1F33] transition hover:bg-slate-100 lg:hidden" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    {isOpen && <nav id="mobile-navigation" className="border-t border-slate-200/70 bg-white px-5 py-3 shadow-lg lg:hidden" aria-label="Mobile navigation"><div className="mx-auto max-w-7xl">{navigation.map((item) => <a onClick={() => setIsOpen(false)} className={item.toLowerCase() === active ? 'block rounded-lg bg-slate-100 px-3 py-3 font-semibold text-[#0B1F33]' : 'block rounded-lg px-3 py-3 font-medium text-slate-600 hover:bg-slate-50'} href={hrefFor(item)} key={item}>{item}</a>)}<a onClick={() => setIsOpen(false)} href="/contact" className="mt-3 block rounded-lg bg-[#0B1F33] px-4 py-3 text-center text-sm font-semibold text-white">Book a Consultation</a></div></nav>}
  </header>;
}
