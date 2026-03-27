import { Variants } from 'motion/react';

export const TECHSTACK_STAGGER = 0.1;
export const TECHSTACK_PAGE_DELAY = 0.4;
export const TEXT_REVEAL_BUFFER = 0.2;
export const TEXT_FADE_DURATION = 0.3;

const TECHSTACK_LAYER_SIZE = 'size-48';
const TECHSTACK_LAYER_PX_GAP = 80;
const TECHSTACK_LAYER_WALL_THICKNESS = 12;
const TECHSTACK_LAYER_DAMPNESS = 18;
const TECHSTACK_LAYER_STIFFNESS = 120;

const FADE_UP_PX_TRANSLATION = 20;
const FADE_UP_DURATION = 0.6;
const FADE_UP_EASE = 'easeOut';

const FADE_IN_DURATION = 0.25;

interface LayerCustomProps {
  targetZ: number;
};

export const ANIM = {
  techstackVariants: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: TECHSTACK_STAGGER,
        delayChildren: TECHSTACK_PAGE_DELAY,
        staggerDirection: -1
      }
    }
  } satisfies Variants,

  techstackStyle: {
    rotateX: 60,
    rotateZ: -45,
    transformStyle: 'preserve-3d'
  } as const,

  techstackLayerVariants: {
    hidden: { z: 0 }, 
    show: ({ targetZ }: LayerCustomProps) => ({
      z: targetZ,
      transition: { 
        type: 'spring', 
        damping: TECHSTACK_LAYER_DAMPNESS, 
        stiffness: TECHSTACK_LAYER_STIFFNESS 
      }
    })
  } satisfies Variants,

  techstackLayerStyle: {
    size: TECHSTACK_LAYER_SIZE,
    zSpacing: TECHSTACK_LAYER_PX_GAP,
    wallThickness: TECHSTACK_LAYER_WALL_THICKNESS,
  } as const,

  fadeUpVariants: {
    hidden: { opacity: 0, y: FADE_UP_PX_TRANSLATION },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: FADE_UP_DURATION,
        ease: FADE_UP_EASE
      }
    }
  } satisfies Variants,

  fadeInVariants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: FADE_IN_DURATION,
        ease: 'easeOut'
      }
    }
  } satisfies Variants
};