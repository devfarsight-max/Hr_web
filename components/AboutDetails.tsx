import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const values = [
  ['People first', 'Behind every role is a person, and behind every business goal is a team. We consider aspirations, working styles and culture alongside skills and experience.'],
  ['Clarity and honesty', 'Good decisions need candid conversations. We aim to make expectations clear, share practical feedback and keep everyone informed along the way.'],
  ['Context before advice', 'Every organisation has different priorities. We start with your business, your sector and your challenges before shaping a recommendation.'],
  ['Partnership with purpose', 'A successful hire or a new HR process is a starting point. Our focus is on helping teams build the capability to keep moving forward.'],
];

const steps = [
  ['Understand', 'We begin by listening to your goals, current challenges and the people decisions ahead. Together, we define what success should look like.'],
  ['Shape', 'We turn that understanding into a focused plan, whether it involves a leadership search, recruitment support or a stronger HR framework.'],
  ['Deliver', 'We bring structure to the work through clear priorities, considered recommendations and regular conversations about progress.'],
  ['Review', 'We reflect on outcomes, gather feedback and identify the next steps that will help your people and organisation grow.'],
];

export default function AboutDetails() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <p className="eyebrow">OUR PURPOSE</p>
          <h2>Help people and organisations grow together.</h2>
          <p className="copy">The right people decisions connect business ambition with individual potential. We help organisations make those decisions with greater clarity, from identifying talent to developing leaders and strengthening everyday HR practices.</p>
        </Reveal>
        <Reveal className="rounded-2xl bg-[#e8f5f4] p-8 sm:p-10">
          <p className="eyebrow">OUR VISION</p>
          <h3 className="mt-5 text-2xl">Stronger businesses. More meaningful careers.</h3>
          <p className="mt-5 leading-8 text-slate-600">We believe workplaces thrive when people understand their contribution, leaders support their teams and growth creates opportunities for everyone.</p>
          <p className="mt-4 leading-8 text-slate-600">Our role is to connect talent, leadership and people strategy so that each supports the others.</p>
        </Reveal>
      </section>

      <section className="bg-[#F7F9FC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">WHAT GUIDES US</p>
            <h2>Our values, in practice.</h2>
            <p className="copy">The principles behind how we listen, advise and work with you.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map(([title, description], index) => (
              <Reveal key={title} className="rounded-2xl border border-slate-200 bg-white p-8">
                <p className="text-sm font-semibold text-[#61cfcc]">0{index + 1}</p>
                <h3 className="mt-5">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <Reveal>
          <p className="eyebrow">HOW WE WORK</p>
          <h2>From first conversation to practical progress.</h2>
          <p className="copy">A shared understanding of the challenge gives every engagement a clear direction.</p>
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <li key={title} className="border-t-2 border-[#16A6A3] pt-6">
              <span className="text-sm font-semibold text-[#61cfcc]">0{index + 1}</span>
              <h3 className="mt-4">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#e8f5f4] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">WHO WE SUPPORT</p>
            <h2>Two perspectives. A shared opportunity.</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3>For organisations</h3>
              <p className="mt-4 leading-8 text-slate-600">Whether you are building a team, hiring a senior leader or adapting your people practices as you grow, we help connect your immediate needs with your longer-term business goals.</p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#61cfcc]">Explore our services <ArrowRight size={18} aria-hidden="true" /></Link>
            </Reveal>
            <Reveal>
              <h3>For professionals</h3>
              <p className="mt-4 leading-8 text-slate-600">A career move should make sense for your skills, ambitions and priorities. We help you consider opportunities in context and approach your next decision with a clearer understanding of the role.</p>
              <Link href="/careers" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#61cfcc]">Explore your next chapter <ArrowRight size={18} aria-hidden="true" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33] py-20">
        <Reveal className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-[#61cfcc]">LET&apos;S START WITH YOUR GOALS</p>
          <h2 className="max-w-3xl text-white">What is your next people challenge?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Tell us what you are working towards. Together, we can explore the talent, leadership and HR support that fits your next stage.</p>
          <Link href="/contact" className="btn mt-8 bg-white text-[#0B1F33]">Talk to our team <ArrowRight size={18} aria-hidden="true" /></Link>
        </Reveal>
      </section>
    </>
  );
}
