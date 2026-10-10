import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Mail, Compass, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const preparation = [
  'Update your CV with recent responsibilities and clear examples of your impact.',
  'Choose two or three achievements you can explain in an interview.',
  'Identify the roles, locations and working arrangements you would consider.',
  'Think through your notice period and availability for conversations.',
  'Prepare questions about the team, expectations and development opportunities.',
];

export default function CareersContent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:pt-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
          <p className="eyebrow mb-0">THE CANDIDATE GUIDE</p>
          <span className="text-xs uppercase tracking-[.18em] text-slate-400">Careers at our client organisations</span>
        </div>
        <Reveal className="mt-10 grid items-end gap-10 lg:grid-cols-[1.4fr_.6fr]">
          <h1 className="text-5xl font-bold leading-[1.04] tracking-[-.05em] sm:text-7xl">Your experience.<br />Your ambition.<br /><span className="text-[#61cfcc]">Your next chapter.</span></h1>
          <div>
            <p className="text-lg leading-8">A good career move starts with understanding what matters to you. We connect professionals with organisations and help bring context to the decisions along the way.</p>
            <a href="#career-conversation" className="mt-7 inline-flex items-center gap-3 border-b border-[#61cfcc]/50 pb-3 font-semibold text-[#61cfcc]">Start a career conversation <ArrowDown size={18} aria-hidden="true" /></a>
          </div>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-y border-white/10 py-5 text-sm text-slate-300">
          <span>Considering a change</span><span className="text-[#61cfcc]" aria-hidden="true">/</span><span>Taking on more responsibility</span><span className="text-[#61cfcc]" aria-hidden="true">/</span><span>Exploring a new direction</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div>
          <Compass className="text-[#61cfcc]" size={32} aria-hidden="true" />
          <h2 className="mt-5">Look beyond the job title.</h2>
          <p className="mt-6 text-lg leading-8">The next step should fit both what you can contribute and what you want to learn. Before exploring an opportunity, give yourself space to define a good move.</p>
          <dl className="mt-8 space-y-7">
            {[
              ['The work', 'Which problems do you enjoy solving? Consider the responsibilities you want more of, and the skills you want to use every day.'],
              ['The environment', 'Think about the management style, team culture and working arrangements that help you do your best work.'],
              ['The direction', 'Look at what the role could help you learn and where it might lead. A wider scope or a new capability can matter as much as a new title.'],
            ].map(([title, description]) => <div key={title} className="border-l border-[#61cfcc]/50 pl-5"><dt className="font-semibold text-white">{title}</dt><dd className="ml-0 mt-2 leading-7 text-slate-300">{description}</dd></div>)}
          </dl>
        </div>
        <aside className="self-start rounded-xl border border-white/15 bg-white/[.04] p-7 sm:p-9">
          <p className="eyebrow">YOUR PREPARATION NOTES</p>
          <h3 className="mt-4 text-2xl">Ready for the conversation?</h3>
          <p className="mt-4 text-sm leading-7">Use this checklist to organise your thoughts. These checks are for your own preparation and are not submitted.</p>
          <fieldset className="mt-6 space-y-5">
            <legend className="sr-only">Career conversation preparation checklist</legend>
            {preparation.map(item => <label key={item} className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-slate-200"><input type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-[#61cfcc]" /><span>{item}</span></label>)}
          </fieldset>
          <p className="mt-7 border-t border-white/15 pt-5 text-sm leading-6">Specific examples are more useful than a long list of skills. Explain the situation, your contribution and the result.</p>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="border-y border-white/20 py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
            <div><MessageCircle size={30} className="text-[#61cfcc]" aria-hidden="true" /><p className="eyebrow mt-5">WORKING WITH A RECRUITER</p><h2>A clearer view of the opportunity.</h2></div>
            <div className="space-y-8">
              <div><h3>Bring your priorities into the conversation</h3><p className="mt-3 leading-8">Tell us about your experience, interests and practical requirements. If a role is relevant, the discussion can explore how its responsibilities and expectations align with your goals.</p></div>
              <div><h3>Ask the questions that matter</h3><p className="mt-3 leading-8">Use conversations to understand the reporting line, team priorities, interview stages and what success in the role would look like. Raise any important uncertainties before making a decision.</p></div>
              <div><h3>Make a considered decision</h3><p className="mt-3 leading-8">Review the full opportunity, including responsibilities, compensation, location and development. Recruitment depends on the employer&apos;s requirements and selection process; an introduction does not guarantee an interview or offer.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="career-conversation" className="mx-auto grid max-w-7xl scroll-mt-28 gap-10 px-6 pb-20 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="eyebrow">INTRODUCE YOURSELF</p>
          <h2 className="max-w-xl">Tell us what you want to do next.</h2>
          <p className="mt-6 max-w-xl leading-8">Email a short introduction with your area of expertise, the kind of role you are considering and your preferred location. You can attach your CV in your email app.</p>
          <a href="mailto:hrm@orvantahrconsultancy.com?subject=Career%20enquiry" className="btn mt-7 bg-[#2457A6] text-white"><Mail size={18} aria-hidden="true" />Email your career enquiry</a>
          <p className="mt-4 text-sm">hrm@orvantahrconsultancy.com</p>
        </div>
        <div className="border-t border-[#61cfcc]/40 pt-6 lg:border-l lg:border-t-0 lg:pl-8">
          <h3>Exploring where your skills could fit?</h3>
          <p className="mt-4 leading-7">Our industry guide outlines the functions and people priorities across the sectors we support, from technology and financial services to education and manufacturing.</p>
          <Link href="/industries" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#61cfcc]">Explore the industries <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <div className="mt-8 border-t border-white/15 pt-6"><h3 className="text-base">About opportunities</h3><p className="mt-3 text-sm leading-7">This page is a guide for candidates, with no live vacancy listings. Contact the team to discuss whether current searches align with your experience.</p></div>
        </div>
      </section>
    </>
  );
}
