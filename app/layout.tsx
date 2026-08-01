import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaveesha Fernando — Data Scientist',
  description: 'Data Scientist exploring Human-Centered AI, Theory of Mind & HCI. Designing intelligence that understands people.',
  generator: 'v0.app',
  openGraph: {
    title: 'Kaveesha Fernando — Data Scientist',
    description: 'Designing intelligence that understands people.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fcfbf9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#fcfbf9]">
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
