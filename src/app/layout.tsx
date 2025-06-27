import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Yosua Ferdian | Technical Specialist',
  description: 'Portfolio of Yosua Ferdian. Expert in Google Tracking solutions and web development.',
  openGraph: {
    title: 'Yosua Ferdian | Technical Specialist',
    description: 'Expert in Google Tracking solutions and web development.',
    url: 'https://yosuaf.com', // Replace with your actual website URL
    siteName: 'Yosua Ferdian Portfolio',
    images: [
      {
        url: '/images/logo.png', // Path to your preview image
        width: 1200,
        height: 630,
        alt: 'Yosua Ferdian Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: { // Optional, but recommended for Twitter sharing
    card: 'summary_large_image',
    title: 'Yosua Ferdian | Technical Specialist',
    description: 'Expert in Google Tracking solutions and web development.',
    images: ['/images/logo.png'], // Path to your preview image
  },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}