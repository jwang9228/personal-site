'use client';
import { motion } from 'motion/react';
import { TILE_NAV } from '../lib/navigation';
import { 
  ANIM, 
  TECHSTACK_PAGE_DELAY, 
  TECHSTACK_STAGGER, 
  TEXT_REVEAL_BUFFER,
  TEXT_FADE_DURATION
} from '../lib/animations';
import Fade from './utils/Fade';

export default function Techstack() {
  return (
    <Fade
      type='up'
      className='relative w-full flex items-center justify-center pt-40'
    >
      <motion.div
        variants={ANIM.techstackVariants}
        style={ANIM.techstackStyle}
        className={`relative ${ANIM.tileStyle.tileSize}`}
      >
        {TILE_NAV.map((tile, i) => {
          const targetZ = i * ANIM.tileStyle.zSpacing;
          const reverseIndex = TILE_NAV.length - 1 - i;
          const textRevealDelay = TECHSTACK_PAGE_DELAY + (reverseIndex * TECHSTACK_STAGGER) + TEXT_REVEAL_BUFFER;
          const isTopTile = i === TILE_NAV.length - 1;

          return (
            <motion.div 
              custom={{ targetZ }}
              variants={ANIM.tileVariants} 
              key={tile.label}
              className={`absolute inset-0 flex items-end justify-start p-4 cursor-pointer transform-3d
                border-2 ${tile.isActive 
                  ? 'border-accent/50 bg-accent/20 shadow-2xl' 
                  : 'border-primary-muted/80 bg-background/90 shadow-xl'} `}
            >
              <motion.span 
                initial={{ opacity: isTopTile ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: isTopTile ? 0 : textRevealDelay, 
                  duration: TEXT_FADE_DURATION 
                }}
                className='block translate-z-px text-sm tracking-widest uppercase text-primary/80 font-bold'
              >
                {tile.label}
              </motion.span>
              
              <div 
                style={{ 
                  transformOrigin: 'left', 
                  transform: 'rotateY(90deg)',
                  width: `${ANIM.tileStyle.wallThickness}px`
                }}
                className={`absolute top-0 left-0 h-full border-2 brightness-75
                  ${tile.isActive ? 'border-accent/50 bg-accent/20' : 'border-primary-muted/80 bg-background/90'}`} 
              />
              
              <div 
                style={{ 
                  transformOrigin: 'bottom', 
                  transform: 'rotateX(90deg)',
                  height: `${ANIM.tileStyle.wallThickness}px`
                }}
                className={`absolute bottom-0 left-0 w-full border-2 brightness-50
                  ${tile.isActive ? 'border-accent/50 bg-accent/20' : 'border-primary-muted/80 bg-background/90'}`} 
              />
            </motion.div>
          )
        })}
      </motion.div>
    </Fade>
  )
};