'use client';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { FOOTER_NAV, useNavClick } from '@/app/lib/navigation';
import { COPYRIGHT } from '@/app/lib/constants';
import Link from 'next/link';

export default function Footer() {
  const { handleNavClick } = useNavClick();

  return (
    <footer className='flex flex-col tablet:items-center border-t border-primary-muted/25
      gap-xl layout-px layout-py'>
      <div className='grid grid-cols-2 tablet:gap-12'>
        {FOOTER_NAV.map(footerSection => (
          <section key={footerSection.sectionLabel} className='flex flex-col gap-base'>
            <span className='text-xs text-background/55 uppercase'>
              {footerSection.sectionLabel}
            </span>
            <nav className='flex flex-col gap-sm w-fit'>
              {footerSection.sectionLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={footerSection.isExternal ? '_blank' : undefined}
                  rel={footerSection.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={footerSection.isExternal ? undefined : (e) => handleNavClick(e, link.label)}
                  className='group flex items-center gap-sm text-sm text-background/70
                    hover:text-accent-dark transition-colors duration-300 lowercase'
                >
                  {link.label}
                  {footerSection.isExternal &&
                    <RiArrowRightUpLine className='translate-y-xxs text-lg opacity-75
                      group-hover:opacity-90 transition-opacity duration-300'/>
                  }
                </Link>
              ))}
            </nav>
          </section>
        ))}
      </div>
      <span className='text-xs text-background/55 tablet:text-center'>
        {COPYRIGHT}
      </span>
    </footer>
  )
}
