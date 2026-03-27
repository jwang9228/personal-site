'use client';
import { motion } from 'motion/react';
import { TECHSTACK_LAYER_NAV, TechstackLayer } from '@/app/lib/navigation';
import { 
  ANIM, 
  TECHSTACK_PAGE_DELAY, 
  TECHSTACK_STAGGER, 
  TEXT_REVEAL_BUFFER,
  TEXT_FADE_DURATION
} from '@/app/lib/animations';
import Fade from '../utils/Fade';

interface TechstackProps {
  activeLayer: TechstackLayer;
  setActiveLayer: (layer: TechstackLayer) => void;
}

export default function Techstack({ activeLayer, setActiveLayer } : TechstackProps) {
  return (
    <Fade
      type='up' as='section'
      className='relative w-full flex items-center justify-center pt-40'
    >
      <motion.div
        variants={ANIM.techstackVariants}
        style={ANIM.techstackStyle}
        className={`relative ${ANIM.techstackLayerStyle.size}`}
      >
        {TECHSTACK_LAYER_NAV.map((layer, i) => {
          const layersLastIndex = TECHSTACK_LAYER_NAV.length - 1;
          const reverseIndex = layersLastIndex - i;
          const textRevealDelay = TECHSTACK_PAGE_DELAY + (reverseIndex * TECHSTACK_STAGGER) + TEXT_REVEAL_BUFFER;
          const targetZ = i * ANIM.techstackLayerStyle.zSpacing;
          const isTopLayer = i === layersLastIndex;
          const isActive = layer === activeLayer;

          return (
            <motion.div 
              custom={{ targetZ }}
              variants={ANIM.techstackLayerVariants} 
              key={layer}

              onClick={() => {!isActive && setActiveLayer(layer)}}

              className={`absolute inset-0 flex items-end justify-start p-4 transform-3d
                ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div 
                className={`absolute inset-0 border-2
                  ${isActive
                    ? 'border-accent/50 bg-accent/20 shadow-2xl' 
                    : 'border-primary-muted/80 bg-background/90 shadow-xl'}`} 
              />

              <motion.span 
                initial={{ opacity: isTopLayer ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: isTopLayer ? 0 : textRevealDelay, 
                  duration: TEXT_FADE_DURATION 
                }}
                className='relative z-10 block translate-z-px
                  text-sm tracking-widest uppercase text-primary/80 font-bold'
              >
                {layer}
              </motion.span>
              
              <div 
                style={{ 
                  transformOrigin: 'left', 
                  transform: 'rotateY(90deg)',
                  width: `${ANIM.techstackLayerStyle.wallThickness}px`
                }}
                className={`absolute top-0 left-0 h-full border-2 border-l-0 brightness-75
                  ${isActive ? 'border-accent/50 bg-accent/20' : 'border-primary-muted/80 bg-background/90'}`} 
              />
              
              <div 
                style={{ 
                  transformOrigin: 'bottom', 
                  transform: 'rotateX(90deg)',
                  height: `${ANIM.techstackLayerStyle.wallThickness}px`
                }}
                className={`absolute bottom-0 left-0 w-full border-2 border-b-0 brightness-50
                  ${isActive ? 'border-accent/50 bg-accent/20' : 'border-primary-muted/80 bg-background/90'}`} 
              />
            </motion.div>
          )
        })}
      </motion.div>
    </Fade>
  )
}