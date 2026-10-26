import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ServicesPage } from '@/components/services-page'

const content: Record<string, { eyebrow: string; title: string; text: string }> = {
  about: { eyebrow: 'About TechBengal', title: 'A technology company with a wider horizon.', text: 'TechBengal combines creativity, engineering, automation, and research to build technology that addresses real-world challenges.' },
  services: { eyebrow: 'Services', title: 'Digital capability, built around your ambition.', text: 'From interface design and websites to custom software, AI automation, content, and digital growth, we turn complex goals into useful systems.' },
  technology: { eyebrow: 'Technology domains', title: 'Three disciplines, connected by curiosity.', text: 'Our vision spans software and AI, electronics and hardware, and the research-led possibilities of semiconductor technology.' },
  'technology/software-digital-solutions': { eyebrow: 'Our domains / 01', title: 'Software & Digital Solution', text: 'We design and build digital products, custom software, and intelligent automation that make ambitious businesses clearer, faster, and more capable.' },
  projects: { eyebrow: 'Projects', title: 'Work in progress. Ideas in motion.', text: 'We are building a portfolio of thoughtful digital products, engineering explorations, and technology partnerships.' },
  insights: { eyebrow: 'Insights', title: 'Notes from the edge of what is possible.', text: 'Perspectives on design, software, artificial intelligence, hardware, and the systems that connect them.' },
  contact: { eyebrow: 'Start a project', title: 'Tell us what you want to make possible.', text: 'Share a little about your challenge, idea, or next chapter. We will come back with a thoughtful starting point.' },
  privacy: { eyebrow: 'Privacy policy', title: 'Your information deserves care.', text: 'This page is a placeholder for TechBengal’s privacy policy. Add the company-approved policy before launch.' },
  terms: { eyebrow: 'Terms of service', title: 'Clear expectations create better work.', text: 'This page is a placeholder for TechBengal’s terms of service. Add the company-approved terms before launch.' },
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const key = slug[0] === 'technology' && slug[1] ? slug.join('/') : slug[0]
  if (key === 'services') return <ServicesPage />
  const item = content[key] ?? content.technology
  return <main className="inner-page"><div className="container inner-wrap"><Link className="wordmark inner-wordmark" href="/"><span className="brand-mark"><span /><span /><span /><span /></span><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><div className="inner-content"><span className="section-kicker">{item.eyebrow}</span><h1>{item.title}</h1><p>{item.text}</p><Link className="button button-primary" href={key === 'contact' ? 'mailto:hello@techbengal.com' : '/contact'}>{key === 'contact' ? 'Email TechBengal' : 'Start a conversation'} <ArrowUpRight /></Link></div><Link href="/" className="text-link">Back to home <ArrowUpRight /></Link></div></main>
}
