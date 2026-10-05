import Link from 'next/link';
import { ArrowUpRight, BookOpen, Plus } from 'lucide-react';

const articles = [
  {
    id: 'hiring-brief', category: 'HIRING', title: 'A better hire starts with a better brief.',
    summary: 'Before building a shortlist, agree on the work the person will actually need to do.',
    sections: [
      ['Start with outcomes', 'A job description can become a list of everything a team wishes it had. Begin instead with the outcomes the role should own. What needs to be different six months after the person joins? Which decisions will they make, and where will they need support? Use those answers to describe the work before listing qualifications.'],
      ['Separate essential from learnable', 'Discuss which capabilities are needed from day one and which can develop with support. Ask why each requirement matters. If a particular industry background is essential, connect it to a real responsibility. If it is simply familiar, consider whether relevant experience from another setting could also fit.'],
      ['Give interviewers a shared reference', 'Agree on a small set of assessment criteria and the evidence you want to explore. Ask candidates for examples of comparable work, and record observations before discussing an overall impression. A shared brief gives the team a clearer basis for comparing candidates and explaining decisions.'],
    ],
    takeaway: 'Before opening a role, write down three outcomes and the evidence that would demonstrate a candidate can deliver them.',
  },
  {
    id: 'team-clarity', category: 'TEAM EFFECTIVENESS', title: 'When a busy team needs clarity, not another meeting.',
    summary: 'Make ownership, decisions and handovers easier to understand.',
    sections: [
      ['Find the point of friction', 'When work slows down, look at a recent example with the people involved. Was the goal unclear? Did two people believe someone else owned the next step? Did a decision wait for an unavailable approver? Describe the specific breakdown before changing the meeting schedule.'],
      ['Make the handover visible', 'For recurring work, name the person responsible for the outcome, the people who contribute and the point at which a decision is needed. Keep this simple enough to use. A short written agreement about inputs, deadlines and ownership can make a handover easier to discuss.'],
      ['Review the agreement in practice', 'Try the new arrangement on a real piece of work. Ask what became clearer and where confusion remained. Adjust the agreement as responsibilities change, and give people a way to flag a blocked decision early. The aim is a workable shared understanding of how the team operates.'],
    ],
    takeaway: 'Choose one recurring handover and clarify its owner, required input and next decision.',
  },
  {
    id: 'new-managers', category: 'LEADERSHIP', title: 'Give first-time managers more than a new title.',
    summary: 'Turn the move from individual contributor to manager into a supported transition.',
    sections: [
      ['Explain what has changed', 'A strong individual contributor may be used to solving problems personally. Management adds responsibility for priorities, feedback and the conditions in which others work. Discuss which previous duties remain, which should be delegated and how success will now be assessed.'],
      ['Practise everyday conversations', 'Use real situations to prepare for one-to-ones, delegation and feedback. A useful delegation discussion covers the outcome, boundaries, available support and a check-in point. Feedback should describe observable work and invite the other person to explain their perspective.'],
      ['Create space to ask for help', 'Agree on regular conversations with the new manager about decisions they find difficult. Discuss what they tried, what happened and what they could do next. Make it clear where they can find guidance on people processes instead of expecting them to invent an answer.'],
    ],
    takeaway: 'Ask a new manager which conversation they are avoiding, then help them prepare for it.',
  },
  {
    id: 'employee-listening', category: 'EMPLOYEE EXPERIENCE', title: 'Close the loop after asking for feedback.',
    summary: 'Connect employee listening with visible decisions and realistic next steps.',
    sections: [
      ['Be clear about the question', 'Before requesting feedback, explain what you want to understand and how responses will inform decisions. Choose questions the organisation is prepared to discuss. Be explicit about how feedback will be handled and avoid making promises about anonymity that the process cannot support.'],
      ['Share what you understood', 'Summarise the themes without exposing individual responses. Give employees a chance to clarify whether the summary reflects their experience. Distinguish issues that can be acted on immediately from those that need more investigation or a wider business decision.'],
      ['Choose an action people can recognise', 'Select a manageable priority, name an owner and explain when an update will follow. Tell people what is changing, what is still being considered and what cannot change at present. Return to the topic later to understand whether the action addressed the original concern.'],
    ],
    takeaway: 'For each listening exercise, plan the follow-up conversation before sending the first question.',
  },
  {
    id: 'workforce-planning', category: 'PEOPLE STRATEGY', title: 'Turn a growth plan into a capability conversation.',
    summary: 'Look at the work ahead before turning every gap into a vacancy.',
    sections: [
      ['Translate ambition into work', 'Take a business priority, such as launching a service or supporting more customers, and describe the activities it creates. Identify the decisions, specialist knowledge and management time involved. This helps the team discuss capability needs in concrete terms.'],
      ['Consider more than one response', 'For each gap, explore whether the answer is hiring, developing an existing colleague, redesigning work or seeking focused external support. Consider the time available for learning and the effect of moving responsibilities between people. Make assumptions visible so they can be challenged.'],
      ['Sequence the priorities', 'Some capabilities are needed before others can be useful. Agree on the most important dependencies and review them as the business plan develops. A simple roadmap with owners and review points is a practical starting point for a continuing workforce conversation.'],
    ],
    takeaway: 'Choose one business goal and list the capabilities it needs before discussing headcount.',
  },
];

function ArticleBody({ article }: { article: typeof articles[number] }) {
  return (
    <div className="mt-8 max-w-3xl">
      {article.sections.map(([heading, body]) => <div key={heading} className="mb-7"><h3 className="text-xl">{heading}</h3><p className="mt-3 leading-8">{body}</p></div>)}
      <div className="border-l-2 border-[#61cfcc] bg-white/[.035] p-5 sm:p-6"><p className="eyebrow">PUT IT INTO PRACTICE</p><p className="mt-3 leading-7">{article.takeaway}</p></div>
    </div>
  );
}

export default function InsightsContent() {
  const featured = articles[0];
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:pt-20">
        <div className="flex items-center justify-between gap-5 border-y border-white/20 py-4"><p className="eyebrow mb-0">TALENTBRIDGE / INSIGHTS</p><BookOpen size={20} className="text-[#61cfcc]" aria-hidden="true" /></div>
        <div className="mt-9 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h1 className="text-6xl font-bold leading-none tracking-[-.055em] sm:text-8xl">People at work.</h1>
          <p className="max-w-md text-lg leading-8">Practical ideas for the hiring decisions, team conversations and leadership challenges in front of you.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-[1.7fr_.8fr]">
        <div className="border-t-4 border-[#61cfcc] pt-7">
          <p className="eyebrow">FEATURED PERSPECTIVE / {featured.category}</p>
          <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">{featured.title}</h2>
          <p className="mt-5 max-w-2xl text-xl leading-8">{featured.summary}</p>
          <ArticleBody article={featured} />
        </div>
        <aside className="self-start border-t border-white/20 pt-7 lg:border-l lg:border-t-0 lg:pl-8">
          <p className="eyebrow">IN THIS COLLECTION</p>
          <nav aria-label="Insight articles" className="mt-6 divide-y divide-white/15">
            {articles.slice(1).map(article => <a key={article.id} href={`#${article.id}`} className="group block py-6 first:pt-0"><span className="text-xs tracking-wider text-[#61cfcc]">{article.category}</span><span className="mt-3 flex items-start gap-3 text-lg font-semibold leading-7 text-slate-100 group-hover:text-[#61cfcc]">{article.title}<ArrowUpRight size={18} className="mt-1 shrink-0" aria-hidden="true" /></span></a>)}
          </nav>
          <div className="mt-6 border-t border-white/20 pt-6"><h3 className="text-base">A question for your next meeting</h3><p className="mt-3 leading-7">Which people decision would become easier if everyone agreed on what success looks like?</p></div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-white/20 pb-5"><h2 className="mt-0">The reading room.</h2><p className="text-sm">Open a perspective to read the full article.</p></div>
        <div className="divide-y divide-white/15">
          {articles.slice(1).map(article => (
            <details key={article.id} id={article.id} className="group scroll-mt-28 py-8">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#61cfcc] [&::-webkit-details-marker]:hidden">
                <span className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8"><span className="pt-1 text-xs font-semibold leading-6 tracking-wider text-[#61cfcc]">{article.category}</span><span><span className="block text-2xl font-semibold leading-tight text-white sm:text-3xl">{article.title}</span><span className="mt-3 block max-w-2xl leading-7 text-slate-300">{article.summary}</span></span></span>
                <Plus size={23} className="mt-1 shrink-0 text-[#61cfcc] transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <div className="md:pl-[212px]"><ArticleBody article={article} /></div>
            </details>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-5 border-t-2 border-[#61cfcc]/50 pt-7 sm:flex-row sm:items-center"><p className="max-w-xl leading-7">Have a people challenge behind one of these topics? Explore how our services can support your next step.</p><Link href="/services" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#61cfcc]">Connect ideas to action <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </section>
    </>
  );
}
