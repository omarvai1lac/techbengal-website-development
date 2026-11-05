import Link from 'next/link'
import { ArrowUpRight, Check, Layers3 } from 'lucide-react'

export type DetailContent = { eyebrow: string; title: string; text: string; bullets: string[]; accent: string }

export function DetailPage({ content }: { content: DetailContent }) {
  return <main className="detail-page"><section className="detail-hero"><div className="container detail-hero-grid"><div><span className="section-kicker">{content.eyebrow}</span><h1>{content.title}</h1><p>{content.text}</p><Link className="button button-primary" href="/start-a-project">Start a project <ArrowUpRight aria-hidden="true" /></Link></div><div className={`detail-signal ${content.accent}`} aria-hidden="true"><Layers3 /><span>TECHBENGAL<br /><small>BUILD WITH INTENT</small></span></div></div></section><section className="detail-body"><div className="container detail-body-grid"><div><span className="section-kicker">What this includes</span><h2>A clearer way<br /><em>forward.</em></h2></div><div className="detail-list">{content.bullets.map((bullet, index) => <div key={bullet}><span>0{index + 1}</span><Check aria-hidden="true" /><p>{bullet}</p></div>)}</div></div></section><section className="detail-cta"><div className="container"><span className="section-kicker">Ready when you are</span><h2>Let&apos;s make the next move.</h2><Link className="button button-light" href="/start-a-project">Start a project <ArrowUpRight aria-hidden="true" /></Link></div></section></main>
}
