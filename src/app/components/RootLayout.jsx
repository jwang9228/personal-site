'use client';

import HeaderNav from './HeaderNav';
import Footer from './Footer';

export default function RootLayout({children}) {
  return (
    <div className='layout-root relative overflow-x-hidden'>
      <div className='absolute -top-32 left-1/2 -translate-x-1/2 w-full h-1/6 
        pointer-events-none -z-10 animate-bloom bg-accent/60 blur-[60px] rounded-[100%]' />
      
      <HeaderNav />
      <main className='layout-children'>
        {children}
      </main>
      <Footer />
    </div>
  )
};