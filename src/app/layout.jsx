import { Inter } from 'next/font/google'
import './globals.css';
import RootLayout from './components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Justin Wang",
  description: "Justin Wang's Personal Site",
};

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} >
        <RootLayout children={children} />
      </body>
    </html>
  );
}
