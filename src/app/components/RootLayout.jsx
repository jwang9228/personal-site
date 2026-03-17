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
    <div className='layout-root'>
      {/*
      <FadeContent duration={400} 
        className='flex justify-center w-full gap-x-5 tablet:gap-x-7 laptop:gap-x-10
          animate-drop-down [animation-delay:0s] [animation-duration:0.7s]'
      >
      */}
      <header className='flex justify-center w-full gap-base'>
        {tabs.map(tab => (
          <Link 
            key={tab.label} 
            href={tab.href} 
            onClick={() => setActiveTab(tab.label)}
            className={`group transition duration-200
              ${activeTab === tab.label ? 'text-primary' : 'text-primary-muted'}`
            }
          >
            {tab.label}
            <span
              className={`block h-0.5 bg-primary-muted transition-all duration-300
                ${activeTab === tab.label
                  ? 'max-w-full'
                  : 'max-w-0 group-hover:max-w-full'
                }`}
            />
          </Link>
        ))}
      </header>
      <main className='layout-children'>
        {children}
      </main>
    </div>
  )
}