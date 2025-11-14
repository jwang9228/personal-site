'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FadeContent from './utils/FadeContent';

export default function RootLayout({children}) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === '/' 
    ? 'about' 
    : pathname.slice(1).split('/')[0]
  );

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const tabs = [
    {label: 'about', href: '/'},
    {label: 'experience', href: '/experience'},
    {label: 'projects', href: '/projects'}
  ];

  const socials = [
    {label: 'email', href: 'mailto:jwang.srv1@gmail.com'},
    {label: 'linkedin', href: 'https://www.linkedin.com/in/justin-n-wang/'},
    {label: 'github', href: 'https://github.com/jwang9228/'}, 
    {label: 'resume', href: '/experience/WangResume.pdf'}
  ];

  useEffect(() => {
    setMounted(true);

    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex flex-col relative h-dvh'>
      <FadeContent duration={400} 
        className='flex justify-end w-full fixed top-0 z-10
          px-8 tablet:px-12 laptop:px-16 py-6 tablet:py-8 laptop:py-10
          gap-x-5 tablet:gap-x-7 laptop:gap-x-10 bg-dark
          animate-drop-down [animation-delay:0s] [animation-duration:0.7s]'
      >
        {tabs.map((tab, i) => (
          <Link key={i} href={tab.href} onClick={() => setActiveTab(tab.label)}
            className={`group transition duration-200 text-lg tablet:text-xl laptop:text-2xl text-light/75
              ${activeTab === tab.label && 'text-light/100'}`}
          >
            {tab.label}
            <span
              className={`block h-0.5 bg-light/80 transition-all duration-300
                ${activeTab === tab.label
                  ? 'max-w-full'
                  : 'max-w-0 group-hover:max-w-full'
                }`}
            />
          </Link>
        ))}
      </FadeContent>
      <main className='overflow-y-auto px-8 tablet:px-12 laptop:px-16 
        pt-24 tablet:pt-26 laptop:pt-30 pb-26 tablet:pb-30 laptop:pb-36'>
        {children}
      </main>
      <FadeContent duration={400} 
        className='flex flex-col items-center w-full fixed bottom-0
        px-8 tablet:px-12 laptop:px-16 py-6 tablet:py-8 laptop:py-10 z-50 bg-dark
        animate-drop-down [animation-delay:0s] [animation-duration:0.7s]'
      >
        <hr className='w-full h-px border-0 mb-4 tablet:mb-6 laptop:mb-8
          bg-gradient-to-r from-light/30 via-light/80 to-light/30' />
        <ul className='flex w-full laptop:w-4/5 justify-between items-center'>
          {socials.map((social, i) => (
            <li key={i}>
              <Link href={social.href} target='_blank' rel='noopener noreferrer'
                className='text-light/90 hover:text-light/100 
                  text-lg tablet:text-xl laptop:text-2xl'
              >
                {social.label}
              </Link>
            </li>
          ))}
        </ul>
      </FadeContent>
    </div>
  )
}