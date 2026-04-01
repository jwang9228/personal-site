import { Transition, Variants } from 'motion/react';

// --- Page ---
const PAGE_STAGGER = 0.2;
const PAGE_DELAY = 0.1;

export const PAGE_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: PAGE_STAGGER,
      delayChildren: PAGE_DELAY
    }
  }
};

// --- Techstack ---
export const TECHSTACK_PADDING_VERTICAL = 'pt-36 pb-6';
export const TECHSTACK_STAGGER = 0.1;
export const TECHSTACK_PAGE_DELAY = 0.6;
export const TEXT_REVEAL_BUFFER = 0.2;
export const TEXT_FADE_DURATION = 0.3;

const TECHSTACK_LAYER_SIZE = 'size-48';
const TECHSTACK_LAYER_PX_GAP = 85;
const TECHSTACK_LAYER_WALL_THICKNESS = 12;
const TECHSTACK_LAYER_SPRING = { type: 'spring', damping: 22, stiffness: 140 } satisfies Transition;

export const TECHSTACK_TAP_SCALE     = 0.94;
export const TECHSTACK_TAP_SPRING    = { type: 'spring', damping: 30, stiffness: 400 } satisfies Transition;

interface LayerCustomProps {
  targetZ: number;
}

export const TECHSTACK_VARIANTS: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: TECHSTACK_STAGGER,
      delayChildren: TECHSTACK_PAGE_DELAY,
      staggerDirection: -1
    }
  }
};

export const TECHSTACK_STYLE = {
  rotateX: 60,
  rotateZ: -45,
  transformStyle: 'preserve-3d'
} as const;

export const TECHSTACK_LAYER_VARIANTS = {
  hidden: { z: 0 },
  show: ({ targetZ }: LayerCustomProps) => ({
    z: targetZ,
    transition: TECHSTACK_LAYER_SPRING
  })
} satisfies Variants;

export const TECHSTACK_LAYER_STYLE = {
  size: TECHSTACK_LAYER_SIZE,
  zSpacing: TECHSTACK_LAYER_PX_GAP,
  wallThickness: TECHSTACK_LAYER_WALL_THICKNESS,
} as const;

// --- Fade ---
const FADE_UP_PX_TRANSLATION = 20;
const FADE_UP_DURATION = 0.45;
const FADE_UP_EASE = 'easeOut';
const FADE_IN_DURATION = 0.25;

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: FADE_UP_PX_TRANSLATION },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: FADE_UP_DURATION,
      ease: FADE_UP_EASE
    }
  }
};

export const FADE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: FADE_IN_DURATION,
      ease: 'easeOut'
    }
  }
};
