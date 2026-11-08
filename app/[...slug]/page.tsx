import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ServicesPage } from '@/components/services-page'
import { SoftwareDomainPage } from '@/components/software-domain-page'
import { TechnologyPage } from '@/components/technology-page'
import { ProjectsPage } from '@/components/projects-page'
import { PageChrome } from '@/components/techbengal-site'
import { StartProjectPage } from '@/components/start-project-page'
import { ProjectOrderPage } from '@/components/project-order-page'
import { InsightsPage } from '@/components/insights-page'
import { DetailPage, type DetailContent } from '@/components/detail-page'
import { UiUxPage } from '@/components/uiux-page'
import { WebsiteDevelopmentPage } from '@/components/website-development-page'
import { DigitalMarketingPage } from '@/components/digital-marketing-page'
import { CustomSoftwarePage } from '@/components/custom-software-page'
import { BusinessSupportPage } from '@/components/business-support-page'

const detailContent: Record<string, DetailContent> = {
  about: { eyebrow: 'About TechBengal', title: 'A technology company with a wider horizon.', text: 'We combine creativity, engineering, automation, and research to make technology useful for ambitious businesses.', bullets: ['A practical partner from first question to final system.', 'Design and engineering thinking in the same room.', 'Technology shaped around real people and real constraints.'], accent: 'cyan' },
  contact: { eyebrow: 'Start a project', title: 'Tell us what you want to make possible.', text: 'Share a little about your challenge, idea, or next chapter. We will come back with a thoughtful starting point.', bullets: ['Tell us what you are trying to improve.', 'Share your preferred timing and direction.', 'Start with a focused conversation, not a complicated brief.'], accent: 'amber' },
  privacy: { eyebrow: 'Privacy policy', title: 'Your information deserves care.', text: 'We handle project conversations with respect and use information only to respond and work with you responsibly.', bullets: ['We collect only what helps us respond.', 'We do not sell your information.', 'You can ask what we hold and request changes.'], accent: 'violet' },
  terms: { eyebrow: 'Terms of service', title: 'Clear expectations create better work.', text: 'These terms explain how project conversations, services, and responsibilities work together.', bullets: ['Scope and deliverables are agreed before work begins.', 'Feedback and approvals keep momentum clear.', 'Questions are resolved openly and early.'], accent: 'cyan' },
  'technology/electronics': { eyebrow: 'Technology domains / 02', title: 'Hardware that makes ideas tangible.', text: 'We explore embedded systems, connected devices, electronics, and the engineering needed to move physical products forward.', bullets: ['Embedded product thinking and prototyping.', 'Connected devices and IoT foundations.', 'Engineering support from concept to refinement.'], accent: 'violet' },
  'technology/semiconductors': { eyebrow: 'Technology domains / 03', title: 'The next layer of computing.', text: 'We follow microelectronics, semiconductor research, robotics, and future computing with a practical, curiosity-led mindset.', bullets: ['Research-led technology exploration.', 'Robotics and autonomous system thinking.', 'A bridge between components, software, and possibility.'], accent: 'amber' },
  'services/ui-ux-design': { eyebrow: 'Services / UI/UX design', title: 'Make every interaction feel intentional.', text: 'We design clear interfaces and experiences that help people understand your value and take the next step with confidence.', bullets: ['User journeys and product direction.', 'Interface systems with a distinct point of view.', 'Accessible interaction patterns that scale.'], accent: 'cyan' },
  'services/website-development': { eyebrow: 'Services / Website development', title: 'A website that works as hard as you do.', text: 'We build fast, expressive websites that explain your offer clearly and turn attention into meaningful action.', bullets: ['Responsive, high-performance foundations.', 'Content structures that are easy to manage.', 'Conversion-aware journeys without empty promises.'], accent: 'amber' },
  'services/ai-automation': { eyebrow: 'Services / AI automation', title: 'Give repetitive work a better system.', text: 'We connect practical AI and automation to the work your team already does, so people can spend more energy where judgment matters.', bullets: ['Workflow discovery and opportunity mapping.', 'AI assistants and useful automations.', 'Human oversight built into every important step.'], accent: 'violet' },
  'services/digital-marketing': { eyebrow: 'Services / Digital marketing', title: 'Make every campaign count.', text: 'We help businesses reach the right audience with focused messaging, useful content, and practical growth systems.', bullets: ['Content and campaign strategy.', 'Search-friendly digital foundations.', 'Reporting that keeps decisions grounded.'], accent: 'amber' },
  'services/business-support': { eyebrow: 'Services / Business support', title: 'A steady partner for your next important decision.', text: 'Keep your digital operation moving with practical technical guidance, audits, and improvements that support the way your business works.', bullets: ['Technical guidance when it matters.', 'Digital audits and opportunity mapping.', 'Ongoing improvements and team enablement.'], accent: 'cyan' },
}

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
  const key = slug[1] && (slug[0] === 'technology' || slug[0] === 'start-a-project' || slug[0] === 'services') ? slug.join('/') : slug[0]
  if (key === 'start-a-project') return <PageChrome><StartProjectPage /></PageChrome>
  if (key === 'start-a-project/order') return <PageChrome><ProjectOrderPage /></PageChrome>
  if (key === 'services') return <PageChrome><ServicesPage /></PageChrome>
  if (key === 'technology') return <PageChrome><TechnologyPage /></PageChrome>
  if (key === 'projects') return <PageChrome><ProjectsPage /></PageChrome>
  if (key === 'insights') return <PageChrome><InsightsPage /></PageChrome>
  if (key === 'services/ui-ux-design') return <PageChrome><UiUxPage /></PageChrome>
  if (key === 'services/website-development') return <PageChrome><WebsiteDevelopmentPage /></PageChrome>
  if (key === 'services/digital-marketing') return <PageChrome><DigitalMarketingPage /></PageChrome>
  if (key === 'services/custom-software-development') return <PageChrome><CustomSoftwarePage /></PageChrome>
  if (key === 'services/business-support') return <PageChrome><BusinessSupportPage /></PageChrome>
  if (key === 'technology/software-digital-solutions') return <PageChrome><SoftwareDomainPage /></PageChrome>
  if (detailContent[key]) return <PageChrome><DetailPage content={detailContent[key]} /></PageChrome>
  const item = content[key] ?? content.technology
  return <PageChrome><main className="inner-page"><div className="container inner-wrap"><Link className="wordmark inner-wordmark" href="/"><span className="brand-mark"><span /><span /><span /><span /></span><span>Tech<span className="wordmark-accent">Bengal</span></span></Link><div className="inner-content"><span className="section-kicker">{item.eyebrow}</span><h1>{item.title}</h1><p>{item.text}</p><Link className="button button-primary" href={key === 'contact' ? 'mailto:hello@techbengal.com' : '/contact'}>{key === 'contact' ? 'Email TechBengal' : 'Start a conversation'} <ArrowUpRight /></Link></div><Link href="/" className="text-link">Back to home <ArrowUpRight /></Link></div></main></PageChrome>
}
