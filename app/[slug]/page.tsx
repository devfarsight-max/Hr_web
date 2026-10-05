
import {Reveal} from '../../components/Reveal';
import SiteHeader from '../../components/SiteHeader';
import AboutDetails from '../../components/AboutDetails';
import ServicesContent from '../../components/ServicesContent';
import IndustriesContent from '../../components/IndustriesContent';
import CareersContent from '../../components/CareersContent';
import InsightsContent from '../../components/InsightsContent';
import ContactContent from '../../components/ContactContent';
const imgs={about:'1542744173-8e7e53415bb0',services:'1551836022-4c4c79ecde51',industries:'1524758631624-e2822e304c36',careers:'1517048676732-d65bc937f952',insights:'1552664730-d307ca884978',contact:'1556761175-5973dc0f32e7'};
const photo=(id:string,w=1200)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;
function Hero({label,title,intro,img}:{label:string;title:string;intro:string;img:string}){return <section className="relative overflow-hidden bg-[#F7F9FC]"><div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-[1fr_.88fr]"><Reveal className="flex min-h-[470px] flex-col justify-center py-16"><p className="eyebrow">{label}</p><h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-.05em] text-[#0B1F33] sm:text-6xl">{title}</h1><p className="copy">{intro}</p></Reveal><Reveal className="relative"><img className="h-full min-h-[340px] w-full object-cover" src={photo(img)} alt="TalentBridge professional team"/><span className="absolute bottom-0 left-0 h-24 w-24 bg-[#16A6A3]"/></Reveal></div></section>}
function About(){return <><Hero label="OUR POINT OF VIEW" title="The human side of business, made strategic." intro="We help leaders turn complex people decisions into a genuine source of business advantage." img={imgs.about}/><section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">HOW WE THINK</p><h2>Better outcomes begin with better questions.</h2></Reveal><Reveal className="grid gap-8"><p className="text-xl leading-9 text-slate-600">TalentBridge is a people advisory firm for organisations navigating growth, change and ambition. We combine rigorous search with practical HR counsel.</p>{['We listen before we advise.','We understand the sector before we map the market.','We stay accountable beyond the placement.'].map((x,i)=><div className="flex gap-5 border-t pt-5" key={x}><b className="text-[#16A6A3]">0{i+1}</b><p className="font-semibold text-[#0B1F33]">{x}</p></div>)}</Reveal></section><section className="bg-[#0B1F33] py-20 text-white"><div className="mx-auto max-w-7xl px-6"><p className="eyebrow text-[#61cfcc]">OUR TRACK RECORD</p><div className="mt-9 grid grid-cols-2 gap-8 md:grid-cols-4">{[['500+','placements'],['50+','client partners'],['10+','years of expertise'],['95%','client satisfaction']].map(x=><div key={x[0]}><b className="text-4xl text-[#61cfcc]">{x[0]}</b><p className="mt-2 text-slate-300">{x[1]}</p></div>)}</div></div></section><AboutDetails/></>}
function Services(){return <ServicesContent/>}
function Industries(){return <IndustriesContent/>}
function Careers(){return <CareersContent/>}
function Insights(){return <InsightsContent/>}
function Contact(){return <ContactContent/>}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const C=({about:About,services:Services,industries:Industries,careers:Careers,insights:Insights,contact:Contact} as Record<string,()=>React.ReactNode>)[slug]??About;return <main><SiteHeader active={slug}/><C/></main>}
