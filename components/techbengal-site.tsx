'use client'

import Link from 'next/link'
import { useEffect, useState, type ReactNode } from 'react'
import { ArrowUpRight, Cpu, Menu, Moon, Network, Sun, X, Zap } from 'lucide-react'

const navItems = [
  ['Services', '/services'],
  ['Technology', '/technology'],
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Insights', '/insights'],
  ['Contact', '/contact'],
] as const

const navDropdowns: Record<string, { label: string; href: string; detail: string }[]> = {
  Services: [
    { label: 'UI/UX Design', href: '/services/ui-ux-design', detail: 'Clear interfaces with character.' },
    { label: 'Website Development', href: '/services/website-development', detail: 'Fast digital experiences that move.' },
    { label: 'AI Automation', href: '/services/ai-automation', detail: 'Practical intelligence for momentum.' },
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

const brandLogoUrl = '/logo.png'

const heroMessages = [
  { kicker: 'UI/UX • Landing Pages • Websites', lead: 'Turn attention into', emphasis: 'action.', tail: '' },
  { kicker: 'Custom Software • AI Automation', lead: 'Make your business', emphasis: 'move faster.', tail: '' },
  { kicker: 'AI Integration • Smart Workflows', lead: 'Connect your tools.', emphasis: 'Unlock more.', tail: '' },
  { kicker: 'Digital Marketing • Sales Automation', lead: 'Reach the right people.', emphasis: 'Grow with intent.', tail: '' },
  { kicker: 'Marketing Automation with AI', lead: 'Build a stronger', emphasis: 'growth engine.', tail: '' },
] as const

function Mark() {
  return <span className="brand-logo-frame" aria-hidden="true"><img src={brandLogoUrl} alt="" /></span>
}

function Header({ isLight, onToggleTheme }: { isLight: boolean; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="wordmark" aria-label="TechBengal home"><Mark /><span>Tech<span className="wordmark-accent">Bengal</span></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <div className="nav-dropdown-wrap" key={href}><Link className="nav-dropdown-trigger" href={href} aria-haspopup="true">{label}</Link><div className="nav-dropdown" role="menu">{navDropdowns[label].map(item => <Link key={`${label}-${item.label}`} href={item.href} role="menuitem"><strong>{item.label}</strong><span>{item.detail}</span></Link>)}</div></div>)}</nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'} aria-pressed={isLight} onClick={onToggleTheme}>{isLight ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}<span>{isLight ? 'Dark' : 'Light'}</span></button>
        <Link className="button button-small button-light desktop-cta" href="/start-a-project">Start a Project <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight aria-hidden="true" /></Link>)}<button className="theme-toggle mobile-theme-toggle" type="button" aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'} aria-pressed={isLight} onClick={onToggleTheme}>{isLight ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}<span>{isLight ? 'Dark mode' : 'Light mode'}</span></button><Link className="button button-light" href="/contact" onClick={() => setOpen(false)}>Start a Project <ArrowUpRight /></Link></nav>}
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
  return <div className={`site-shell page-chrome${isLight ? ' theme-light' : ''}`}><Header isLight={isLight} onToggleTheme={() => setIsLight(value => !value)} />{children}<Footer /></div>
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="wordmark"><Mark /><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><p className="footer-note">Technology. Innovation. Intelligence.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span>{navItems.slice(0, 4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div><span className="footer-label">Connect</span><a href="mailto:techbengal26@gmail.com">techbengal26@gmail.com</a><a className="footer-social-link" href="https://facebook.com/tbengal" target="_blank" rel="noreferrer" aria-label="TechBengal on Facebook"><svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.33L17 12H13V9c0-.67.33-1 1-1Z" /></svg><span>Facebook</span></a><Link href="/contact">Start a conversation</Link></div></div></div><div className="container footer-bottom"><span>© 2026 TechBengal. Built for what&apos;s next.</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div></footer>
}

export function TechBengalSite() {
  const [isLight, setIsLight] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)
  const hero = heroMessages[heroIndex]
  useEffect(() => { const timer = window.setInterval(() => setHeroIndex(index => (index + 1) % heroMessages.length), 5200); return () => window.clearInterval(timer) }, [])
  return <div className={`site-shell${isLight ? ' theme-light' : ''}`}><Header isLight={isLight} onToggleTheme={() => setIsLight(value => !value)} /><main>
    <section className="hero-section"><div className="container hero-grid hero-grid-centered"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> {hero.kicker}</div><h1 key={heroIndex} className="hero-message"><span>{hero.lead} </span><em>{hero.emphasis}</em>{hero.tail && <span> {hero.tail}</span>}</h1><p className="hero-description">From UI/UX and high-converting websites to AI integration, digital marketing, and sales automation, TechBengal helps ambitious businesses attract attention, convert opportunities, and grow with confidence.</p><div className="hero-actions"><Link className="button button-primary" href="/start-a-project">Explore our services <ArrowUpRight /></Link><Link className="text-link" href="/services">See how we can help <ArrowUpRight /></Link></div></div></div><div className="container hero-foot"><span>01 — 03</span><span>Technology with intent</span><span className="scroll-line" /></div></section>
    <section className="section divisions-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">Our domains</span><h2>Three domains.<br /><em>One technology vision.</em></h2></div><p>We bring together digital innovation, electronics engineering, and semiconductor technology under one forward-looking technology brand.</p></div><div className="division-grid">{divisions.map(({ number, title, text, href, icon: Icon, tone, tags }) => <Link className={`division-card ${tone}`} href={href} key={href}><div className="card-top"><span>{number}</span><Icon aria-hidden="true" /></div><div className="division-visual"><div className="visual-lines" /><div className="visual-circle" /><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="card-link">Explore domain <ArrowUpRight aria-hidden="true" /></span></Link>)}</div></div></section>
    <section className="section services-section"><div className="container services-layout"><div className="services-intro"><span className="section-kicker">What we do</span><h2>Technology that solves <em>real problems.</em></h2><p>Good technology is not measured by how complex it is. It is measured by what it makes possible.</p><Link className="text-link" href="/services">View all services <ArrowUpRight /></Link></div><div className="services-list">{services.map(([num, title, text]) => <Link href={`/services/${title.toLowerCase().replaceAll(' ', '-')}`} className="service-row" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight aria-hidden="true" /></Link>)}</div></div></section>
    <section className="statement-section"><div className="container statement-inner"><span className="section-kicker">The TechBengal perspective</span><blockquote>“The most useful technology is the kind that feels like a <em>natural extension</em> of human ambition.”</blockquote><Link className="button button-outline" href="/about">Meet TechBengal <ArrowUpRight /></Link></div></section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="section-kicker">Have an idea in motion?</span><h2>Let&apos;s build what&apos;s <em>next.</em></h2></div><Link className="button button-primary" href="/contact">Start a conversation <ArrowUpRight /></Link></div></section>
  </main><Footer /></div>
}
