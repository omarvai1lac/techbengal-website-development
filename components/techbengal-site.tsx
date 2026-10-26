'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Cpu, Menu, Moon, Network, Sun, X, Zap } from 'lucide-react'

const navItems = [
  ['Services', '/services'],
  ['Technology', '/technology'],
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Insights', '/insights'],
  ['Contact', '/contact'],
] as const

const divisions = [
  { number: '01', title: 'Software & Digital Solution', text: 'Digital experiences, custom software, and intelligent automation designed to help businesses operate and grow.', href: '/technology/software-digital-solutions', icon: Network, tone: 'cyan', tags: ['UI/UX', 'Websites', 'AI automation'] },
  { number: '02', title: 'Electronics & Hardware', text: 'Exploring electronic products, hardware development, embedded technologies, and engineering-led innovation.', href: '/technology/electronics', icon: Cpu, tone: 'violet', tags: ['Embedded systems', 'IoT', 'Prototyping'] },
  { number: '03', title: 'Semiconductor & Microchips', text: 'A technology focus on microelectronics, chip-related engineering, semiconductor research, and future computing technologies.', href: '/technology/semiconductors', icon: Zap, tone: 'amber', tags: ['Microelectronics', 'R&D', 'IC design'] },
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

function Mark() {
  return <span className="brand-logo-frame" aria-hidden="true"><img src={brandLogoUrl} alt="" /></span>
}

function Header({ isLight, onToggleTheme }: { isLight: boolean; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="wordmark" aria-label="TechBengal home"><Mark /><span>Tech<span className="wordmark-accent">Bengal</span></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'} aria-pressed={isLight} onClick={onToggleTheme}>{isLight ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}<span>{isLight ? 'Dark' : 'Light'}</span></button>
        <Link className="button button-small button-light desktop-cta" href="/contact">Start a Project <ArrowUpRight aria-hidden="true" /></Link>
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

function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="wordmark"><Mark /><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><p className="footer-note">Technology. Innovation. Intelligence.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span>{navItems.slice(0, 4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div><span className="footer-label">Connect</span><a href="mailto:hello@techbengal.com">hello@techbengal.com</a><Link href="/contact">Start a conversation</Link></div></div></div><div className="container footer-bottom"><span>© 2026 TechBengal. Built for what&apos;s next.</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div></footer>
}

export function TechBengalSite() {
  const [isLight, setIsLight] = useState(false)
  return <div className={`site-shell${isLight ? ' theme-light' : ''}`}><Header isLight={isLight} onToggleTheme={() => setIsLight(value => !value)} /><main>
    <section className="hero-section"><div className="container hero-grid hero-grid-centered"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> Software <i>•</i> AI <i>•</i> Hardware <i>•</i> Semiconductors</div><h1>Engineering the <em>future</em> of technology.</h1><p className="hero-description">From intelligent software and AI-powered business solutions to electronics and semiconductor innovation, TechBengal is building technology for a more connected and capable world.</p><div className="hero-actions"><Link className="button button-primary" href="/contact">Start a Project <ArrowUpRight /></Link><Link className="text-link" href="/technology">Explore our capabilities <ArrowUpRight /></Link></div></div></div><div className="container hero-foot"><span>01 — 03</span><span>Technology with intent</span><span className="scroll-line" /></div></section>
    <section className="section divisions-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">Our domains</span><h2>Three domains.<br /><em>One technology vision.</em></h2></div><p>We bring together digital innovation, electronics engineering, and semiconductor technology under one forward-looking technology brand.</p></div><div className="division-grid">{divisions.map(({ number, title, text, href, icon: Icon, tone, tags }) => <Link className={`division-card ${tone}`} href={href} key={href}><div className="card-top"><span>{number}</span><Icon aria-hidden="true" /></div><div className="division-visual"><div className="visual-lines" /><div className="visual-circle" /><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="card-link">Explore domain <ArrowUpRight aria-hidden="true" /></span></Link>)}</div></div></section>
    <section className="section services-section"><div className="container services-layout"><div className="services-intro"><span className="section-kicker">What we do</span><h2>Technology that solves <em>real problems.</em></h2><p>Good technology is not measured by how complex it is. It is measured by what it makes possible.</p><Link className="text-link" href="/services">View all services <ArrowUpRight /></Link></div><div className="services-list">{services.map(([num, title, text]) => <Link href={`/services/${title.toLowerCase().replaceAll(' ', '-')}`} className="service-row" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight aria-hidden="true" /></Link>)}</div></div></section>
    <section className="statement-section"><div className="container statement-inner"><span className="section-kicker">The TechBengal perspective</span><blockquote>“The most useful technology is the kind that feels like a <em>natural extension</em> of human ambition.”</blockquote><Link className="button button-outline" href="/about">Meet TechBengal <ArrowUpRight /></Link></div></section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="section-kicker">Have an idea in motion?</span><h2>Let&apos;s build what&apos;s <em>next.</em></h2></div><Link className="button button-primary" href="/contact">Start a conversation <ArrowUpRight /></Link></div></section>
  </main><Footer /></div>
}
