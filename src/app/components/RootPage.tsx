'use client';
import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, Variants } from 'motion/react';
import { LightModeContext } from '../lib/context';
import { motion } from 'motion/react';
import { ABOUT_LABEL, HEADER_HEIGHT } from '../lib/navigation';
import HeaderNav from './navigation/HeaderNav';
import Hero from './hero/Hero';
import Work from './work/Work';
import Projects from './projects/Projects';
import About from './about/About';
import Footer from './navigation/Footer';

const PAGE_STAGGER = 0.2;
const PAGE_DELAY = 0.1;
const PAGE_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: PAGE_STAGGER,
      delayChildren: PAGE_DELAY
    }
  }
};

export default function RootPage() {
  const { scrollY } = useScroll();
  const lightModeRef = useRef<HTMLDivElement>(null);
  const [isLightMode, setIsLightMode] = useState(false);

  useMotionValueEvent(scrollY, 'change', () => {
    const el = lightModeRef.current;
    if (!el) return;
    setIsLightMode(Math.round(el.getBoundingClientRect().top) <= HEADER_HEIGHT);
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
            <div 
              ref={lightModeRef} id={ABOUT_LABEL} 
              className='text-background bg-primary 
                rounded-t-2xl tablet:rounded-t-3xl laptop:rounded-t-4xl'
            >
              <About />
              <Footer />
            </div>
          </motion.section>
        </main>
      </div>
    </LightModeContext.Provider>
  )
}