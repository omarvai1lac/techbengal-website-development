'use client'

import Link from 'next/link'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ArrowUpRight, Cpu, Menu, Moon, Network, Sun, X, Zap } from 'lucide-react'
import { HomepagePrdSections } from './homepage-prd-sections'

const navItems = [
  ['Services', '/services'],
  ['Technology', '/technology'],
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Insights', '/insights'],
  ['Contact', '/contact'],
] as const

const navBn: Record<string, string> = { Services: 'সেবাসমূহ', Technology: 'প্রযুক্তি', Projects: 'প্রকল্প', About: 'আমাদের কথা', Insights: 'ভাবনা', Contact: 'যোগাযোগ' }

const LanguageContext = createContext({ isBangla: false, toggleLanguage: () => {} })
export function useLanguage() { return useContext(LanguageContext) }

const navDropdowns: Record<string, { label: string; href: string; detail: string }[]> = {
  Services: [
    { label: 'UI/UX Design', href: '/services/ui-ux-design', detail: 'Clear interfaces with character.' },
    { label: 'Website Development', href: '/services/website-development', detail: 'Fast digital experiences that move.' },
    { label: 'AI Automation', href: '/services/ai-automation', detail: 'Practical intelligence for momentum.' },
    { label: 'Digital Marketing', href: '/services/digital-marketing', detail: 'Reach the right audience with intent.' },
    { label: 'Business Support', href: '/services/business-support', detail: 'A steady partner for important decisions.' },
    { label: 'Custom Software', href: '/services/custom-software-development', detail: 'Systems built around your business.' },
  ],
  Technology: [
    { label: 'Software & Digital', href: '/technology/software-digital-solutions', detail: 'Products, platforms, and systems.' },
    { label: 'Electronics & Hardware', href: '/technology/electronics', detail: 'Connected ideas brought to life.' },
    { label: 'Semiconductors & Robotics', href: '/technology/semiconductors', detail: 'The components shaping tomorrow.' },
  ],
  Projects: [
    { label: 'Selected work', href: '/projects', detail: 'A look at what we have built.' },
    { label: 'Start a project', href: '/start-a-project', detail: 'Bring your next idea to life.' },
  ],
  About: [
    { label: 'Our approach', href: '/about', detail: 'Technology with intent.' },
    { label: 'Contact the team', href: '/contact', detail: 'Let us find the right next step.' },
  ],
  Insights: [
    { label: 'Technology notes', href: '/insights', detail: 'Ideas for what comes next.' },
    { label: 'Future signals', href: '/insights', detail: 'Patterns worth paying attention to.' },
  ],
  Contact: [
    { label: 'Start a conversation', href: '/contact', detail: 'Tell us what you are working on.' },
    { label: 'Order a project', href: '/start-a-project/order', detail: 'Send a focused project brief.' },
  ],
}

const divisions = [
  { number: '01', title: 'Software & Digital Solution', text: 'Digital experiences, custom software, and intelligent automation designed to help businesses operate and grow.', href: '/technology/software-digital-solutions', icon: Network, tone: 'cyan', tags: ['UI/UX', 'Websites', 'AI automation'] },
  { number: '02', title: 'Electronics & Hardware', text: 'Exploring electronic products, hardware development, embedded technologies, and engineering-led innovation.', href: '/technology/electronics', icon: Cpu, tone: 'violet', tags: ['Embedded systems', 'IoT', 'Prototyping'] },
  { number: '03', title: 'Semiconductors, Robotics & Microchips', text: 'A technology focus on microelectronics, chip-related engineering, robotics systems, autonomous machines, semiconductor research, and future computing technologies.', href: '/technology/semiconductors', icon: Zap, tone: 'amber', tags: ['Robotics', 'Microelectronics', 'IC design'] },
] as const

const services = [
  ['01', 'UI/UX Design', 'Interfaces with clarity, character, and a point of view.'],
  ['02', 'Website Development', 'Fast, expressive websites built to move your business forward.'],
  ['03', 'Custom Software', 'Purpose-built systems for the work generic tools cannot handle.'],
  ['04', 'AI Automation', 'Practical intelligence that turns repetitive work into momentum.'],
  ['05', 'Digital Growth', 'Content and campaigns that make your best work easier to find.'],
  ['06', 'Business Support', 'A steady technical partner for your next important decision.'],
] as const

const serviceNamesBn = ['ইউআই/ইউএক্স ডিজাইন', 'ল্যান্ডিং পেজ', 'ওয়েবসাইট ডেভেলপমেন্ট', 'কাস্টম সফটওয়্যার', 'এআই অটোমেশন', 'এআই ইন্টিগ্রেশন', 'ডিজিটাল মার্কেটিং', 'সেলস অটোমেশন', 'এআই-চালিত মার্কেটিং অটোমেশন']

const brandLogoUrl = '/logo.png'

const serviceSlides = [
  ['UI/UX Design', 'Design Experiences That Turn Visitors Into Customers.', 'এমন অভিজ্ঞতা তৈরি করি, যা দর্শককে গ্রাহকে পরিণত করে।'],
  ['Landing Pages', 'Turn Clicks Into Leads. Turn Leads Into Opportunities.', 'ক্লিককে লিডে, আর লিডকে ব্যবসার সুযোগে রূপ দিই।'],
  ['Website Development', 'Build a Digital Presence That Works for Your Business.', 'আপনার ব্যবসার জন্য সত্যিই কাজ করে—এমন ডিজিটাল উপস্থিতি তৈরি করি।'],
  ['Custom Software', 'Replace Operational Complexity With Smarter Systems.', 'জটিল কাজকে সহজ, বুদ্ধিমান সিস্টেমে বদলে দিই।'],
  ['AI Automation', 'Let AI Handle Repetitive Work. Free Your Team to Grow.', 'একঘেয়ে কাজ AI-কে দিন, আপনার দলকে এগিয়ে যাওয়ার সুযোগ দিন।'],
  ['AI Integration', 'Bring Intelligence Into the Tools You Already Use.', 'আপনার ব্যবহৃত ��ুলগুলোর মধ্যেই বুদ্ধিমান AI যুক্ত করি।'],
  ['Digital Marketing', 'Reach the Right Audience. Make Every Campaign Count.', 'সঠিক মানুষের কাছে পৌঁছান, ��্রতিটি প্রচারণাকে ফলপ্রসূ করুন।'],
  ['Sales Automation', 'Move Leads Through Your Sales Pipeline More Efficiently.', 'লিডকে আরও দক্ষতার সঙ্গে বিক্রয়ের পথে এগিয়ে নিন।'],
  ['AI-Powered Marketing Automation', 'Personalize Campaigns. Automate Engagement. Scale Smarter.', 'ব্যক্তিগত প্রচারণা চালান, যোগাযোগ স্বয়ংক্রিয় করুন, বুদ্ধিমানের মতো বড় হন।'],
] as const

function Mark() {
  return <span className="brand-logo-frame" aria-hidden="true"><img src={brandLogoUrl} alt="" /></span>
}

function Header({ isLight, onToggleTheme, isBangla, onToggleLanguage }: { isLight: boolean; onToggleTheme: () => void; isBangla: boolean; onToggleLanguage: () => void }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="wordmark" aria-label="TechBengal home"><Mark /><span>Tech<span className="wordmark-accent">Bengal</span></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <div className="nav-dropdown-wrap" key={href}><Link className="nav-dropdown-trigger" href={href} aria-haspopup="true">{isBangla ? navBn[label] : label}</Link><div className="nav-dropdown" role="menu">{navDropdowns[label].map(item => <Link key={`${label}-${item.label}`} href={item.href} role="menuitem"><strong>{isBangla && label === 'Technology' ? item.label.replace('Software & Digital', 'সফটওয়্যার ও ডিজিটাল').replace('Electronics & Hardware', 'ইলেকট্রনিক্স ও হার্ডওয়্যার').replace('Semiconductors & Robotics', 'সেমিকন্ডাক্টর ও রোবোটিক্স') : item.label}</strong><span>{item.detail}</span></Link>)}</div></div>)}</nav>
      <div className="header-actions">
        <button className="language-toggle" type="button" aria-label={isBangla ? 'Switch to English' : 'বাংলায় দেখুন'} aria-pressed={isBangla} onClick={onToggleLanguage}><span className={!isBangla ? 'active' : ''}>EN</span><span className={isBangla ? 'active' : ''}>BN</span></button><button className="theme-toggle" type="button" aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'} aria-pressed={isLight} onClick={onToggleTheme}>{isLight ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}<span>{isLight ? 'Dark' : 'Light'}</span></button>
        <Link className="button button-small button-light desktop-cta" href="/start-a-project">{isBangla ? 'প্রকল্প শুরু করুন' : 'Start a Project'} <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{isBangla ? navBn[label] : label}<ArrowUpRight aria-hidden="true" /></Link>)}<button className="theme-toggle mobile-theme-toggle" type="button" aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'} aria-pressed={isLight} onClick={onToggleTheme}>{isLight ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}<span>{isLight ? 'Dark mode' : 'Light mode'}</span></button><Link className="button button-light" href="/start-a-project" onClick={() => setOpen(false)}>{isBangla ? 'প্রকল্প শুরু করুন' : 'Start a Project'} <ArrowUpRight /></Link></nav>}
  </header>
}

function HeroGraphic() {
  return <div className="hero-graphic" aria-label="Abstract illustration of connected technology systems" role="img">
  <div className="graphic-orbit orbit-two" />
    <div className="graphic-core"><div className="core-grid" /><div className="core-logo-stage"><img src={brandLogoUrl} alt="" /></div></div>
    <span className="node node-a" /><span className="node node-b" /><span className="node node-c" /><span className="node node-d" />
  </div>
}

export function PageChrome({ children }: { children: React.ReactNode }) {
  const [isLight, setIsLight] = useState(false)
  const [isBangla, setIsBangla] = useState(() => typeof window !== 'undefined' && window.localStorage.getItem('techbengal-language') === 'bn')
  useEffect(() => { window.localStorage.setItem('techbengal-language', isBangla ? 'bn' : 'en') }, [isBangla])
  return <LanguageContext.Provider value={{ isBangla, toggleLanguage: () => setIsBangla(value => !value) }}><div className={`site-shell page-chrome${isLight ? ' theme-light' : ''}${isBangla ? ' lang-bn' : ''}`}><Header isLight={isLight} onToggleTheme={() => setIsLight(value => !value)} isBangla={isBangla} onToggleLanguage={() => setIsBangla(value => !value)} />{children}<Footer /></div></LanguageContext.Provider>
}

export function Footer() {
  const { isBangla } = useLanguage()
  const footerServices = [['UI/UX Design', '/services/ui-ux-design'], ['Website Development', '/services/website-development'], ['Custom Software', '/services/custom-software-development'], ['Digital Marketing', '/services/digital-marketing'], ['AI Automation', '/services/ai-automation'], ['Business Support', '/services/business-support']]
  return <footer className="site-footer"><div className="container footer-brand-row"><div><Link href="/" className="wordmark"><Mark /><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><p className="footer-note">{isBangla ? 'প্রযুক্তি, software, AI এবং digital service-এর মাধ্যমে বাস্তব business solution তৈরি করি।' : 'Technology, software, AI, and digital services built around real business needs.'}</p></div><Link className="button button-primary footer-cta" href="/start-a-project">{isBangla ? 'আপনার idea নিয়ে কথা বলুন' : 'Talk about your idea'} <ArrowUpRight aria-hidden="true" /></Link></div><div className="container footer-grid"><div><span className="footer-label">{isBangla ? 'দেখুন' : 'Explore'}</span>{navItems.slice(0, 4).map(([label, href]) => <Link key={href} href={href}>{isBangla ? navBn[label] : label}</Link>)}</div><div><span className="footer-label">{isBangla ? 'Services' : 'Services'}</span>{footerServices.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div><span className="footer-label">{isBangla ? 'যোগাযোগ' : 'Connect'}</span><a href="mailto:techbengal26@gmail.com">techbengal26@gmail.com</a><a className="footer-social-link" href="https://facebook.com/tbengal" target="_blank" rel="noreferrer" aria-label="TechBengal on Facebook"><svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.33L17 12H13V9c0-.67.33-1 1-1Z" /></svg><span>Facebook</span></a><Link href="/contact">{isBangla ? 'আলোচনা শুরু করুন' : 'Start a conversation'}</Link></div></div><div className="container footer-bottom"><span>© 2026 TechBengal. {isBangla ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</span><span><Link href="/privacy">{isBangla ? 'Privacy' : 'Privacy'}</Link><Link href="/terms">{isBangla ? 'Terms' : 'Terms'}</Link></span></div></footer>
}

export function TechBengalSite() {
  const [isLight, setIsLight] = useState(false)
  const [isBangla, setIsBangla] = useState(() => typeof window !== 'undefined' && window.localStorage.getItem('techbengal-language') === 'bn')
  const [serviceIndex, setServiceIndex] = useState(0)
  useEffect(() => { window.localStorage.setItem('techbengal-language', isBangla ? 'bn' : 'en') }, [isBangla])
  const [servicePaused, setServicePaused] = useState(false)
  const service = serviceSlides[serviceIndex]
  useEffect(() => { if (servicePaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const timer = window.setInterval(() => setServiceIndex(index => (index + 1) % serviceSlides.length), 6500); return () => window.clearInterval(timer) }, [servicePaused])
  return <LanguageContext.Provider value={{ isBangla, toggleLanguage: () => setIsBangla(value => !value) }}><div className={`site-shell${isLight ? ' theme-light' : ''}${isBangla ? ' lang-bn' : ''}`}><Header isLight={isLight} onToggleTheme={() => setIsLight(value => !value)} isBangla={isBangla} onToggleLanguage={() => setIsBangla(value => !value)} /><main>
    <section className="hero-section"><div className="container hero-business-layout"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> {isBangla ? 'টেকবেঙ্গল গ্রোথ সিস্টেম' : 'TechBengal growth systems'}</div><h1>{isBangla ? <>আপনার ব্যবসার লক্ষ্যকে <em>ডিজিটাল প্রবৃদ্ধিতে</em> রূপ দিই।</> : <>We Turn Your Business Goals Into <em>Digital Growth.</em></>}</h1><p className="hero-description">{isBangla ? 'উচ্চ-রূপান্তরকারী ল্যান্ডিং পেজ ও কাস্টম সফটওয়্যার থেকে AI-চালিত বিক্রয় এবং মার্কেটিং অটোমেশন—টেকবেঙ্গল ব্যবসাকে আরও স্মার্টভাবে গড়তে, বেশি গ্রাহকের কাছে পৌঁছাতে এবং দক্ষতার সঙ্গে এগোতে সাহায্য করে।' : 'From high-converting landing pages and custom software to AI-powered sales and marketing automation, TechBengal helps businesses build smarter systems, reach more customers, and grow efficiently.'}</p><div className="hero-actions"><Link className="button button-primary" href="/start-a-project">{isBangla ? 'আপনার ব্যবসা বাড়াই' : 'Let’s Grow Your Business'} <ArrowUpRight /></Link><Link className="text-link" href="/services">{isBangla ? 'আমাদের সেবা দেখুন' : 'Explore Our Services'} <ArrowUpRight /></Link></div></div><div className="hero-service-slider" onMouseEnter={() => setServicePaused(true)} onMouseLeave={() => setServicePaused(false)} onFocus={() => setServicePaused(true)} onBlur={() => setServicePaused(false)}><div className="hero-service-visual" aria-hidden="true"><span className="service-node service-node-one" /><span className="service-node service-node-two" /><span className="service-node service-node-three" /><span className="service-path service-path-one" /><span className="service-path service-path-two" /></div><div className="hero-service-copy" aria-live="polite"><span className="service-counter">{String(serviceIndex + 1).padStart(2, '0')} / {String(serviceSlides.length).padStart(2, '0')}</span><h2 key={serviceIndex}>{isBangla ? serviceNamesBn[serviceIndex] : service[0]}</h2><p key={`service-copy-${serviceIndex}`}>{isBangla ? service[2] : service[1]}</p></div><div className="hero-service-controls"><button type="button" onClick={() => setServicePaused(value => !value)} aria-pressed={servicePaused}>{servicePaused ? 'Resume' : 'Pause'} rotation</button><div className="service-dots" role="tablist" aria-label="Service highlights">{serviceSlides.map(([label], index) => <button key={label} type="button" role="tab" aria-selected={index === serviceIndex} aria-label={`Show ${label}`} onClick={() => setServiceIndex(index)} className={index === serviceIndex ? 'is-active' : ''} />)}</div></div></div></div><div className="container hero-foot"><span>01 — 03</span><span>Growth through technology</span><span className="scroll-line" /></div></section>
    <section className="section divisions-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">{isBangla ? 'আমাদের ক্ষেত্রসমূহ' : 'Our domains'}</span><h2>{isBangla ? <>তিনটি ক্ষেত্র।<br /><em>একটি প্রযুক্তি-দৃষ্টি।</em></> : <>Three domains.<br /><em>One technology vision.</em></>}</h2></div><p>{isBangla ? 'ডিজিটাল উদ্ভাবন, ইলেকট্রনিক্স ইঞ্জিনিয়ারিং এবং সেমিকন্ডাক্টর প্রযুক্তিকে একত্র করে আমরা ভবিষ্যৎমুখী প্রযুক্তি তৈরি করি।' : 'We bring together digital innovation, electronics engineering, and semiconductor technology under one forward-looking technology brand.'}</p></div><div className="division-grid">{divisions.map(({ number, title, text, href, icon: Icon, tone, tags }) => <Link className={`division-card ${tone}`} href={href} key={href}><div className="card-top"><span>{number}</span><Icon aria-hidden="true" /></div><div className="division-visual"><div className="visual-lines" /><div className="visual-circle" /><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="card-link">Explore domain <ArrowUpRight aria-hidden="true" /></span></Link>)}</div></div></section>
    <section className="section services-section"><div className="container services-layout"><div className="services-intro"><span className="section-kicker">{isBangla ? 'আমরা যা করি' : 'What we do'}</span><h2>{isBangla ? <>বাস্তব সমস্যার <em>প্রযুক্তিগত সমাধান।</em></> : <>Technology that solves <em>real problems.</em></>}</h2><p>{isBangla ? 'ভালো প্রযুক্তির মূল্য তার জটিলতায় নয়—মানুষের কাজকে কতটা সহজ ও সম্ভাবনাময় করে তুলতে পারে, তাতে।' : 'Good technology is not measured by how complex it is. It is measured by what it makes possible.'}</p><Link className="text-link" href="/services">{isBangla ? 'সব সেবা দেখুন' : 'View all services'} <ArrowUpRight /></Link></div><div className="services-list">{services.map(([num, title, text]) => <Link href={`/services/${title.toLowerCase().replaceAll(' ', '-')}`} className="service-row" key={num}><span>{num}</span><div><h3>{isBangla ? ({ 'UI/UX Design': 'ইউআই/ইউএক্স ডিজাইন', 'Website Development': 'ওয়েবসাইট ডেভেলপমেন্ট', 'Custom Software': 'কাস্টম সফটও���়্যার', 'AI Automation': 'এআই অটোমেশন', 'Digital Growth': 'ডিজিটাল গ্রোথ', 'Business Support': 'ব্যবসায়িক সহায়তা' } as Record<string, string>)[title] : title}</h3><p>{isBangla ? ({ 'Interfaces with clarity, character, and a point of view.': 'স্পষ্টত��, স্বতন্ত্রতা ও উদ্দেশ্যপূর্ণ ভাবনায় তৈরি ইন্টারফেস।', 'Fast, expressive websites built to move your business forward.': 'আপনার ব্যবসাকে এগিয়ে নেওয়ার জন্য দ্রুত ও প্রাণবন্ত ওয়েবসাইট।', 'Purpose-built systems for the work generic tools cannot handle.': 'সাধারণ টুলে সম্ভব নয়—এমন কাজের জন্য তৈরি বিশেষায়িত সিস্টেম।', 'Practical intelligence that turns repetitive work into momentum.': 'একঘেয়ে কাজকে অগ্রগতিতে রূপ দেওয়ার বাস্তব বুদ্ধিমত্তা।', 'Content and campaigns that make your best work easier to find.': 'আপনার সেরা কাজকে মানুষের কাছে পৌঁছে দেওয়ার কনটেন্ট ও প্রচারণা।', 'A steady technical partner for your next important decision.': 'আপনার পরবর্তী গুরুত্বপূর্ণ সিদ্ধান্তের জন্য নির্ভরযোগ্য প্রযুক্তি-সঙ্গী।' } as Record<string, string>)[text] : text}</p></div><ArrowUpRight aria-hidden="true" /></Link>)}</div></div></section>
    <section className="statement-section"><div className="container statement-inner"><span className="section-kicker">The TechBengal perspective</span><blockquote>“The most useful technology is the kind that feels like a <em>natural extension</em> of human ambition.”</blockquote><Link className="button button-outline" href="/about">Meet TechBengal <ArrowUpRight /></Link></div></section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="section-kicker">Have an idea in motion?</span><h2>Let&apos;s build what&apos;s <em>next.</em></h2></div><Link className="button button-primary" href="/contact">Start a conversation <ArrowUpRight /></Link></div></section><HomepagePrdSections isBangla={isBangla} />
  </main><Footer /></div></LanguageContext.Provider>
}
