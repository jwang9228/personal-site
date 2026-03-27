'use client';
import { ANIM } from '@/app/lib/animations';
import { motion } from 'motion/react';
import { ReactNode, ElementType, memo } from 'react';

type ValidTag = 'div' | 'section' | 'main' | 'span' | 'header' | 'footer' | 'nav';

interface FadeProps {
  children: ReactNode;
  type: 'up' | 'in';
  as: ValidTag;
  inView?: boolean;
  className?: string;
}

function Fade({
  children,
  type,
  as,
  inView = false,
  className = '',
}: FadeProps) {
  const Component = motion[as] as ElementType;

  const selectedVariant = type === 'up' ? ANIM.fadeUpVariants : ANIM.fadeInVariants;

  // If inView true, apply scroll-trigger props - only apply animation when component
  // is in the viewport, only render once and when at least 20% of the component is on screen
  const triggerProps = inView ? {
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount: 0.2 }
  } : {};

  return (
    <Component 
      variants={selectedVariant} 
      className={className}
      {...triggerProps}
    >
      {children}
    </Component>
  )
}

export default memo(Fade);