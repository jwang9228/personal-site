'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function RootLayout({children}) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === '/' 
    ? 'about' 
    : pathname.slice(1).split('/')[0]
  );

  const tabs = [
    {label: 'about', href: '/'},
    {label: 'experience', href: '/'},
    {label: 'projects', href: '/projects/nexus'}
  ];

  const socials = [
    {label: 'email', href: 'mailto:jwang.srv1@gmail.com'},
    {label: 'linkedin', href: 'https://www.linkedin.com/in/justin-n-wang/'},
    {label: 'github', href: 'https://github.com/jwang9228/'}, 
    {label: 'resume', href: '/WangResume.pdf'}
  ];

  return (
    <div className='flex flex-col relative h-dvh'>
      <div className='flex justify-end fixed w-full top-0 z-10
        px-8 tablet:px-12 laptop:px-16 py-6 tablet:py-8 laptop:py-10
        gap-x-5 tablet:gap-x-7 laptop:gap-x-10 bg-black'>
        {tabs.map((tab, i) => (
          <Link 
            key={i} 
            href={tab.href} 
            onClick={() => setActiveTab(tab.label)}
            className={`group transition duration-200 text-lg tablet:text-xl laptop:text-2xl text-foreground/75
              ${activeTab === tab.label && 'text-foreground/100'}`
            }
          >
            {tab.label}
            <span 
              className={`block h-0.5 bg-foreground/80
                ${activeTab === tab.label 
                  ? 'max-w-full' 
                  : 'max-w-0 group-hover:max-w-full transition-all duration-300'
                }`
              } 
            />
          </Link>
        ))}
      </div>
      <div className='overflow-y-auto px-8 tablet:px-12 laptop:px-16 
        pt-24 tablet:pt-26 laptop:pt-30 pb-26 tablet:pb-30 laptop:pb-36'>
        {children}
      </div>
      <div className='flex flex-col items-center w-full fixed bottom-0
        px-8 tablet:px-12 laptop:px-16 py-6 tablet:py-8 laptop:py-10 z-50 bg-black'>
        <hr className='w-full h-px border-0 mb-4 tablet:mb-6 laptop:mb-8
          bg-gradient-to-r from-zinc-300/30 via-zinc-300/80 to-zinc-300/30' />
        <div className='flex w-full laptop:w-4/5 justify-between items-center'>
          {socials.map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/90 hover:text-foreground/100 text-lg tablet:text-xl laptop:text-2xl'
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}