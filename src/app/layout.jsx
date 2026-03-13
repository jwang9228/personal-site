import { Inter, Lora } from 'next/font/google';
import './globals.css';
import RootLayout from './components/RootLayout';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
}); 

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | Justin Wang',
    default: 'Justin Wang'
  },
  description: "Justin Wang's Personal Site",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Layout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${lora.variable}`}>
      <body className='font-base antialiased'>
        <RootLayout children={children} />
      </body>
    </html>
  );
}