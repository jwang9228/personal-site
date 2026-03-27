'use client';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';
import { TECHSTACK_LAYER_NAV, TechstackLayer } from '@/app/lib/navigation';
import Techstack from './Techstack';
import Title from './Title';

export default function Work() {
  const [activeLayer, setActiveLayer] = useState<TechstackLayer>(
    TECHSTACK_LAYER_NAV[TECHSTACK_LAYER_NAV.length - 1]
  );

  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.main variants={pageVariants} initial='hidden' animate='show'>
      <Title />
      <Techstack activeLayer={activeLayer} setActiveLayer={setActiveLayer} />
    </motion.main>
  );
};
