'use client'

import Link from 'next/link'
import { ArrowUpRight, Bot, BriefcaseBusiness, Check, Code2, Layers3, Megaphone, PenTool, Radar, Sparkles } from 'lucide-react'

const serviceGroups = [
  {
    number: '01',
    icon: PenTool,
    title: 'Design & digital experiences',
    text: 'Make your product easier to understand, use, and remember with a clear visual system and thoughtful interaction design.',
    services: ['UI/UX design', 'Brand systems', 'Product strategy', 'Design systems'],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Websites & custom software',
    text: 'Turn ambitious ideas into fast, reliable digital products that are built around how your business actually works.',
    services: ['Website development', 'Web applications', 'Internal tools', 'API & integrations'],
  },
  {
    number: '03',
    icon: Bot,
    title: 'AI & business automation',
    text: 'Find the repetitive, expensive parts of your operation and connect them to practical intelligence that creates momentum.',
    services: ['AI assistants', 'Workflow automation', 'Data intelligence', 'Process mapping'],
  },
  {
    number: '04',
    icon: Megaphone,
    title: 'Digital marketing',
    text: 'Reach the right audience with focused campaigns, useful content, and growth systems built around your goals.',
    services: ['Content strategy', 'Campaign planning', 'Search foundations', 'Growth reporting'],
  },
  {
    number: '05',
    icon: BriefcaseBusiness,
    title: 'Business support services',
    text: 'Keep your digital operation moving with a steady technical partner for the decisions and improvements that matter.',
    services: ['Technical guidance', 'Digital audits', 'Ongoing improvements', 'Team enablement'],
  },
]

const process = ['Understand the opportunity', 'Shape the right direction', 'Build with precision', 'Improve what matters']

export function ServicesPage() {
  return (
    <div className="services-page">
      <header className="services-page-header">
        <div className="container services-page-nav">
          <Link className="wordmark" href="/" aria-label="TechBengal home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span><span>Tech<span className="wordmark-accent">Bengal</span></span></Link>
          <Link className="text-link" href="/">Back to home <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </header>
      <main>
        <section className="services-hero">
          <div className="container services-hero-grid">
            <div>
              <span className="section-kicker">Services / 01</span>
              <h1>We make technology feel <em>possible.</em></h1>
              <p>From the first sketch to the final system, TechBengal helps ambitious teams turn complex challenges into clear, useful, and lasting digital work.</p>
              <Link className="button button-primary" href="/contact">Start a project <ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="services-signal" aria-hidden="true">
              <div className="signal-ring signal-ring-one" /><div className="signal-ring signal-ring-two" /><div className="signal-core"><Sparkles /><span>TB / 01</span></div>
              <span className="signal-dot signal-dot-one" /><span className="signal-dot signal-dot-two" /><span className="signal-dot signal-dot-three" />
              <div className="signal-caption"><Radar /> Connecting the right ideas</div>
            </div>
          </div>
        </section>
        <section className="service-groups-section">
          <div className="container">
            <div className="service-intro"><span className="section-kicker">What we do</span><h2>One partner for the work <em>between disciplines.</em></h2><p>Good outcomes rarely come from a single skill. They come from seeing the whole system and knowing where to make the right move.</p></div>
            <div className="service-groups">{serviceGroups.map(({ number, icon: Icon, title, text, services }) => <article className="service-group" key={number}><div className="service-group-top"><span>{number}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><ul>{services.map(service => <li key={service}><Check aria-hidden="true" />{service}</li>)}</ul><Link className="card-link" href="/contact">Talk to us <ArrowUpRight aria-hidden="true" /></Link></article>)}</div>
          </div>
        </section>
        <section className="process-section"><div className="container process-layout"><div><span className="section-kicker">How we work</span><h2>Clarity before <em>complexity.</em></h2><p>We keep the process collaborative, focused, and grounded in the outcome you need—not the tools we happen to use.</p></div><ol>{process.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong><ArrowUpRight aria-hidden="true" /></li>)}</ol></div></section>
        <section className="services-cta"><div className="container"><Layers3 aria-hidden="true" /><span className="section-kicker">Have a challenge in mind?</span><h2>Bring us the <em>messy bit.</em></h2><Link className="button button-light" href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link></div></section>
      </main>
    </div>
  )
}
