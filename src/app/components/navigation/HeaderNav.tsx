'use client';
import { useLightMode } from '@/app/lib/context';
import { usePathname } from 'next/navigation';
import { DEV_NAME } from '@/app/lib/constants';
import { HEADER_NAV } from '@/app/lib/navigation';
import Link from 'next/link';

export default function HeaderNav() {
  const isLightMode = useLightMode();
  console.log('isLightMode:', isLightMode);
  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 z-50 flex py-4 
        border-b border-primary-muted/30 backdrop-blur-sm
      `}
    >
      <nav className='flex justify-between w-full layout-px'>
        <Link 
          href={'/'}
          className='font-accent text-primary text-lg uppercase tracking-widest'
        >
          {DEV_NAME}
        </Link>
        <section className='flex gap-lg'>
          {HEADER_NAV.map(tab => {
            const isActive = pathname === tab.href;

            return (
              <Link 
                key={tab.label} 
                href={tab.href} 
                className={`group transition-colors duration-300 lowercase
                  ${isActive ? 'text-primary font-medium' : 'text-primary-muted hover:text-primary'}`
                }
              >
                {tab.label}
              </Link>
            )
          })}
        </section>
      </nav>
    </header>
  )
}