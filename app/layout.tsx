import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechBengal — Engineering the Future of Technology',
  description: 'TechBengal builds intelligent software, digital experiences, electronics, and future-facing technology capabilities.',
  metadataBase: new URL('https://techbengal.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'TechBengal — Engineering the Future of Technology',
    description: 'Technology. Innovation. Intelligence.',
    type: 'website',
    url: 'https://techbengal.com',
  },
  twitter: { card: 'summary_large_image', title: 'TechBengal', description: 'Engineering the future of technology.' },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080D18',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
