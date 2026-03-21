'use client';

import HeaderNav from './HeaderNav';
import Footer from './Footer';

export default function RootLayout({children}) {
  return (
    <div className='layout-root'>
      <HeaderNav />
      <main className='layout-children'>
        {children}
      </main>
      <Footer />
    </div>
  )
};