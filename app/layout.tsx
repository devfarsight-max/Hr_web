import type { Metadata } from 'next';
import './globals.css';
import PageMotion from '../components/PageMotion';
export const metadata: Metadata={title:'TalentBridge Consulting | HR & Recruitment Solutions',description:'TalentBridge Consulting helps organizations build exceptional teams through recruitment, executive search, HR consulting, and talent strategy.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><PageMotion/>{children}</body></html>}
