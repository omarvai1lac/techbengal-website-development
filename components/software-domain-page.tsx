'use client'

import Link from 'next/link'
import { ArrowUpRight, Check, Code2, Database, GitBranch, Layers3, Network, Sparkles } from 'lucide-react'

const capabilities = [
  ['01', 'Digital products', 'Interfaces and platforms that make complex work feel clear.'],
  ['02', 'Custom software', 'Purpose-built systems shaped around the way your team actually operates.'],
  ['03', 'AI automation', 'Practical intelligence that removes friction and creates new capacity.'],
]

const stack = ['Product strategy', 'UX & interface design', 'Web applications', 'AI workflows', 'Systems integration', 'Support & iteration']

export function SoftwareDomainPage() {
  return <main className="software-domain-page">
    <header className="domain-header"><div className="container domain-header-inner"><Link href="/" className="wordmark domain-wordmark" aria-label="TechBengal home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><span className="domain-index">DOMAIN 01 / 03</span><Link href="/technology" className="domain-back">All domains <ArrowUpRight aria-hidden="true" /></Link></div></header>
    <section className="domain-hero"><div className="container domain-hero-grid"><div><span className="domain-kicker"><span /> Software & digital solution</span><h1>Make the <em>complex</em> feel possible.</h1><p>We turn ambitious ideas into digital products, custom software, and intelligent workflows that help people do their best work.</p><div className="domain-actions"><Link className="button domain-button" href="/contact">Discuss a project <ArrowUpRight /></Link><span className="domain-note">Built for teams<br />moving forward.</span></div></div><div className="system-map" aria-label="Connected software system diagram" role="img"><div className="map-label map-label-top">DIGITAL SYSTEM / TB-01</div><div className="map-axis axis-one" /><div className="map-axis axis-two" /><div className="map-core"><Code2 aria-hidden="true" /><span>BUILD</span></div><div className="map-node map-node-a"><Layers3 /></div><div className="map-node map-node-b"><Sparkles /></div><div className="map-node map-node-c"><Database /></div><span className="map-coordinate">22.5726° N<br />88.3639° E</span><span className="map-status"><i /> systems online</span></div></div></section>
    <section className="domain-statement"><div className="container domain-statement-grid"><span className="domain-kicker">The opportunity</span><h2>Technology should not add another layer of work. <em>It should remove one.</em></h2></div></section>
    <section className="domain-capabilities"><div className="container"><div className="domain-section-intro"><span className="domain-kicker">What we build</span><p>One focused team across the full digital journey — from first question to a system people rely on every day.</p></div><div className="capability-grid">{capabilities.map(([number, title, text]) => <article className="capability-item" key={number}><span className="capability-number">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight aria-hidden="true" /></article>)}</div></div></section>
    <section className="domain-stack"><div className="container stack-grid"><div><span className="domain-kicker">Our approach</span><h2>A sharper path from <em>idea to impact.</em></h2></div><div className="stack-list">{stack.map((item, index) => <div className="stack-row" key={item}><span>0{index + 1}</span><strong>{item}</strong><Check aria-hidden="true" /></div>)}</div></div></section>
    <section className="domain-cta"><div className="container domain-cta-inner"><div><span className="domain-kicker">Have a system in mind?</span><h2>Let&apos;s give it<br /><em>some shape.</em></h2></div><Link className="button domain-button" href="/contact">Start a conversation <ArrowUpRight /></Link></div></section>
  </main>
}
