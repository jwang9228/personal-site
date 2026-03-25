'use client';
import { motion } from 'motion/react';

export default function Techstack() {
  const layoutVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 }
    }
  };

  const tileVariants = {
    hidden: ({ startZ }) => ({ z: startZ, opacity: 0 }),
    show: ({ targetZ }) => ({
      z: targetZ,
      opacity: 1,
      transition: { type: 'spring', damping: 15, stiffness: 80 }
    })
  };

  const tiles = [
    {label: 'Project', isActive: false},
    {label: 'Experience', isActive: false},
    {label: 'Home', isActive: true}
  ];

  return (
    <section 
      style={{ perspective: '1000px' }}
      className='relative w-full flex items-center justify-center pt-40'
    >
      <motion.div
        variants={layoutVariants}
        initial='hidden'
        animate='show'
        style={{ 
          rotateX: 60, 
          rotateZ: -45, 
          transformStyle: 'preserve-3d'
        }}
        className='relative size-48'
      >
        {tiles.map((tile, i) => {
          const targetZ = i * 75;
          const startZ = Math.max(0, (i - 1) * 75);

          return (
            <motion.div 
              custom={{ targetZ, startZ }}
              variants={tileVariants} 
              key={tile.label}
              className={`absolute inset-0 border-2 flex items-end justify-start p-4 cursor-pointer
                ${tile.isActive 
                  ? 'border-accent/40 bg-accent/15 backdrop-blur-md shadow-2xl' 
                  : 'border-primary-muted/80 bg-background/80 backdrop-blur-sm shadow-xl'} `}
            >
              <span className='block translate-z-px text-sm tracking-widest uppercase text-primary/80 font-bold'>
                {tile.label}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}