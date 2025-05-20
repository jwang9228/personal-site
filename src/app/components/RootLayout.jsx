'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({children}) {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    {'label': 'about', 'href': '/'},
    {'label': 'projects', 'href': '/projects/nexus'},
    {'label': 'resume', 'href': '/WangResume.pdf', 'newTab': true}
  ];

  return (
    <div className='flex flex-col px-8 py-6'>
      <div className='flex justify-end items-center gap-x-4'>
        {tabs.map((tab, i) => (
          <Link 
            key={i} 
            href={tab.href} 
            target={tab.newTab ? '_blank' : '_self'} 
            onClick={() => tab.label !== 'resume' && setActiveTab(tab.label)}
            className={`text-lg ${activeTab === tab.label && 'underline underline-offset-2'}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  )
}