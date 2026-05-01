import { 
  Lora, 
  Plus_Jakarta_Sans,
  JetBrains_Mono
} from 'next/font/google';
import './globals.css';
import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

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
  metadataBase: new URL('https://justinnwang.com'),
  title: {
    template: '%s | Justin Wang',
    default: 'Justin Wang | Software Engineer'
  },
  description: 'Developer portfolio of Justin Wang.'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Layout({ children } : { children: ReactNode }) {
  return (
    <html 
      lang='en' 
      className={`${plus_jakarta_sans.variable} ${lora.variable}
        ${jetbrains_mono.variable}`}
    >
      <body className='font-base antialiased'>
        {children}
      </body>
    </html>
  );
}