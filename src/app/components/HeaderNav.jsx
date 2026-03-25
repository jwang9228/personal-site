import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderNav() {
  const pathname = usePathname();

  const currentSection = pathname === '/' ? 'work' : pathname.slice(1).split('/')[0];

  const tabs = [
    {label: 'work', href: '/'},
    {label: 'about', href: '/experience'}
  ];

  return (
    <nav className='flex justify-center w-full gap-xl animate-fade-in'>
      {tabs.map(tab => {
        const isActive = currentSection === tab.label;

        return (
          <Link 
            key={tab.label} 
            href={tab.href} 
            className={`group transition-colors duration-300
              ${isActive ? 'text-primary' : 'text-primary-muted hover:text-primary'}`
            }
          >
            {tab.label}
            <span
              className={`block h-0.5 transition-all duration-300 ease-out
                ${isActive
                  ? 'max-w-full bg-primary/75'
                  : 'max-w-0 bg-primary-muted group-hover:max-w-full'
                }`}
            />
          </Link>
        )
    })}
    </nav>
  )
};