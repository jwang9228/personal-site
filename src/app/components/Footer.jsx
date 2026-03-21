import Link from 'next/link';
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Footer() {
  const footerSections = [
    {
      sectionLabel: 'REVISIT',
      sectionLinks: [
        {label: 'about', href: '/'},
        {label: 'work', href: '/'}
      ],
      isExternal: false
    },
    {
      sectionLabel: 'ELSEWHERE',
      sectionLinks: [
        {label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-n-wang/'},
        {label: 'Resume', href: '/experience/WangResume.pdf'}
      ],
      isExternal: true
    }
  ];

  return (
    <footer className='flex flex-col gap-lg'>
      <section className='flex'>
        {footerSections.map(footerSection => (
          <section key={footerSection.sectionLabel} className='flex flex-col gap-base w-1/2'>
            <span className='text-xs text-primary-muted'>{footerSection.sectionLabel}</span>
            <nav className='flex flex-col gap-sm w-fit'>
              {footerSection.sectionLinks.map(link => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  target={footerSection.isExternal ? '_blank' : undefined} 
                  rel={footerSection.isExternal ? 'noopener noreferrer' : undefined}
                  className='group flex justify-between items-center w-full gap-sm'
                >
                  <p className='text-primary group-hover:text-accent transition-colors duration-300'>
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
      <span className='text-xs text-primary-muted'>
        &copy; 2026 Justin Wang
      </span>
    </footer>
  )
};