import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === '/' 
    ? 'about' 
    : pathname.slice(1).split('/')[0]
  );

  const tabs = [
    {label: 'about', href: '/'},
    {label: 'work', href: '/'},
    {label: 'experience', href: '/experience'},
    {label: 'projects', href: '/projects'}
  ];

  useEffect(() => {
    const newTab = pathname === "/" 
      ? "about" 
      : pathname.slice(1).split("/")[0];
    setActiveTab(newTab);
  }, [pathname]);

  return (
    <nav className='flex justify-center w-full gap-lg'>
      {tabs.map(tab => (
        <Link 
          key={tab.label} 
          href={tab.href} 
          onClick={() => setActiveTab(tab.label)}
          className={`group transition-colors duration-300
            ${activeTab === tab.label ? 'text-primary' : 'text-primary-muted hover:text-primary'}`
          }
        >
          {tab.label}
          <span
            className={`block h-0.5 transition-all duration-300 ease-out
              ${activeTab === tab.label
                ? 'max-w-full bg-primary/80'
                : 'max-w-0 bg-primary-muted group-hover:max-w-full'
              }`}
          />
        </Link>
      ))}
    </nav>
  )
};