import { 
  Lora, 
  Plus_Jakarta_Sans,
  JetBrains_Mono
} from 'next/font/google';
import './globals.css';
import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { DEV_NAME, MAIN_TITLE, SITE_URL } from './lib/constants';
import { SOCIALS } from './lib/navigation';

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus_jakarta_sans',
  display: 'swap',
})

const jetbrains_mono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Justin Wang',
    default: 'Justin Wang | Software Engineer'
  },
  description: 'Developer portfolio of Justin Wang.',
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: DEV_NAME,
  url: SITE_URL,
  jobTitle: MAIN_TITLE,
  sameAs: SOCIALS
    .map(social => social.href)
    .filter(href => href.startsWith('http')),
}

export default function Layout({ children } : { children: ReactNode }) {
  return (
    <html 
      lang='en' 
      className={`${plus_jakarta_sans.variable} ${lora.variable}
        ${jetbrains_mono.variable}`}
    >
      <body className='font-base antialiased'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}