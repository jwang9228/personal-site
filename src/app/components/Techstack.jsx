'use client';
import { motion } from 'motion/react';

export default function Techstack() {
  const layoutVariants = {
    hidden: {}, 
    show: {
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 1, 
        staggerDirection: -1 
      }
    }
  };

  const tileVariants = {
    hidden: { z: 0 }, 
    show: ({ targetZ }) => ({
      z: targetZ,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    })
  };

  const tiles = [
    {label: 'Project', isActive: false},
    {label: 'Experience', isActive: false},
    {label: 'Home', isActive: true}
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
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
          const targetZ = i * 80;

          const reverseIndex = tiles.length - 1 - i;
          const textRevealDelay = 1 + (reverseIndex * 0.15);

          return (
            <motion.div 
              custom={{ targetZ }}
              variants={tileVariants} 
              key={tile.label}
              className={`absolute inset-0 flex items-end justify-start p-4 cursor-pointer [transform-style:preserve-3d]
                border-2 ${tile.isActive 
                  ? 'border-accent/50 bg-accent/20 shadow-2xl' 
                  : 'border-primary-muted/80 bg-background/90 shadow-xl'} `}
            >
              <motion.span 
                initial={{ opacity: tile.isActive ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: tile.isActive ? 0 : textRevealDelay, 
                  duration: 0.3 
                }}
                className='block translate-z-px text-sm tracking-widest uppercase text-primary/80 font-bold'
              >
                {tile.label}
              </motion.span>
              
              <div 
                style={{ transformOrigin: 'left', transform: 'rotateY(90deg)' }}
                className={`absolute top-0 left-0 h-full w-[12px] border-2 brightness-75
                  ${tile.isActive ? 'border-accent/50 bg-accent/20' : 'border-primary-muted/80 bg-background/90'}`} 
              />
              
              <div 
                style={{ transformOrigin: 'bottom', transform: 'rotateX(90deg)' }}
                className={`absolute bottom-0 left-0 w-full h-[12px] border-2 brightness-50
                  ${tile.isActive ? 'border-accent/50 bg-accent/20' : 'border-primary-muted/80 bg-background/90'}`} 
              />
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}