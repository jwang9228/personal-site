'use client';

import Link from 'next/link';
import Fade from './components/utils/Fade';
import { motion, Variants } from 'motion/react';

const NOT_FOUND_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

export default function NotFound() {
  return (
    <motion.main 
      variants={NOT_FOUND_VARIANTS}
      initial='hidden'
      animate='show'
      className='flex flex-col h-[90vh]
        justify-center items-center text-center
        layout-px max-w-md gap-y-8'
    >
      <Fade speed='ui'>
        <h1 className='text-8xl text-primary/95 
          tracking-wider font-accent font-medium'>
          404
        </h1>
      </Fade>

      <Fade speed='ui'>
        <p className='flex flex-col gap-y-4 font-mono leading-relaxed'>
          <span className='flex justify-center items-center gap-x-3'>
            <span className='text-xl text-primary/95'>{'> Page not found'}</span>
            <motion.span 
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'mirror',
                times: [0, 0.5, 0.5, 1]
              }}
              className='w-0.5 h-5 bg-primary/75' 
            />
          </span>
          <span className='text-sm text-primary/80'>
            This portfolio is a single-page layout — <br /> there are no internal links to follow.
          </span>
        </p>
      </Fade>

      <Fade speed='ui' className='mt-4'>
        <Link
          href='/'
          className='inline-block bg-primary/95 text-background 
            font-mono font-medium uppercase px-5 py-2 rounded-md
            transition-transform hover:scale-105 active:scale-95'
        >
          Return Home
        </Link>
      </Fade>
    </motion.main>
  )
}