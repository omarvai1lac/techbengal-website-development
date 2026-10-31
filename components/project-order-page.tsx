'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function ProjectOrderPage() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <main className="project-order-page"><div className="container project-order-wrap"><Link className="text-link" href="/start-a-project"><ArrowLeft aria-hidden="true" /> Back to project services</Link>{submitted ? <section className="order-success"><CheckCircle2 aria-hidden="true" /><span className="section-kicker">Brief received</span><h1>We&apos;ll take it <em>from here.</em></h1><p>Thanks for sharing your project direction. The TechBengal team will review your brief and follow up with the next step.</p><Link className="button button-primary" href="/">Return home <ArrowUpRight aria-hidden="true" /></Link></section> : <section className="order-layout"><div className="order-intro"><span className="section-kicker">Project order</span><h1>Let&apos;s make something <em>useful.</em></h1><p>Give us enough context to understand the opportunity. You do not need a perfect brief; a clear starting point is enough.</p><div className="order-promise"><span>01</span><p>We review the opportunity</p><span>02</span><p>We clarify the right scope</p><span>03</span><p>We come back with next steps</p></div></div><form className="project-order-form" onSubmit={handleSubmit}><label htmlFor="name">Your name<input id="name" name="name" required placeholder="Jane Smith" /></label><label htmlFor="email">Work email<input id="email" name="email" type="email" required placeholder="jane@company.com" /></label><label htmlFor="company">Company or project name<input id="company" name="company" placeholder="Your company" /></label><label htmlFor="direction">What would you like to build?<select id="direction" name="direction" defaultValue=""><option value="" disabled>Select a direction</option><option>Digital product or website</option><option>AI and automation</option><option>Hardware or robotics</option><option>Not sure yet</option></select></label><label htmlFor="brief">Tell us about the project<textarea id="brief" name="brief" required rows={5} placeholder="What are you trying to make possible?" /></label><button className="button button-primary" type="submit">Send project brief <ArrowUpRight aria-hidden="true" /></button><p className="form-note">No commitment required. This first brief helps us understand where to begin.</p></form></section>}</div></main>
}
