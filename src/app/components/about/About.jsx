'use client'

import { useState, useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiMail, CiLinkedin } from 'react-icons/ci';
import { PiGraduationCapLight, PiContactlessPayment } from 'react-icons/pi';
import Link from 'next/link';
import FadeContent from '../utils/FadeContent';
import Hobbies from './hobbies/Hobbies';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

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
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <main className='flex flex-col gap-y-8 laptop:gap-y-10'>
      <header className='flex flex-col gap-y-1 tablet:gap-y-2 laptop:gap-y-3'>
        <FadeContent>
          <h1 className='text-3xl tablet:text-4xl font-medium'>
            Justin Wang
          </h1>
        </FadeContent>
        <FadeContent delay={50}>
          <h2 className='text-lg tablet:text-xl laptop:text-2xl text-zinc-200'>
            Full Stack Developer
          </h2>
        </FadeContent>
        <FadeContent delay={100}>
          <h3 className='text-sm tablet:text-base laptop:text-lg text-zinc-200 font-light'>
            Resourceful and self-driven engineer focused on building practical solutions to real-world problems 
          </h3>
        </FadeContent>
        <FadeContent delay={100}>              
          <hr className='w-full h-px mt-4 border-0 bg-gradient-to-r 
            from-light/70 via-light/50 to-light/40' />
        </FadeContent>
      </header>
      <section className='flex flex-col laptop:flex-row gap-y-8 gap-x-24'>
        <section className='flex flex-col gap-y-8'>
          <ul className='flex flex-col gap-y-2 tablet:gap-y-3 laptop:gap-y-4.5 
            text-light tablet:text-lg laptop:text-xl text-nowrap'>
            <li>
              <FadeContent delay={150} duration={1500}
                className='flex items-center gap-x-4 tablet:gap-x-4.5 laptop:gap-x-5'>
                <PiContactlessPayment className='size-4 tablet:size-4.5 laptop:size-5 opacity-80' />
                <h4>Current: SWE @ UIC Payments</h4>
              </FadeContent>
            </li>
            <li>
              <FadeContent delay={200} duration={1500}
                className='flex items-center gap-x-4 tablet:gap-x-4.5 laptop:gap-x-5'>
                <CiLocationOn className='size-4 tablet:size-4.5 laptop:size-5' />
                <h4>Pleasanton, CA</h4>
              </FadeContent>
            </li>
            <li>
              <FadeContent delay={250} duration={1500} 
                className='flex items-start gap-x-4 tablet:gap-x-4.5 laptop:gap-x-5'>
                <PiGraduationCapLight className='size-4 tablet:size-4.5 laptop:size-5 mt-1' />
                <section className='flex flex-col'>
                  <h4>Northeastern University '23</h4>
                  <h4>B.S. in Computer Science</h4>
                </section>
              </FadeContent>
            </li>
          </ul>
          <FadeContent delay={400} duration={1500}>
            <h4 className='flex items-center gap-x-4.5 tablet:gap-x-5 laptop:gap-x-5.5
              my-1.5 tablet:my-2'>
              {socials.map((social, i) => (
                <Link key={i} href={social.href} target='_blank' rel='noopener noreferrer'>
                  {social.icon}
                </Link>
              ))}
            </h4>
          </FadeContent>
        </section>
        <FadeContent delay={isMobile ? 525 : 150} duration={isMobile ? 1500 : 2000} className='w-full'>
          <Hobbies />
        </FadeContent>
      </section>
    </main>
  )
}