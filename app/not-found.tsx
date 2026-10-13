import Link from 'next/link';
export default function NotFound() {
 return <main className="mx-auto max-w-7xl px-6 py-24"><p className="eyebrow">PAGE NOT FOUND</p><h1 className="mt-5 text-4xl font-bold">We couldn&apos;t find that page.</h1><p className="mt-5">Explore our HR and recruitment services or return to the homepage.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/" className="btn bg-[#087f7c] text-white">Back to home</Link><Link href="/services" className="btn border">Explore services</Link></div></main>;
}
