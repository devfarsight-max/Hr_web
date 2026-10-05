'use client';

import { useState, type SyntheticEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactContent() {
  const [prepared, setPrepared] = useState(false);

  function prepareEmail(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => { const value = data.get(name); return typeof value === 'string' ? value.trim() : ''; };
    const body = [
      `Name: ${field('name')}`,
      `Email: ${field('email')}`,
      `Organisation: ${field('company') || 'Not provided'}`,
      `Phone: ${field('phone') || 'Not provided'}`,
      '', field('message'),
    ].join('\r\n');
    window.location.href = `mailto:hello@talentbridge.co?subject=${encodeURIComponent(`Enquiry: ${field('topic')}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:pt-20">
        <p className="eyebrow">CONTACT TALENTBRIDGE</p>
        <h1 className="mt-5 text-5xl font-bold leading-[1.06] tracking-[-.045em] sm:text-6xl">Let&apos;s start a conversation.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8">A hiring brief, a people challenge or a career move. Tell us what brings you here, and help us understand the support you are looking for.</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            <a href="mailto:hello@talentbridge.co" className="group flex items-center gap-4 py-6"><Mail className="shrink-0 text-[#61cfcc]" size={23} aria-hidden="true" /><span className="min-w-0"><span className="block text-xs uppercase tracking-widest text-slate-400">Email us</span><span className="mt-2 block break-words text-lg font-semibold group-hover:text-[#61cfcc]">hello@talentbridge.co</span></span><ArrowUpRight className="ml-auto shrink-0 text-[#61cfcc]" size={18} aria-hidden="true" /></a>
            <a href="tel:+912241028890" className="group flex items-center gap-4 py-6"><Phone className="shrink-0 text-[#61cfcc]" size={23} aria-hidden="true" /><span><span className="block text-xs uppercase tracking-widest text-slate-400">Call us</span><span className="mt-2 block text-lg font-semibold group-hover:text-[#61cfcc]">+91 22 4102 8890</span></span><ArrowUpRight className="ml-auto shrink-0 text-[#61cfcc]" size={18} aria-hidden="true" /></a>
            <div className="flex items-start gap-4 py-6"><MapPin className="shrink-0 text-[#61cfcc]" size={23} aria-hidden="true" /><div><span className="block text-xs uppercase tracking-widest text-slate-400">Our location</span><address className="mt-2 text-lg font-semibold not-italic">BKC, Mumbai</address><p className="mt-3 text-sm leading-6">Please contact the team to arrange a meeting and confirm the address before visiting.</p></div></div>
          </div>
          <div className="mt-9">
            <h2 className="text-2xl">What would you like to discuss?</h2>
            <dl className="mt-6 space-y-6">
              <div><dt className="font-semibold text-white">Hiring for your organisation</dt><dd className="ml-0 mt-2 text-sm leading-7 text-slate-300">Share the role, key responsibilities, location and your preferred timeline. A draft brief is enough to begin.</dd></div>
              <div><dt className="font-semibold text-white">Strengthening your HR function</dt><dd className="ml-0 mt-2 text-sm leading-7 text-slate-300">Tell us about your team, what is changing and the people processes or leadership challenges you want to address.</dd></div>
              <div><dt className="font-semibold text-white">Exploring a career move</dt><dd className="ml-0 mt-2 text-sm leading-7 text-slate-300">Introduce your experience, interests and preferred location. You can attach your CV when you send your email.</dd></div>
            </dl>
          </div>
        </div>

        <form onSubmit={prepareEmail} className="self-start rounded-2xl p-6 sm:p-9">
          <p className="eyebrow">YOUR ENQUIRY</p>
          <h2 className="mt-4 text-3xl">Give us a little context.</h2>
          <p id="enquiry-help" className="mt-4 text-sm leading-7">Complete the details below to prepare an email. Your email app will open so you can review the message and send it. Fields marked * are required.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold" htmlFor="contact-name">Full name *<input id="contact-name" name="name" autoComplete="name" required maxLength={100} className="mt-2 w-full rounded-lg border p-3" /></label>
            <label className="text-sm font-semibold" htmlFor="contact-email">Email address *<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="mt-2 w-full rounded-lg border p-3" /></label>
            <label className="text-sm font-semibold" htmlFor="contact-company">Organisation <span className="font-normal text-slate-400">(optional)</span><input id="contact-company" name="company" autoComplete="organization" maxLength={150} className="mt-2 w-full rounded-lg border p-3" /></label>
            <label className="text-sm font-semibold" htmlFor="contact-phone">Phone <span className="font-normal text-slate-400">(optional)</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className="mt-2 w-full rounded-lg border p-3" /></label>
            <label className="text-sm font-semibold sm:col-span-2" htmlFor="contact-topic">What is your enquiry about? *<select id="contact-topic" name="topic" required defaultValue="" className="mt-2 w-full rounded-lg border p-3"><option value="" disabled>Select a topic</option><option>Recruitment & Executive Search</option><option>HR Consulting</option><option>Leadership Development</option><option>Employee Engagement</option><option>Talent Strategy</option><option>Career Opportunities</option><option>General Enquiry</option></select></label>
            <label className="text-sm font-semibold sm:col-span-2" htmlFor="contact-message">How can we help? *<textarea id="contact-message" name="message" required rows={5} maxLength={1500} placeholder="Share your goals, the support you need and any important timing." className="mt-2 w-full rounded-lg border p-3" /></label>
          </div>
          <button type="submit" aria-describedby="enquiry-help" className="btn mt-6 bg-[#2457A6] text-white">Prepare email <ArrowUpRight size={18} aria-hidden="true" /></button>
          <p className="mt-4 text-xs leading-6">Prefer to write directly? Email <a className="text-[#61cfcc] underline underline-offset-4" href="mailto:hello@talentbridge.co">hello@talentbridge.co</a>.</p>
          {prepared && <output className="block mt-5 border-l-2 border-[#61cfcc] pl-4 text-sm leading-7">Your email draft has been requested. Send it from your email app to complete your enquiry. If no app opened, use the email address above and copy your details from this form.</output>}
        </form>
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
