'use client';

import Header from './Header';
import Footer from './Footer';

export default function RootLayout({children}) {
  return (
    <div className='layout-root'>
      <Header />
      <main className='layout-children'>
        {children}
      </main>
      <Footer />
    </div>
  )
};