import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://goaivora.com'),
  
  title: {
    default: 'GoAivora — Modernize Your Analytics. Migrate to Microsoft Fabric.',
    template: '%s | GoAivora',
  },
  description:
    'GoAivora helps enterprises migrate Tableau and legacy BI to Microsoft Fabric. Build AI-powered dashboards, copilots, and enterprise analytics platforms.',
  keywords: [
    'Tableau migration',
    'Microsoft Fabric',
    'Power BI migration',
    'analytics modernization',
    'AI dashboards',
    'analytics copilot',
    'Snowflake migration',
    'SQL Server Fabric',
    'enterprise analytics',
  ],
  authors: [{ name: 'GoAivora Technologies' }],
  creator: 'GoAivora Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.goaivora.com',
    siteName: 'GoAivora',
    title: 'GoAivora — Modernize Your Analytics. Migrate to Microsoft Fabric.',
    description:
      'GoAivora helps enterprises migrate Tableau and legacy BI to Microsoft Fabric. Build AI-powered dashboards, copilots, and enterprise analytics platforms.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GoAivora — Enterprise Analytics Modernization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoAivora — Modernize Your Analytics',
    description:
      'Migrate Tableau and legacy BI to Microsoft Fabric. Build AI-powered dashboards and analytics copilots.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
