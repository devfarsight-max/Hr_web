'use client';
import {motion} from 'framer-motion';
import type {ReactNode} from 'react';
export function Reveal({children,delay=0,className}:{children:ReactNode;delay?:number;className?:string}){return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.55,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Stagger({children,className}:{children:ReactNode;className?:string}){return <motion.div className={className} initial="hidden" whileInView="show" viewport={{once:true,amount:.12}} variants={{hidden:{},show:{transition:{staggerChildren:.09}}}}>{children}</motion.div>}
export function CardMotion({children}:{children:ReactNode}){return <motion.div variants={{hidden:{opacity:0,y:22},show:{opacity:1,y:0,transition:{duration:.45}}}} whileHover={{y:-7}} transition={{duration:.2}}>{children}</motion.div>}
