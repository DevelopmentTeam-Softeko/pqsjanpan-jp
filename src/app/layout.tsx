import './globals.css'

import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { NEXT_SEO_DEFAULT } from '@/app/next-seo.config'
import ProgressBarProvider from '@/app/ProgressBarProvider'
import ContactBand from '@/components/ContactBand'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

import LocalStateProvider from './LocalStateProvider'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  ...NEXT_SEO_DEFAULT,
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WJND7HHB" />
      <body className={roboto.className} id="body">
        <ProgressBarProvider>
          <div>
            <ContactBand />
            <NavBar />
          </div>
          <LocalStateProvider>{children}</LocalStateProvider>
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  )
}
