import { PiArrowUpRight } from 'react-icons/pi';
import { FOOTER_NAV } from '@/app/lib/navigation';
import { COPYRIGHT, DESIGN_STATEMENT, DEV_NAME } from '@/app/lib/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex flex-col tablet:items-center 
      border-t laptop:border-t-0 border-primary-muted/25
      gap-7 px-6 laptop:px-0 layout-py laptop:py-8'>
      <div className='flex justify-between items-baseline gap-x-12'>
        <span className='text-xs text-background/60 font-semibold uppercase'>
          {FOOTER_NAV.label}
        </span>
        <nav className='flex gap-8'>
          {FOOTER_NAV.links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-2 text-sm text-background/75
                hover:text-accent-dark transition-colors duration-300 lowercase'
            >
              {link.label}
              <PiArrowUpRight 
                size={18}
                className='translate-y-0.5 opacity-75
                  group-hover:opacity-90 transition-opacity duration-300'/>
            </Link>
          ))}
        </nav>
      </div>
      <div className='flex flex-col gap-y-1.5 
        text-xs text-background/55 tablet:text-center'>
        {DESIGN_STATEMENT}
        <span>
          {COPYRIGHT} <span className='pl-0.5'>{DEV_NAME}</span>
        </span>
      </div>
    </footer>
  )
}