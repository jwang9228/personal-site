'use client';
import { motion, Variants } from 'motion/react';
import { ReactNode, ElementType, memo } from 'react';

/**
 * Animation trigger model
 * -----------------------
 * `trigger` controls how the `hidden` -> `show` transition is started:
 *
 *  - 'inView' (default): sets its own `initial`/`whileInView`. Fades in once
 *    scrolled into view. Safe to drop anywhere — always animates on its own.
 *  - 'mount': sets its own `initial`/`animate`. Fades in immediately on mount.
 *  - 'inherit': sets ONLY `variants` (no local initial/animate/whileInView).
 *    This intentionally does nothing by itself — it relies on an ANCESTOR
 *    motion component elsewhere in the tree (e.g. `RootPage`'s page-load
 *    stagger, or `About`'s scroll-triggered stagger) to set `initial`/
 *    `animate`/`whileInView` and propagate the 'show' state down through
 *    Framer Motion's variant propagation. Only use this when a call site is
 *    deliberately participating in a parent-orchestrated stagger; the parent
 *    is responsible for actually triggering the animation.
 */

// Configurations
const FADE_UP_UI_PX_TRANSLATION = 10;
const FADE_UP_SECTION_PX_TRANSLATION = 25;

// Timing — mirrors --duration-ui/--duration-section and --ease-ui/--ease-section
// in globals.css (Framer Motion uses seconds + cubic-bezier tuples).
const UI_DURATION = 0.3;
const UI_EASE = [0.2, 0.65, 0.3, 0.9] as const;

const SECTION_DURATION = 0.6;
const SECTION_EASE = [0.25, 0.4, 0.25, 1] as const;

// `show` is defined as a function so an optional per-instance `delay` can be
// passed in via the `custom` prop without mutating these shared variants.
const FADE_UP_UI_VARIANTS: Variants = {
  hidden: { opacity: 0, y: FADE_UP_UI_PX_TRANSLATION },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: UI_DURATION, ease: UI_EASE, delay }
  })
};

const FADE_UP_SECTION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: FADE_UP_SECTION_PX_TRANSLATION },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: SECTION_DURATION, ease: SECTION_EASE, delay }
  })
};

const FADE_IN_UI_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: UI_DURATION, ease: UI_EASE, delay }
  })
};

const FADE_IN_SECTION_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: SECTION_DURATION, ease: SECTION_EASE, delay }
  })
};

type ValidTag = 'div' | 'section' | 'main' | 'span' | 'header' | 'footer' | 'nav';
type FadeTrigger = 'inView' | 'mount' | 'inherit';

interface FadeProps {
  children: ReactNode;
  speed?: 'ui' | 'section';
  type?: 'up' | 'in';
  as?: ValidTag;
  trigger?: FadeTrigger;
  delay?: number;
  className?: string;
}

function Fade({
  children,
  type = 'up',
  speed = 'section',
  as = 'div' as ValidTag,
  trigger = 'inView',
  delay = 0,
  className = '',
}: FadeProps) {
  const Component = motion[as] as ElementType;

  let selectedVariant = FADE_UP_SECTION_VARIANTS;
  if (type === 'in') {
    selectedVariant = speed === 'ui' ? FADE_IN_UI_VARIANTS : FADE_IN_SECTION_VARIANTS;
  } else if (speed === 'ui') {
    selectedVariant = FADE_UP_UI_VARIANTS;
  }

  let triggerProps = {};
  if (trigger === 'mount') {
    triggerProps = { initial: 'hidden', animate: 'show' };
  } else if (trigger === 'inView') {
    triggerProps = {
      initial: 'hidden',
      whileInView: 'show',
      viewport: {
        once: true,
        margin: '0px 0px -30px 0px',
        fallback: false
      }
    };
  }
  // 'inherit' - no local trigger props; relies on an ancestor motion component.

  return (
    <Component
      variants={selectedVariant}
      custom={delay}
      className={className}
      {...triggerProps}
    >
      {children}
    </Component>
  )
}

export default memo(Fade);
