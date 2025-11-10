import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Himanshu Shukla | Project Management & Digital Transformation Consultant',
  description: '14+ years of strategic project management and digital transformation expertise. Delivering measurable business impact across Climate-Tech, FinTech, SaaS, Banking, and Digital Twin sectors. $100M+ in project value influenced.',
  keywords: 'project management consultant, digital transformation consultant, business operations consultant, strategic consulting, project management services, digital twin consultant, climate tech consultant, fintech consultant',
  authors: [{ name: 'Himanshu Shukla' }],
  creator: 'Himanshu Shukla',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thehimanshushukla.com',
    title: 'Himanshu Shukla | Project Management & Digital Transformation Consultant',
    description: '14+ years delivering transformative business outcomes through strategic project management and digital innovation.',
    siteName: 'Himanshu Shukla Consulting'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu Shukla | Project Management & Digital Transformation Consultant',
    description: 'Strategic consulting for business transformation and operational excellence'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body`}>{children}</body>
    </html>
  )
}
