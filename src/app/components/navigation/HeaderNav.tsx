'use client';
import { useLightMode } from '@/app/lib/context';
import { usePathname } from 'next/navigation';
import { DEV_NAME } from '@/app/lib/constants';
import { HEADER_NAV } from '@/app/lib/navigation';
import Link from 'next/link';

export default function HeaderNav() {
  const isLightMode = useLightMode();
  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 z-50 flex py-4 
        border-b border-primary-muted/30
        ${isLightMode ? 'bg-primary' : 'backdrop-blur-sm'}
      `}
    >
      <nav className='flex justify-between w-full layout-px'>
        <Link 
          href={'/'}
          className={`font-accent text-lg uppercase tracking-widest
            ${isLightMode ? 'text-background' : 'text-primary'}`}
        >
          {DEV_NAME}
        </Link>
        <section className='flex gap-lg'>
          {HEADER_NAV.map(tab => {
            const isActive = pathname === tab.href;
            const lightModeStyle = isActive ? 'text-background/80 font-medium' : 'text-background/50 hover:text-background/80';
            const darkModeStyle = isActive ? 'text-primary font-medium' : 'text-primary-muted hover:text-primary';

            return (
              <Link 
                key={tab.label} 
                href={tab.href} 
                className={`group hover:transition-colors hover:duration-300 lowercase
                  ${isLightMode ? lightModeStyle : darkModeStyle}`
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