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
  const layersLastIndex = TECHSTACK_LAYER_NAV.length - 1;
  const layerCustomProps = TECHSTACK_LAYER_NAV.map((_, i) => ({
   targetZ: i * ANIM.techstackLayerStyle.zSpacing
  }));

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
          const reverseIndex = layersLastIndex - i;
          const isTopLayer = i === layersLastIndex;
          const isActive = layer === activeLayer;

          const textRevealDelay = isTopLayer ? 0 
            : TECHSTACK_PAGE_DELAY + (reverseIndex * TECHSTACK_STAGGER) + TEXT_REVEAL_BUFFER;

          return (
            <motion.div 
              custom={layerCustomProps[i]}
              variants={ANIM.techstackLayerVariants} 
              key={layer}

              onClick={() => {!isActive && setActiveLayer(layer)}}

              className={`absolute inset-0 flex items-end justify-start p-4 transform-3d
                ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <motion.div
                className={`absolute inset-0 border-2 transition-colors duration-300
                  ${isActive
                    ? 'border-accent/50 bg-accent/20 shadow-2xl' 
                    : 'border-primary-muted/80 bg-background/75 shadow-xl'}`} 
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
              
              <TechstackWall wallOrientation='left' isActive={isActive} />
              
              <TechstackWall wallOrientation='bottom' isActive={isActive} />
            </motion.div>
          )
        })}
      </motion.div>
    </Fade>
  )
}

function TechstackWall({
  wallOrientation,
  isActive
}: { wallOrientation: 'left' | 'bottom', isActive: boolean }) {
  return (
    <motion.div
      style={{
        transformOrigin: wallOrientation,
        transform: wallOrientation === 'left' ? 'rotateY(90deg)' : 'rotateX(90deg)',
        width: wallOrientation === 'left' ? `${ANIM.techstackLayerStyle.wallThickness}px` : undefined,
        height: wallOrientation === 'left' ? undefined : `${ANIM.techstackLayerStyle.wallThickness}px`,
      }}
      className={`absolute left-0 border-2 transition-colors duration-300
        ${wallOrientation === 'left' 
          ? 'top-0 h-full border-l-0 brightness-75' 
          : 'bottom-0 w-full border-b-0 brightness-50'}
        ${isActive ? 'border-accent/50 bg-accent/20' : 'border-primary-muted/80 bg-background/75'}
      `}
    />
  )
}