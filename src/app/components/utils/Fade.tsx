'use client';
import { motion, Variants } from 'motion/react';
import { ReactNode, ElementType, memo, forwardRef, useState, useEffect } from 'react';

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

  // State to track browser finishing loading fonts - prevents early rendering
  const [layoutReady, setLayoutReady] = useState(false);

  useEffect(() => {
    // If this component isn't a scroll-trigger, ignore the layout check
    if (!inView) return;

    if ('fonts' in document) {
      document.fonts.ready.then(() => setLayoutReady(true));
    } else {
      // Fallback for old browsers
      setLayoutReady(true);
    }
  }, [inView]);

  let selectedVariant = FADE_UP_SECTION_VARIANTS;
  if (type === 'in') {
    selectedVariant = FADE_IN_VARIANTS;
  } else if (speed === 'ui') {
    selectedVariant = FADE_UP_UI_VARIANTS;
  }

  // inView true - scroll-trigger settings
  const triggerProps = inView ? {
    initial: 'hidden',
    // Only attach observer trigger when layout is ready
    ...(layoutReady ? {
      whileInView: 'show',
      viewport: { 
        once: true, 
        amount: 0.2, 
        margin: '0px 0px -50px 0px',
        fallback: false 
      }
    } : {})
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