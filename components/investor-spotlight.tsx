import { Globe2, MapPin, Quote, Rocket, TrendingUp } from 'lucide-react'

const portraitUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_fv9mwnfv9mwnfv9m.jfif-hhjnsB1CGrsjBV8HTgtcXo3RAQ0ZcH.jpeg'

const highlights = [
  { icon: TrendingUp, text: 'Investor since 2025' },
  { icon: Globe2, text: 'GCC & Qatar Strategic Reach' },
  { icon: Rocket, text: 'Digital Transformation Focus' },
]

export function InvestorSpotlight() {
  return <section className="investor-spotlight" aria-labelledby="investor-spotlight-title"><div className="investor-portrait-wrap"><img className="investor-portrait" src={portraitUrl} alt="Ashraf Uddin, investor and strategic partner at Tech Bengal" /></div><div className="investor-content"><span className="investor-badge">Investor Perspective</span><div className="investor-heading"><div><h2 id="investor-spotlight-title">Ashraf Uddin</h2><p className="investor-role">Investor &amp; Strategic Partner, Tech Bengal</p><p className="investor-location"><MapPin aria-hidden="true" /> Doha, Qatar</p></div><Quote className="investor-quote-mark" aria-hidden="true" /></div><blockquote>“At Tech Bengal, I saw a rare combination of technical excellence and a bold vision for digital transformation. Investing here wasn&apos;t just a financial decision—it was a strategic commitment to driving real innovation and empowering the next wave of technology solutions.”</blockquote><div className="investor-highlights" aria-label="Investor highlights">{highlights.map(({ icon: Icon, text }) => <span key={text}><Icon aria-hidden="true" />{text}</span>)}</div></div></section>
}
