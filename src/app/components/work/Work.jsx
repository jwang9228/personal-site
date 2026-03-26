'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TECHSTACK_LAYER_NAV } from '@/app/lib/navigation';
import Techstack from './Techstack';
import Title from './Title';

export default function Work() {
  const [activeLayer, setActiveLayer] = useState(TECHSTACK_LAYER_NAV.at(-1));

  const pageVariants = {
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
