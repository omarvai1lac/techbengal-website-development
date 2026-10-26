'use client'

import Link from 'next/link'
import { ArrowUpRight, Clock3, Layers3, Sparkles } from 'lucide-react'

const projects = [
  { number: '01', title: 'Digital experiences', category: 'Software & digital', description: 'Clear, responsive web experiences that turn a brand story into a useful place to go.', status: 'Selected direction', tone: 'copper' },
  { number: '02', title: 'Intelligent operations', category: 'AI & automation', description: 'Practical systems that remove friction from the work behind ambitious businesses.', status: 'In development', tone: 'violet' },
  { number: '03', title: 'Technology explorations', category: 'Hardware & research', description: 'Early thinking across connected devices, electronics, and the next layer of computing.', status: 'Exploration', tone: 'amber' },
]

export function ProjectsPage() {
  return <main className="projects-page">
    <header className="projects-header"><div className="container projects-header-inner"><Link href="/" className="wordmark projects-wordmark" aria-label="TechBengal home"><span className="brand-logo-frame"><img src="/logo.png" alt="TechBengal Technology Logo" /></span><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><Link className="projects-back" href="/">Back to home <ArrowUpRight aria-hidden="true" /></Link></div></header>
    <section className="projects-hero"><div className="container"><span className="section-kicker">Selected work / 2026</span><div className="projects-hero-grid"><h1>Ideas in motion.<br /><em>Work with intent.</em></h1><div><p>We are building a portfolio of thoughtful digital products, engineering explorations, and technology partnerships. This is where the work takes shape.</p><Link className="button button-primary" href="/contact">Start a project <ArrowUpRight aria-hidden="true" /></Link></div></div><div className="projects-index"><span>Projects / 01—03</span><span className="projects-index-line" /><span>TechBengal</span></div></div></section>
    <section className="projects-list-section"><div className="container"><div className="projects-list-heading"><span className="section-kicker">The portfolio</span><p>Some work is shipped. Some is being shaped. Every project starts with a useful question.</p></div><div className="projects-list">{projects.map(project => <article className={`project-item ${project.tone}`} key={project.number}><div className="project-number">{project.number}</div><div className="project-art" aria-hidden="true"><div className="project-art-grid" /><div className="project-art-orbit" /><div className="project-art-core"><Layers3 /></div></div><div className="project-copy"><span className="project-category">{project.category}</span><h2>{project.title}</h2><p>{project.description}</p><span className="project-status"><Clock3 aria-hidden="true" /> {project.status}</span></div><ArrowUpRight className="project-arrow" aria-hidden="true" /></article>)}</div></div></section>
    <section className="projects-cta"><div className="container projects-cta-inner"><div><span className="section-kicker">Have something in mind?</span><h2>Let&apos;s make the<br /><em>next case study.</em></h2></div><Sparkles aria-hidden="true" /><Link className="button button-outline" href="/contact">Talk to TechBengal <ArrowUpRight aria-hidden="true" /></Link></div></section>
  </main>
}
