'use client';
import { Transition, Variants, motion } from 'motion/react';
import { TECHSTACK_LAYER_NAV, TechstackLayer } from '@/app/lib/navigation';
import Fade from '../utils/Fade';

const TECHSTACK_PADDING_VERTICAL = 'pt-36 pb-6';
const TECHSTACK_STAGGER = 0.1;
const TECHSTACK_PAGE_DELAY = 0.6;
const TEXT_REVEAL_BUFFER = 0.2;
const TEXT_FADE_DURATION = 0.3;

const TECHSTACK_LAYER_SIZE = 'size-48';
const TECHSTACK_LAYER_PX_GAP = 85;
const TECHSTACK_LAYER_WALL_THICKNESS = 12;
const TECHSTACK_LAYER_SPRING = { type: 'spring', damping: 22, stiffness: 140 } satisfies Transition;

const TECHSTACK_TAP_SCALE     = 0.94;
const TECHSTACK_TAP_SPRING    = { type: 'spring', damping: 30, stiffness: 400 } satisfies Transition;

interface LayerCustomProps {
  targetZ: number;
}

const TECHSTACK_VARIANTS: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: TECHSTACK_STAGGER,
      delayChildren: TECHSTACK_PAGE_DELAY,
      staggerDirection: -1
    }
  }
};

const TECHSTACK_STYLE = {
  rotateX: 60,
  rotateZ: -45,
  transformStyle: 'preserve-3d'
} as const;

const TECHSTACK_LAYER_VARIANTS = {
  hidden: { z: 0 },
  show: ({ targetZ }: LayerCustomProps) => ({
    z: targetZ,
    transition: TECHSTACK_LAYER_SPRING
  })
} satisfies Variants;

const TECHSTACK_LAYER_STYLE = {
  size: TECHSTACK_LAYER_SIZE,
  zSpacing: TECHSTACK_LAYER_PX_GAP,
  wallThickness: TECHSTACK_LAYER_WALL_THICKNESS,
} as const;

interface TechstackProps {
  activeLayer: TechstackLayer;
  setActiveLayer: (layer: TechstackLayer) => void;
}

export default function Techstack({ activeLayer, setActiveLayer } : TechstackProps) {
  const layersLastIndex = TECHSTACK_LAYER_NAV.length - 1;
  const layerCustomProps = TECHSTACK_LAYER_NAV.map((_, i) => ({
    targetZ: i * TECHSTACK_LAYER_STYLE.zSpacing
  }));

  return (
    <Fade
      type='up' as='section'
      className={`relative w-full flex items-center justify-center ${TECHSTACK_PADDING_VERTICAL}`}
    >
      <motion.div
        variants={TECHSTACK_VARIANTS}
        style={TECHSTACK_STYLE}
        className={`relative ${TECHSTACK_LAYER_STYLE.size}`}
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
              variants={TECHSTACK_LAYER_VARIANTS}
              key={layer}

              onClick={() => {!isActive && setActiveLayer(layer)}}
              whileTap={!isActive
                ? { scale: TECHSTACK_TAP_SCALE, transition: TECHSTACK_TAP_SPRING }
                : undefined
              }

              className={`absolute inset-0 flex items-end justify-start p-4 transform-3d
                ${isActive ? 'cursor-default' : 'cursor-pointer group'}`}
            >
              <motion.div
                className={`absolute inset-0 border-2 transition-[colors,filter] duration-300
                  ${isActive
                    ? 'border-accent/50 bg-background'
                    : 'border-primary-muted/80 bg-background/75 group-hover:border-primary-muted group-hover:brightness-110'}`}
              />

              <motion.span
                initial={{ opacity: isTopLayer ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: isTopLayer ? 0 : textRevealDelay,
                  duration: TEXT_FADE_DURATION
                }}
                className={`relative z-10 block translate-z-px
                  text-sm tracking-widest uppercase font-bold transition-colors duration-300
                  ${isActive ? 'text-primary/90' : 'text-primary/80'}`}
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
        width: wallOrientation === 'left' ? `${TECHSTACK_LAYER_STYLE.wallThickness}px` : undefined,
        height: wallOrientation === 'left' ? undefined : `${TECHSTACK_LAYER_STYLE.wallThickness}px`,
      }}
      className={`absolute left-0 border-2 transition-colors duration-300
        ${wallOrientation === 'left'
          ? 'top-0 h-full border-l-0 brightness-75'
          : 'bottom-0 w-full border-b-0 brightness-50'}
        ${isActive
          ? 'border-accent/50 bg-background'
          : 'border-primary-muted/80 bg-background/75 group-hover:border-primary-muted'
        }
      `}
    />
  )
}
