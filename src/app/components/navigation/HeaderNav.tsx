'use client';
import { usePathname } from 'next/navigation';
import { HEADER_NAV } from '@/app/lib/navigation';
import { motion } from 'motion/react';
import Fade from '../utils/Fade';
import Link from 'next/link';

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <Fade
      type='in' as='nav' inView
      className='flex justify-center w-full gap-xl'
    >
      {HEADER_NAV.map(tab => {
        const isActive = pathname === tab.href;

        return (
          <Link 
            key={tab.label} 
            href={tab.href} 
            className={`group transition-colors duration-300 lowercase
              ${isActive ? 'text-primary' : 'text-primary-muted hover:text-primary'}`
            }
          >
            {tab.label}
            {isActive && (
              <motion.span
                layoutId='header-nav-underline'
                className='block h-0.5 bg-primary/75'
              />
            )}
          </Link>
        )
    })}
    </Fade>
  )
}