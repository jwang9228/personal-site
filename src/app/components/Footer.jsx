import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Footer() {
  const footerSections = [
    // TODO: 'REVISIT' section
    {
      sectionLabel: 'ELSEWHERE',
      sectionLinks: [
        {label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-n-wang/'},
        {label: 'Resume', href: '/experience/WangResume.pdf'}
      ]
    }
  ];

  return (
    <footer className='flex flex-col gap-lg'>
      <section className='flex gap-lg'>
        {footerSections.map(footerSection => (
          <section key={footerSection.sectionLabel} className='flex flex-col gap-base'>
            <span className='text-xs text-primary-muted'>{footerSection.sectionLabel}</span>
            <nav className='flex flex-col gap-base w-24'>
              {footerSection.sectionLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  target='_blank' rel='noopener noreferrer'
                  className='flex justify-between items-center w-full'
                >
                  {link.label}
                  <RiArrowRightUpLine className='translate-y-xxs text-lg text-primary/85'/>
                </Link>
              ))}
            </nav>
          </section>
        ))}
      </section>
      <span className='text-sm text-primary-muted mt-sm'>
        &copy; 2026 Justin Wang
      </span>
    </footer>
  )
};