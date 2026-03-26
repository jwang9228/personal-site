import { Lora, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import RootLayout from './components/RootLayout';

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus_jakarta_sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://justinnwang.com'),
  title: {
    template: '%s | Justin Wang',
    default: 'Justin Wang | Software Engineer'
  },
  description: 'Developer portfolio of Justin Wang.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Layout({ children }) {
  return (
    <html lang='en' className={`${plus_jakarta_sans.variable} ${lora.variable}`}>
      <body className='font-base antialiased'>
        <RootLayout children={children} />
      </body>
    </html>
  );
}