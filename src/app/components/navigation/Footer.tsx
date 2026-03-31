import { RiArrowRightUpLine } from 'react-icons/ri';
import { FOOTER_NAV } from '@/app/lib/navigation';
import { COPYRIGHT } from '@/app/lib/constants';
import Fade from '../utils/Fade';
import Link from 'next/link';

export default function Footer() {
  return (
    <Fade
      type='in' as='footer' inView
      className='flex flex-col gap-lg mb-6'
    >
      <section className='flex'>
        {FOOTER_NAV.map(footerSection => (
          <section key={footerSection.sectionLabel} className='flex flex-col gap-base w-1/2'>
            <span className='text-xs text-primary-muted uppercase'>{footerSection.sectionLabel}</span>
            <nav className='flex flex-col gap-sm w-fit'>
              {footerSection.sectionLinks.map(link => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  target={footerSection.isExternal ? '_blank' : undefined} 
                  rel={footerSection.isExternal ? 'noopener noreferrer' : undefined}
                  className='group flex justify-between items-center w-full gap-sm'
                >
                  <p className='text-primary group-hover:text-accent font-medium transition-colors duration-300 lowercase'>
                    {link.label}
                  </p>
                  {footerSection.isExternal && 
                    <RiArrowRightUpLine className='translate-y-xxs text-lg 
                      text-primary/85 group-hover:text-accent/85 transition-colors duration-300'/>
                  }
                </Link>
              ))}
            </nav>
          </section>
        ))}
      </section>
      <span className='text-xs text-primary-muted uppercase'>
        {COPYRIGHT}
      </span>
    </Fade>
  )
}