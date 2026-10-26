'use client'

import Link from 'next/link'
import { ArrowUpRight, Bot, BriefcaseBusiness, Code2, Megaphone, PenTool, PanelsTopLeft, Sparkles } from 'lucide-react'

const services = [
  { number: '01', title: 'UI/UX design', text: 'Clear, considered interfaces that make every interaction feel intentional.', icon: PenTool, accent: 'orange' },
  { number: '02', title: 'CMS & custom coding', text: 'Websites and software engineered around your content, workflow, and ambition.', icon: Code2, accent: 'blue' },
  { number: '03', title: 'Content creation', text: 'Stories, systems, and visual language that give your brand something to say.', icon: PanelsTopLeft, accent: 'violet' },
  { number: '04', title: 'Digital marketing', text: 'Campaigns and growth loops that move the right people from attention to action.', icon: Megaphone, accent: 'orange' },
  { number: '05', title: 'AI automation & integration', text: 'Practical intelligence woven into the tools your team already uses.', icon: Bot, accent: 'blue' },
  { number: '06', title: 'Business support services', text: 'Reliable digital support that keeps your operation moving after launch.', icon: BriefcaseBusiness, accent: 'violet' },
]

export function SoftwareDomainPage() {
  return (
    <main className="software-page-new">
      <header className="software-nav"><div className="container software-nav-inner"><Link href="/" className="wordmark software-wordmark" aria-label="TechBengal home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><span className="software-nav-label">OUR DOMAINS / 01</span><Link href="/technology" className="software-nav-back">Back to domains <ArrowUpRight aria-hidden="true" /></Link></div></header>
      <section className="software-intro"><div className="container software-intro-grid"><div className="software-intro-copy"><span className="software-eyebrow">Software & digital solutions</span><h1>Build a better<br /><em>way forward.</em></h1><p>We bring design, technology, content, and intelligence into one practical digital partner for ambitious businesses.</p><Link href="/contact" className="button software-primary">Start with a conversation <ArrowUpRight /></Link></div><div className="software-brief"><span className="brief-number">01</span><div className="brief-rule" /><p>One connected team for the moments when your business needs to look sharper, work smarter, and grow with confidence.</p><div className="brief-stamp"><Sparkles aria-hidden="true" /><span>Ideas<br />into orbit</span></div></div></div></section>
      <section className="software-services"><div className="container"><div className="software-services-head"><div><span className="software-eyebrow">The capability set</span><h2>Everything your<br /><em>next move</em> needs.</h2></div><p>Choose one piece or bring us the whole puzzle. Our work is designed to connect, not sit in silos.</p></div><div className="software-service-grid">{services.map(({ number, title, text, icon: Icon, accent }) => <article className={`software-service-card ${accent}`} key={number}><div className="software-card-top"><span>{number}</span><Icon aria-hidden="true" /></div><div className="software-card-body"><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="software-card-arrow" aria-hidden="true" /></article>)}</div></div></section>
      <section className="software-method"><div className="container software-method-grid"><div><span className="software-eyebrow">How we work</span><h2>Small starts.<br /><em>Useful outcomes.</em></h2></div><div className="software-method-list"><div><span>01</span><strong>Understand</strong><p>We find the signal inside the brief.</p></div><div><span>02</span><strong>Make</strong><p>We turn the clearest idea into something real.</p></div><div><span>03</span><strong>Improve</strong><p>We keep learning after the launch.</p></div></div></div></section>
      <section className="software-final"><div className="container software-final-inner"><span className="software-eyebrow">Have a challenge in mind?</span><h2>Let&apos;s make<br /><em>the next move.</em></h2><Link href="/contact" className="software-circle-link">Talk to us <ArrowUpRight /></Link></div></section>
    </main>
  )
}
