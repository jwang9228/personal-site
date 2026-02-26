'use client'

import { useState, useEffect } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiMail, CiLinkedin } from 'react-icons/ci';
import Link from 'next/link';
import FadeContent from '../utils/FadeContent';
import Hobbies from './hobbies/Hobbies';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // renders the 'about' section socials icons + hyperlinks
  const socials = [
    {
      icon: <CiMail className='size-6.5 tablet:size-7.5 laptop:size-8.5 scale-y-125' />,  
      href: 'mailto:jwang.srv1@gmail.com'
    },
    {
      icon: <CiLinkedin className='size-7.5 tablet:size-8.5 laptop:size-9.5' />, 
      href: 'https://www.linkedin.com/in/justin-n-wang/'
    },
    {
      icon: <AiOutlineGithub className='size-6.5 tablet:size-7.5 laptop:size-8.5' />, 
      href: 'https://github.com/jwang9228/'
    }
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
    <main className='flex flex-col gap-y-6 laptop:gap-y-10'>
      <header className='flex flex-col gap-y-0.5 tablet:gap-y-1.5 laptop:gap-y-2.5'>
        <FadeContent delay={500} duration={100}>
          <h1 className='inline-block overflow-hidden 
            text-3xl tablet:text-4xl font-medium'
          >
            <span className='block pb-0.5 tablet:pb-1 desktop:pb-1.5
              animate-wipe [clip-path:inset(0_100%_0_0)]
              [animation-delay:0.5s] [animation-duration:0.3s]'>
              Justin Wang
            </span>
          </h1>
        </FadeContent>
        <FadeContent delay={550} duration={100}>
          <h2 className='inline-block overflow-hidden 
            text-lg tablet:text-xl laptop:text-2xl text-zinc-200'
          >
            <span className='block pb-0.5 tablet:pb-1 desktop:pb-1.5
              animate-wipe [clip-path:inset(0_100%_0_0)]
              [animation-delay:0.8s] [animation-duration:0.3s]'>
              Full Stack Developer & Software Engineer at UIC Payments
            </span>
          </h2>
        </FadeContent>
      </header>
      <section className='flex flex-col laptop:flex-row laptop:justify-between gap-y-8'>
        <FadeContent 
          delay={1900} duration={500} 
          className='flex flex-col laptop:w-1/2 desktop:w-1/4 gap-y-8'
        >
          <h4 className='flex items-center gap-x-4.5 tablet:gap-x-5 laptop:gap-x-5.5
            my-1.5 tablet:my-2'>
            {socials.map((social, i) => (
              <Link key={i} href={social.href} target='_blank' rel='noopener noreferrer'>
                {social.icon}
              </Link>
            ))}
          </h4>
        </FadeContent>
        <FadeContent 
          delay={isMobile ? 2150 : 1925} duration={isMobile ? 700 : 525} 
          className='w-full laptop:w-1/2 desktop:w-3/4'>
          <Hobbies />
        </FadeContent>
      </section>
    </main>
  )
}