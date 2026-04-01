'use client';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { LightModeContext } from '../lib/context';
import { motion } from 'motion/react';
import { PAGE_VARIANTS } from '@/app/lib/animations';
import HeaderNav from './navigation/HeaderNav';
import Hero from './hero/Hero';
import Work from './work/Work';
import Projects from './projects/Projects';
import About from './about/About';
import Footer from './navigation/Footer';

export default function RootPage() {
  const lightModeRef = useRef(null);
  const isLightMode = useInView(lightModeRef, {
    margin: '-61px 0px -90% 0px'
  });

  return (
    <LightModeContext.Provider value={isLightMode}>
      <div className='layout-root'>
        <HeaderNav />
        <main className='grow'>
          <motion.section variants={PAGE_VARIANTS} initial='hidden' animate='show'>
            <Hero />
            <Work />
            <Projects />
            <div ref={lightModeRef} className='bg-primary'>
              <About />
              <Footer />
            </div>
          </motion.section>
        </main>
      </div>
    </LightModeContext.Provider>
  )
}