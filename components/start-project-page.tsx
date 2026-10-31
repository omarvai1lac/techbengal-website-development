import Link from 'next/link'
import { ArrowUpRight, Check, Cpu, Layers3, Sparkles } from 'lucide-react'

const offers = [
  { icon: Layers3, title: 'Digital products', text: 'Websites, platforms, and user experiences that make your offer clearer and easier to use.' },
  { icon: Sparkles, title: 'AI and automation', text: 'Practical intelligent systems that reduce repetitive work and help your team move faster.' },
  { icon: Cpu, title: 'Hardware and robotics', text: 'Connected devices, robotics concepts, and engineering support for ambitious physical products.' },
]

export function StartProjectPage() {
  return <main className="project-start-page"><section className="project-start-hero"><div className="container project-start-grid"><div><span className="section-kicker">Start a project</span><h1>Bring your next <em>technology idea</em> to life.</h1><p>Tell us where you want to go. We will help shape the right digital, AI, hardware, or robotics path to get there.</p><Link className="button button-primary" href="/start-a-project/order">Order now <ArrowUpRight aria-hidden="true" /></Link></div><div className="project-start-signal" aria-hidden="true"><div className="signal-core">TB</div><span className="signal-line signal-line-one" /><span className="signal-line signal-line-two" /><span className="signal-line signal-line-three" /></div></div></section><section className="section project-offers"><div className="container"><div className="section-heading"><div><span className="section-kicker">What we can build</span><h2>Choose a direction.<br /><em>We will shape the details.</em></h2></div><p>A short first conversation is enough to begin. We can scope a focused engagement or a larger product journey around your goals.</p></div><div className="project-offer-grid">{offers.map(({ icon: Icon, title, text }) => <article className="project-offer-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p><Check aria-hidden="true" /></article>)}</div></div></section><section className="project-start-note"><div className="container"><span className="section-kicker">A clear first step</span><p>Share your brief, timeline, and ambition. We will review it and come back with a thoughtful way forward.</p></div></section></main>
}
