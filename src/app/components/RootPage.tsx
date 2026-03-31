'use client';
import { motion } from 'motion/react';
import { PAGE_VARIANTS } from '@/app/lib/animations';
import Hero from './hero/Hero';
import Work from './work/Work';

export default function RootPage() {
  return (
    <motion.main variants={PAGE_VARIANTS} initial='hidden' animate='show'>
      <Hero />
      <Work />
    </motion.main>
  )
}