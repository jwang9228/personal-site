import { ANIM } from '@/app/lib/animations';
import { motion } from 'motion/react';

export default function Fade({
  children,
  className = '',
  type = 'up',
  as = 'section',
  inView = false,
  ...props
}) {
  const Component = motion[as];
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
      {...props}
    >
      {children}
    </Component>
  )
}