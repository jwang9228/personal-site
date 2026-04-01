'use client';
import { useLightMode } from '@/app/lib/context';
import { DEV_NAME } from '@/app/lib/constants';
import { HEADER_NAV, WORK_LABEL, ABOUT_LABEL, HEADER_HEIGHT } from '@/app/lib/navigation';
import Link from 'next/link';

export default function HeaderNav() {
  const isLightMode = useLightMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault(); 

    if (label === WORK_LABEL) {
      scrollToTop()
    } 

    if (label === ABOUT_LABEL) {
      const el = document.getElementById(ABOUT_LABEL);
      if (!el) return;
      window.scrollTo({ top: el.offsetTop - HEADER_HEIGHT, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 flex py-4 
        border-b border-primary-muted/30
        ${isLightMode ? 'bg-primary' : 'backdrop-blur-sm'}
      `}
    >
      <nav className='flex justify-between w-full layout-px'>
        <button
          onClick={scrollToTop}
          className={`font-accent text-lg uppercase tracking-widest cursor-pointer
            ${isLightMode ? 'text-background' : 'text-primary'}`}
        >
          {DEV_NAME}
        </button>

        <section className='flex gap-lg'>
          {HEADER_NAV.map(tab => {
            const lightModeStyle = tab.label === ABOUT_LABEL 
              ? 'text-background/80 font-medium' 
              : 'text-background/50 hover:text-background/80';

            const darkModeStyle = tab.label === WORK_LABEL 
              ? 'text-primary font-medium' 
              : 'text-primary-muted hover:text-primary';

            return (
              <Link
                href={tab.href}
                key={tab.label}
                onClick={(e) => handleNavClick(e, tab.label)}
                className={`transition-colors duration-300 lowercase cursor-pointer
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