'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Cpu, Landmark, HeartPulse, Factory, ShoppingBag, GraduationCap, BriefcaseBusiness } from 'lucide-react';

const sectors = [
  {
    name: 'Technology', icon: Cpu, theme: 'Build the team behind the product.',
    context: 'Product ambition needs the right mix of engineering depth, commercial understanding and leadership. We help connect hiring priorities with the capabilities your next stage requires.',
    challenge: 'Balancing specialist hiring with the need for managers and processes that can support a growing team.',
    roles: ['Engineering & product', 'Data & analytics', 'Customer success', 'Technology leadership'],
    support: 'Define critical roles, assess talent against your product context and create a workforce plan that connects immediate hiring with future capability.',
    focus: 'Specialist recruitment and talent strategy',
  },
  {
    name: 'BFSI', icon: Landmark, theme: 'Bring sound judgement to critical roles.',
    context: 'Banking, financial services and insurance depend on people who combine functional expertise with care, accountability and customer understanding.',
    challenge: 'Finding the right balance of commercial capability, operational discipline and leadership judgement across teams.',
    roles: ['Finance & operations', 'Risk & compliance', 'Relationship management', 'Business leadership'],
    support: 'Clarify role expectations, structure candidate assessment and develop managers who can communicate responsibilities and lead consistently.',
    focus: 'Executive search and leadership development',
  },
  {
    name: 'Healthcare', icon: HeartPulse, theme: 'Support the people who support others.',
    context: 'Healthcare organisations need coordinated teams across administration, operations and business functions. People practices should help those teams work together effectively.',
    challenge: 'Building management capacity and a consistent employee experience across busy, service-focused environments.',
    roles: ['Hospital administration', 'Operations management', 'HR & people teams', 'Business development'],
    support: 'Strengthen role clarity, improve onboarding and help managers establish feedback and development practices suited to their teams.',
    focus: 'HR consulting and management hiring',
  },
  {
    name: 'Manufacturing', icon: Factory, theme: 'Connect people capability with operations.',
    context: 'From production planning to supply chain coordination, manufacturing brings together specialist knowledge and hands-on management. Clear responsibilities help that work stay connected.',
    challenge: 'Developing supervisors and securing functional talent while preparing for changing production and business needs.',
    roles: ['Plant & operations leadership', 'Quality & engineering', 'Supply chain & procurement', 'People operations'],
    support: 'Map capability needs, identify priorities for recruitment and build practical development plans for supervisors and emerging leaders.',
    focus: 'Workforce planning and leadership development',
  },
  {
    name: 'Retail & E-commerce', icon: ShoppingBag, theme: 'Build consistency across every touchpoint.',
    context: 'Customer experience depends on connected store, digital and fulfilment teams. We help organisations think through the people needs behind their growth plans.',
    challenge: 'Adapting team capacity while keeping onboarding, management and employee communication consistent.',
    roles: ['Retail & category management', 'E-commerce operations', 'Marketing & merchandising', 'Logistics & fulfilment'],
    support: 'Translate growth plans into hiring priorities, strengthen onboarding and create engagement actions that managers can use in everyday work.',
    focus: 'Recruitment and employee engagement',
  },
  {
    name: 'Education', icon: GraduationCap, theme: 'Create the conditions for teams to thrive.',
    context: 'Education organisations bring together academic, administrative and operational teams around a shared purpose. Clear structures and capable leaders help support that collaboration.',
    challenge: 'Aligning diverse teams, strengthening management and planning the capabilities needed for new programmes or locations.',
    roles: ['Institutional leadership', 'Academic administration', 'Admissions & outreach', 'HR & operations'],
    support: 'Define responsibilities, plan leadership appointments and develop people practices that support collaboration and professional growth.',
    focus: 'Leadership search and HR frameworks',
  },
  {
    name: 'Real Estate', icon: Building2, theme: 'Bring the right expertise to every phase.',
    context: 'Real estate teams work across development, projects, sales and ongoing operations. Talent needs shift as projects and portfolios evolve.',
    challenge: 'Matching specialist and leadership capability to project priorities while keeping responsibilities clear across functions.',
    roles: ['Project leadership', 'Sales & customer relations', 'Finance & commercial', 'Facilities & operations'],
    support: 'Prioritise critical appointments, clarify cross-functional roles and shape a talent plan around the stages of your business and projects.',
    focus: 'Specialist hiring and organisational structure',
  },
  {
    name: 'Professional Services', icon: BriefcaseBusiness, theme: 'Grow the expertise your clients rely on.',
    context: 'In advisory and service businesses, people are central to delivery and client relationships. Sustainable growth needs both specialist capability and strong team leadership.',
    challenge: 'Growing delivery capacity while developing managers, retaining knowledge and maintaining a coherent employee experience.',
    roles: ['Practice & business leadership', 'Client relationship teams', 'Specialist consultants', 'Business operations'],
    support: 'Plan hiring around delivery needs, build manager capability and connect performance conversations with meaningful development opportunities.',
    focus: 'Talent strategy and leadership development',
  },
];

export default function IndustriesContent() {
  const [selected, setSelected] = useState(0);
  const sector = sectors[selected];
  const Icon = sector.icon;

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-16 text-center lg:pt-24">
        <p className="eyebrow">INDUSTRY PERSPECTIVES</p>
        <h1 className="mt-6 text-5xl font-bold leading-[1.08] tracking-[-.045em] sm:text-6xl">Different sectors.<br /><span className="text-[#61cfcc]">Different people priorities.</span></h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8">A role only makes sense in context. Explore how we connect talent and HR support with the way your industry works.</p>
      </section>

      <section aria-label="Explore industries" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-950/30">
          <div className="border-b border-white/15 px-5 py-5 sm:px-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.16em]">Choose your sector</p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {sectors.map(({ name, icon: SectorIcon }, index) => (
                <button key={name} type="button" aria-pressed={selected === index} aria-controls="sector-detail" onClick={() => setSelected(index)} className={`flex min-h-16 items-center gap-3 rounded-lg border px-3 py-3 text-left text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#61cfcc] sm:px-4 ${selected === index ? 'border-[#61cfcc] bg-[#61cfcc]/15 text-[#9bf5e5]' : 'border-transparent text-slate-300 hover:border-white/20 hover:bg-white/5'}`}>
                  <SectorIcon size={19} className="shrink-0" aria-hidden="true" />{name}
                </button>
              ))}
            </div>
          </div>
          <div id="sector-detail" aria-live="polite" aria-atomic="true" className="grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <Icon size={40} className="text-[#61cfcc]" aria-hidden="true" />
              <p className="eyebrow mt-7">{sector.name}</p>
              <h2 className="max-w-xl">{sector.theme}</h2>
              <p className="mt-6 leading-8">{sector.context}</p>
              <div className="mt-9 border-l-2 border-[#61cfcc] pl-5">
                <h3 className="text-base">The people challenge</h3>
                <p className="mt-3 leading-7">{sector.challenge}</p>
              </div>
            </div>
            <div className="border-t border-white/10 bg-white/[.04] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <h3 className="text-base">Functions in focus</h3>
              <p className="mt-2 text-sm leading-6">Examples of teams to consider in your talent plan.</p>
              <ul className="mt-5 divide-y divide-white/10">{sector.roles.map(role => <li key={role} className="flex items-center gap-3 py-3 text-sm text-slate-200"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#61cfcc]" />{role}</li>)}</ul>
              <h3 className="mt-8 text-base">Where we can help</h3>
              <p className="mt-3 leading-7">{sector.support}</p>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#61cfcc]">Discuss your {sector.name.toLowerCase()} team <ArrowRight size={18} className="shrink-0" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div><p className="eyebrow">AT A GLANCE</p><h2>Connect your sector to the support.</h2></div>
          <Link href="/services" className="inline-flex items-center gap-2 pb-2 text-sm font-semibold text-[#61cfcc]">Explore our services <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Industry sectors and relevant areas of talent and HR support</caption>
            <thead className="border-y border-white/20 text-[#61cfcc]"><tr><th scope="col" className="px-3 py-4 font-semibold sm:px-5">Industry</th><th scope="col" className="px-3 py-4 font-semibold sm:px-5">Typical starting point</th></tr></thead>
            <tbody>{sectors.map(({ name, focus }) => <tr key={name} className="border-b border-white/10 even:bg-white/[.025]"><th scope="row" className="px-3 py-4 font-medium text-slate-100 sm:px-5">{name}</th><td className="px-3 py-4 leading-6 text-slate-300 sm:px-5">{focus}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-l-2 border-[#61cfcc] pl-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-7">Work across sectors or do not see yours here? Tell us about your business model and the capabilities you need. We can explore the fit together.</p>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#61cfcc]">Talk about your industry <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
