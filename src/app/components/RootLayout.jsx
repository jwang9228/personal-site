'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import FadeContent from './utils/FadeContent';

export default function RootLayout({children}) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === '/' 
    ? 'about' 
    : pathname.slice(1).split('/')[0]
  );
  const [mounted, setMounted] = useState(false);

  const tabs = [
    {label: 'about', href: '/'},
    {label: 'experience', href: '/experience'},
    {label: 'projects', href: '/projects'}
  ];

  useEffect(() => {
    const newTab = pathname === "/" 
      ? "about" 
      : pathname.slice(1).split("/")[0];
    setActiveTab(newTab);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex flex-col h-dvh overflow-y-auto 
      px-10 tablet:px-12 laptop:px-16 desktop:px-24 
      py-6 tablet:py-8 laptop:py-10 desktop:py-12'
    >
      <FadeContent className='fixed inset-0 -z-10'>
        <Image
          src='/Polarity.png'
          alt='Background'
          fill
          unoptimized
          priority
          quality={100}
          className='object-cover'
        />
      </FadeContent>
      <FadeContent duration={400} 
        className='flex justify-center w-full gap-x-5 tablet:gap-x-7 laptop:gap-x-10
          animate-drop-down [animation-delay:0s] [animation-duration:0.7s]'
      >
        {tabs.map((tab, i) => (
          <Link 
            key={i} 
            href={tab.href} 
            onClick={() => setActiveTab(tab.label)}
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
      <main className='py-14 tablet:py-16 laptop:py-20'>
        {children}
      </main>
    </div>
  )
}