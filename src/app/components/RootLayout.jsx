'use client';

import HeaderNav from './navigation/HeaderNav';
import Footer from './navigation/Footer';

export default function RootLayout({ children }) {
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