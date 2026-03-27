'use client';
import { usePathname } from 'next/navigation';
import { HEADER_NAV } from '@/app/lib/navigation';
import Fade from '../utils/Fade';
import Link from 'next/link';

export default function HeaderNav() {
  const pathname = usePathname();
  const currentSection = pathname === '/' ? HEADER_NAV[0].label : pathname.slice(1).split('/')[0];

  return (
    <Fade
      type='in' as='nav' inView
      className='flex justify-center w-full gap-xl'
    >
      {HEADER_NAV.map(tab => {
        const isActive = currentSection === tab.label;

        return (
          <Link 
            key={tab.label} 
            href={tab.href} 
            className={`group transition-colors duration-300 lowercase
              ${isActive ? 'text-primary' : 'text-primary-muted hover:text-primary'}`
            }
          >
            {tab.label}
            <span
              className={`block h-0.5 transition-all duration-300 ease-out
                ${isActive
                  ? 'max-w-full bg-primary/75'
                  : 'max-w-0 bg-primary-muted group-hover:max-w-full'
                }`}
            />
          </Link>
        )
    })}
    </Fade>
  )
}