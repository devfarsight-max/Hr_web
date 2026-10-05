import Link from 'next/link';
import { ArrowRight, Search, Users, BriefcaseBusiness, GraduationCap, HeartHandshake, Target, Check } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    title: 'Executive Search', icon: Search,
    intro: 'Find leaders who can turn your business ambition into direction, decisions and action.',
    fit: 'Senior appointments, business transformation and leadership succession.',
    items: ['Role definition and leadership success criteria', 'Talent mapping and targeted candidate outreach', 'Candidate evaluation and shortlist discussions', 'Interview coordination and offer-stage support'],
  },
  {
    title: 'Recruitment & Staffing', icon: Users,
    intro: 'Build the capacity your team needs with a structured approach to finding and assessing talent.',
    fit: 'Growing teams, specialist vacancies and changing workforce needs.',
    items: ['Hiring priorities and role requirements', 'Candidate sourcing and initial screening', 'Shortlists aligned with skills and team needs', 'Interview feedback and joining coordination'],
  },
  {
    title: 'HR Consulting', icon: BriefcaseBusiness,
    intro: 'Create practical people processes that support your employees and keep pace with your business.',
    fit: 'Organisations establishing an HR function or improving existing practices.',
    items: ['Review of current HR practices and priorities', 'Role clarity and organisational structure', 'Onboarding and employee lifecycle processes', 'Performance frameworks and implementation guidance'],
  },
  {
    title: 'Leadership Development', icon: GraduationCap,
    intro: 'Help managers lead with greater confidence and give emerging leaders room to develop.',
    fit: 'New managers, developing leaders and teams navigating change.',
    items: ['Leadership capability and development needs', 'Learning plans connected to everyday challenges', 'Communication, delegation and feedback skills', 'Development goals and progress reviews'],
  },
  {
    title: 'Employee Engagement', icon: HeartHandshake,
    intro: 'Understand the employee experience and turn feedback into meaningful improvements at work.',
    fit: 'Teams seeking stronger connection, collaboration and retention.',
    items: ['Employee listening and feedback planning', 'Engagement themes and improvement priorities', 'Manager conversations and recognition practices', 'Action planning and follow-up measures'],
  },
  {
    title: 'Talent Strategy', icon: Target,
    intro: 'Connect the skills you have today with the capabilities your business will need next.',
    fit: 'Businesses planning growth, new capabilities or organisational change.',
    items: ['Workforce needs and capability gap assessment', 'Hiring and internal development priorities', 'Succession planning for critical roles', 'A people roadmap aligned with business goals'],
  },
];

export default function ServicesContent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:pt-24">
        <Reveal>
          <div className="flex items-center gap-4"><span className="h-px w-12 bg-[#61cfcc]" /><p className="eyebrow mb-0">THE SERVICE DIRECTORY</p></div>
          <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.03] tracking-[-.05em] sm:text-7xl lg:text-8xl">What does your<br />team need next?</h1>
          <div className="mt-10 grid gap-6 border-b border-white/15 pb-10 md:grid-cols-[1fr_1.3fr]">
            <p className="text-sm uppercase tracking-[.15em]">Talent. Leadership. Organisation.</p>
            <p className="max-w-xl text-lg leading-8">A critical appointment, a stronger management team or a people function ready for growth. Explore the support that fits the challenge in front of you.</p>
          </div>
        </Reveal>
        <nav aria-label="Find a service" className="mt-8 flex flex-wrap gap-3">
          {['Find the right people', 'Strengthen your organisation', 'Develop your team'].map((label, index) => <a key={label} href={`#service-${[0, 2, 3][index]}`} className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm transition hover:border-[#61cfcc] hover:text-[#61cfcc]">{label}<ArrowRight size={15} aria-hidden="true" /></a>)}
        </nav>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:self-start">
          <div className="border-l border-[#61cfcc]/40 pl-5">
            <p className="eyebrow">EXPLORE OUR EXPERTISE</p>
            <nav aria-label="Service directory" className="mt-6 flex flex-col gap-4">
              {services.map(({ title }, index) => <a key={title} href={`#service-${index}`} className="flex gap-3 text-sm leading-6 text-slate-300 transition hover:text-[#61cfcc]"><span className="text-[#61cfcc]">0{index + 1}</span>{title}</a>)}
            </nav>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#61cfcc]">Help me choose <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </aside>
        <div>
          {services.map(({ title, icon: Icon, intro, fit, items }, index) => (
            <div id={`service-${index}`} key={title} className="scroll-mt-28 border-t border-white/20 py-10 first:border-t-0 first:pt-0 sm:py-14">
              <Reveal>
                <div className="flex items-center justify-between"><span className="text-sm tracking-[.2em] text-[#61cfcc]">SERVICE / 0{index + 1}</span><Icon size={25} className="text-[#61cfcc]" aria-hidden="true" /></div>
                <h2 className="mt-5">{title}</h2>
                <p className="mt-5 max-w-2xl text-xl leading-8">{intro}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-[.85fr_1.15fr]">
                  <div className="border-l-2 border-[#61cfcc]/50 pl-5">
                    <h3 className="text-sm uppercase tracking-wider">When to bring us in</h3>
                    <p className="mt-3 text-sm leading-7">{fit}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider">The scope</h3>
                    <ul className="mt-4 space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><Check size={16} className="mt-1 shrink-0 text-[#61cfcc]" aria-hidden="true" />{item}</li>)}</ul>
                  </div>
                </div>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-3 border-b border-[#61cfcc]/40 pb-2 text-sm font-semibold text-[#61cfcc]">Discuss {title.toLowerCase()} <ArrowRight size={17} aria-hidden="true" /></Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 border-y border-white/20 py-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">SHAPE YOUR BRIEF</p>
            <h2 className="max-w-md">Start with the challenge.</h2>
            <p className="mt-5 max-w-md leading-7">You do not need a finished plan. Tell us what needs to change, and we can explore the right scope together.</p>
            <Link href="/contact" className="btn mt-7 bg-[#2457A6] text-white">Bring us your brief <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="divide-y divide-white/15">
            {[
              ['What should I share?', 'Your business goal, the roles or teams involved, current challenges and any important deadlines. An outline is enough for an initial conversation.'],
              ['Can services be combined?', 'Yes. A hiring need may connect with leadership development or a broader talent plan. We can discuss a combined scope around your priorities.'],
              ['How are fees and timing agreed?', 'The scope, complexity and level of support determine the proposal. Deliverables, responsibilities, timelines and commercial terms are agreed before work begins.'],
            ].map(([question, answer]) => <details key={question} className="group py-5 first:pt-0"><summary className="cursor-pointer py-2 text-lg font-semibold marker:text-[#61cfcc]">{question}</summary><p className="mt-3 pl-4 leading-7">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}