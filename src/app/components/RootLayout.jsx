'use client';

import Link from 'next/link';
import { useState } from 'react';
import FadeContent from './utils/FadeContent';

export default function RootLayout({children}) {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    {'label': 'about', 'href': '/'},
    {'label': 'experience', 'href': '/'},
    {'label': 'projects', 'href': '/projects/nexus'}
  ];

  const socials = [
    {'label': 'email', 'href': 'mailto:jwang.srv1@gmail.com'},
    {'label': 'linkedin', 'href': 'https://www.linkedin.com/in/justin-n-wang/'},
    {'label': 'github', 'href': 'https://github.com/jwang9228/'}, 
    {'label': 'resume', 'href': '/WangResume.pdf'}
  ];

  return (
    <div className='flex flex-col justify-between h-screen px-8 tablet:px-14 laptop:px-16 pt-6 pb-6 tablet:pb-8'>
      <div>
        <FadeContent duration={750}>
          <div className='flex flex-wrap justify-end items-center gap-x-5 tablet:gap-x-7'>
            {tabs.map((tab, i) => (
              <Link 
                key={i} 
                href={tab.href} 
                onClick={() => setActiveTab(tab.label)}
                className={`group transition duration-200 text-lg tablet:text-xl text-foreground/75
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
        </FadeContent>
        <div className='py-10'>
          {children}
        </div>
      </div>
      <FadeContent duration={750}>
        <div className='flex w-fit flex-col gap-y-4'>
          <hr className='text-zinc-300/70' />
          <div className='flex items-center gap-x-6 tablet:gap-x-8'>
            {socials.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/90 laptop:text-foreground/80 hover:text-foreground/100 text-lg'
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </FadeContent>
    </div>
  )
}