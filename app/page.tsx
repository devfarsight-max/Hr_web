import HomeContent from '../components/HomeContent';
import { pageMetadata } from '../lib/seo';
export const metadata = pageMetadata('home');
export default function Home() { return <HomeContent />; }
