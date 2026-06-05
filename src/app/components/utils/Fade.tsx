'use client';
import { motion, Variants } from 'motion/react';
import { ReactNode, ElementType, memo, forwardRef } from 'react';

// Configurations
const FADE_UP_UI_PX_TRANSLATION = 10;
const FADE_UP_SECTION_PX_TRANSLATION = 25;
const FADE_IN_DURATION = 0.3;

// UI Timing
const UI_DURATION = 0.3;
const UI_EASE = [0.2, 0.65, 0.3, 0.9] as const;

// Section timing
const SECTION_DURATION = 0.6;
const SECTION_EASE = [0.25, 0.4, 0.25, 1] as const;

const FADE_UP_UI_VARIANTS: Variants = {
  hidden: { opacity: 0, y: FADE_UP_UI_PX_TRANSLATION },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: UI_DURATION, ease: UI_EASE }
  }
};

const FADE_UP_SECTION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: FADE_UP_SECTION_PX_TRANSLATION },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: SECTION_DURATION, ease: SECTION_EASE }
  }
};

export const FADE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: FADE_IN_DURATION, ease: 'easeOut' }
  }
};

type ValidTag = 'div' | 'section' | 'main' | 'span' | 'header' | 'footer' | 'nav';

interface FadeProps {
  children: ReactNode;
  speed?: 'ui' | 'section';
  type?: 'up' | 'in';
  as?: ValidTag;
  inView?: boolean;
  className?: string;
}

const Fade = forwardRef<HTMLElement, FadeProps>(({
  children,
  type = 'up',
  speed = 'section',
  as = 'div' as ValidTag,
  inView = false,
  className = '',
}, ref) => {
  const Component = motion[as] as ElementType;

  let selectedVariant = FADE_UP_SECTION_VARIANTS;
  if (type === 'in') {
    selectedVariant = FADE_IN_VARIANTS;
  } else if (speed === 'ui') {
    selectedVariant = FADE_UP_UI_VARIANTS;
  }

  // inView - apply scroll-trigger props
  const triggerProps = inView ? {
    initial: 'hidden',
    whileInView: 'show',
    viewport: { 
      once: true, 
      margin: '0px 0px -30px 0px',
      fallback: false 
    }
  } : {};

  return (
    <Component 
      ref={ref}
      variants={selectedVariant} 
      className={className}
      {...triggerProps}
    >
      {children}
    </Component>
  )
});

Fade.displayName = 'Fade';

export default memo(Fade);