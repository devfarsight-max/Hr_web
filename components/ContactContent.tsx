import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactContent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:pt-20">
        <p className="eyebrow">CONTACT TALENTBRIDGE</p>
        <h1 className="mt-5 text-5xl font-bold leading-[1.06] tracking-[-.045em] sm:text-6xl">Let&apos;s start a conversation.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8">A hiring brief, a people challenge or a career move. Tell us what brings you here, and help us understand the support you are looking for.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            <a href="mailto:hello@talentbridge.co" className="group flex items-center gap-4 py-6"><Mail className="shrink-0 text-[#61cfcc]" size={23} aria-hidden="true" /><span className="min-w-0"><span className="block text-xs uppercase tracking-widest text-slate-400">Email us</span><span className="mt-2 block break-words text-lg font-semibold group-hover:text-[#61cfcc]">hello@talentbridge.co</span></span><ArrowUpRight className="ml-auto shrink-0 text-[#61cfcc]" size={18} aria-hidden="true" /></a>
            <a href="tel:+912241028890" className="group flex items-center gap-4 py-6"><Phone className="shrink-0 text-[#61cfcc]" size={23} aria-hidden="true" /><span><span className="block text-xs uppercase tracking-widest text-slate-400">Call us</span><span className="mt-2 block text-lg font-semibold group-hover:text-[#61cfcc]">+91 22 4102 8890</span></span><ArrowUpRight className="ml-auto shrink-0 text-[#61cfcc]" size={18} aria-hidden="true" /></a>
            <div className="flex items-start gap-4 py-6"><MapPin className="shrink-0 text-[#61cfcc]" size={23} aria-hidden="true" /><div><span className="block text-xs uppercase tracking-widest text-slate-400">Our location</span><address className="mt-2 text-lg font-semibold not-italic">BKC, Mumbai</address><p className="mt-3 text-sm leading-6">Please contact the team to arrange a meeting and confirm the address before visiting.</p></div></div>
          </div>
          <div className="mt-9">
            <h2 className="text-2xl">What would you like to discuss?</h2>
            <dl className="mt-6 grid gap-6 md:grid-cols-3">
              <div><dt className="font-semibold text-white">Hiring for your organisation</dt><dd className="ml-0 mt-2 text-sm leading-7 text-slate-300">Share the role, key responsibilities, location and your preferred timeline. A draft brief is enough to begin.</dd></div>
              <div><dt className="font-semibold text-white">Strengthening your HR function</dt><dd className="ml-0 mt-2 text-sm leading-7 text-slate-300">Tell us about your team, what is changing and the people processes or leadership challenges you want to address.</dd></div>
              <div><dt className="font-semibold text-white">Exploring a career move</dt><dd className="ml-0 mt-2 text-sm leading-7 text-slate-300">Introduce your experience, interests and preferred location. You can attach your CV when you send your email.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 border-t border-white/20 pt-10 md:grid-cols-[.65fr_1.35fr]">
          <div><p className="eyebrow">BEFORE WE TALK</p><h2 className="text-3xl">A useful first conversation.</h2></div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div><h3>You can start with a question</h3><p className="mt-3 leading-7">You do not need a complete project plan. An outline of your situation and the outcome you want will help us explore a suitable starting point.</p></div>
            <div><h3>Scope comes from the discussion</h3><p className="mt-3 leading-7">For business enquiries, the conversation helps clarify requirements, possible deliverables and next steps. Timelines and fees depend on the support agreed.</p></div>
          </div>
        </div>
        <nav aria-label="Helpful pages" className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm font-semibold text-[#61cfcc]"><Link href="/services" className="inline-flex items-center gap-2">Understand our services <ArrowUpRight size={16} aria-hidden="true" /></Link><Link href="/careers" className="inline-flex items-center gap-2">Prepare for a career conversation <ArrowUpRight size={16} aria-hidden="true" /></Link></nav>
      </section>
    </>
  );
}
