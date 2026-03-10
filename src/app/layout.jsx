import { Lora } from 'next/font/google'
import './globals.css';
import RootLayout from './components/RootLayout';

const lora = Lora({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className={`${lora.className}`} >
        <RootLayout children={children} />
      </body>
    </html>
  );
}