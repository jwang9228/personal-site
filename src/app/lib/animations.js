export const TECHSTACK_STAGGER = 0.15;
export const TECHSTACK_PAGE_DELAY = 1.0;
export const TEXT_REVEAL_BUFFER = 0.15;
export const TEXT_FADE_DURATION = 0.3;

const TILE_SIZE = 'size-48';
const TILE_PX_GAP = 80;
const TILE_WALL_THICKNESS = 12;
const TILE_DAMPNESS = 20;
const TILE_STIFFNESS = 100;

const FADE_UP_PX_TRANSLATION = 20;
const FADE_UP_DURATION = 0.8;
const FADE_UP_EASE = 'easeOut';

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
  },

  techstackStyle: {
    rotateX: 60,
    rotateZ: -45,
    transformStyle: 'preserve-3d'
  },

  tileVariants: {
    hidden: { z: 0 }, 
    show: ({ targetZ }) => ({
      z: targetZ,
      transition: { 
        type: 'spring', 
        damping: TILE_DAMPNESS, 
        stiffness: TILE_STIFFNESS 
      }
    })
  },

  tileStyle: {
    tileSize: TILE_SIZE,
    zSpacing: TILE_PX_GAP,
    wallThickness: TILE_WALL_THICKNESS,
  },

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
  },

  fadeInVariants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }
};