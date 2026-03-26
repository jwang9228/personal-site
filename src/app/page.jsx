'use client';

import { motion } from 'motion/react';
import Techstack from './components/Techstack';
import Title from './components/Title';

export default function Page() {
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
      <Techstack />
    </motion.main>
  );
};
