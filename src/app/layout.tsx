import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import StickyCTA from '@/components/StickyCTA'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vedikaweddings.com'),
  title: {
    default: 'Vedika Weddings | Luxury Wedding Photography in Nepal',
    template: '%s | Vedika Weddings',
  },
  description:
    'Award-winning wedding photographer in Pokhara & Kathmandu, Nepal. Cinematic films, luxury packages, and full wedding planning. Capturing your love story with artistry.',
  keywords: [
    'wedding photographer in Pokhara',
    'wedding photography Nepal',
    'wedding photographer Kathmandu',
    'luxury wedding photography Nepal',
    'Nepali wedding photographer',
    'wedding videographer Nepal',
    'pre-wedding photography Nepal',
    'cinematic wedding film Nepal',
    'destination wedding Nepal',
    'vedika weddings',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Vedika Weddings',
    title: 'Vedika Weddings | Luxury Wedding Photography in Nepal',
    description:
      'From moments to memories — luxury wedding photography and planning in Pokhara & Kathmandu, Nepal.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vedika Weddings' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vedika Weddings | Nepal's Premier Wedding Photographers",
    description: 'Cinematic wedding photography and planning across Nepal.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyCTA />
      </body>
    </html>
  )
}
