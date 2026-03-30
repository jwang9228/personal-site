'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TECHSTACK_LAYER_NAV, TechstackLayer } from '@/app/lib/navigation';
import { PAGE_VARIANTS } from '@/app/lib/animations';
import Techstack from './Techstack';
import Title from './Title';

export default function Work() {
  const [activeLayer, setActiveLayer] = useState<TechstackLayer>(
    TECHSTACK_LAYER_NAV[TECHSTACK_LAYER_NAV.length - 1]
  );

  return (
    <motion.main variants={PAGE_VARIANTS} initial='hidden' animate='show'>
      <Title />
      <Techstack activeLayer={activeLayer} setActiveLayer={setActiveLayer} />
    </motion.main>
  );
};
