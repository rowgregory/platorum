import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'
import PageWrapper from './page-wrapper'

export const metadata: Metadata = {
  metadataBase: new URL('https://platorum.com'),
  title: 'Platorum',
  description:
    'Platorum is a premier music business consultancy specializing in music promotion, artist management, and event support. We help musicians and events thrive with tailored solutions.',
  keywords: [
    'Platorum',
    'music promotion',
    'artist management',
    'event support',
    'concert promotion',
    'music consultancy',
    'event organization',
    'tour support',
    'music business consulting',
    'music industry solutions',
    'artist development',
    'event planning',
    'concert management',
    'musician support',
    'music promotion experts',
    'live event support',
    'entertainment industry',
    'music marketing',
    'event production',
    'music strategy',
    'musician empowerment',
    'event management',
    'concert production',
    'music promotion services',
    'event coordination',
    'music business services'
  ],
  openGraph: {
    title: 'Platorum',
    description:
      'Premier music business consultancy providing expert promotion, artist management, and event support services. Helping the music industry achieve success and create unforgettable moments.',
    url: 'https://platorum.com',
    siteName: 'Platorum',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fplatorum-rich.png?alt=media&token=931d3aa8-8403-424e-9340-f77cf62cdf51',
        width: 1200,
        height: 630,
        alt: 'Platorum logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  applicationName: 'Platorum',
  appleWebApp: {
    title: 'Platorum',
    statusBarStyle: 'default',
    capable: true
  },
  alternates: {
    canonical: 'https://platorum.com'
  },
  other: {
    'apple-mobile-web-app-capable': 'yes', // Add this for legacy support
    'mobile-web-app-capable': 'yes' // This will explicitly cover modern cases
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
