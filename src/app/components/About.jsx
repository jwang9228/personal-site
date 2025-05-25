import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiMail, CiLinkedin } from 'react-icons/ci';
import { PiPlant, PiGraduationCapLight } from 'react-icons/pi';
import Threads from './utils/Threads';
import DecryptedText from './utils/DecryptedText';
import FadeContent from './utils/FadeContent';

export default function Home() {

  const socials = [
    {'icon': <CiMail className='size-6.5 scale-y-125' />,  'href': 'mailto:jwang.srv1@gmail.com'},
    {'icon': <CiLinkedin className='size-7.5' />, 'href': 'https://www.linkedin.com/in/justin-n-wang/'},
    {'icon': <AiOutlineGithub className='size-6.5' />, 'href': 'https://github.com/jwang9228/'}
  ];

  return (
    <div className='flex flex-col gap-y-10'>
      <div className='absolute -z-10 mt-5 opacity-50'>
        <FadeContent delay={100} duration={2500}>
          <Threads
            amplitude={0.4}
            distance={0}
            enableMouseInteraction={false}
          />
        </FadeContent>
      </div>
      <div className='flex flex-col gap-y-1'>
        <FadeContent>
          <DecryptedText 
            text='Justin Wang' 
            parentClassName='text-3xl tablet:text-4xl font-medium'
            speed={65}
            maxIterations={15}
            sequential
            useOriginalCharsOnly
            animateOn='view'
          />
        </FadeContent>
        <FadeContent delay={50}>
          <DecryptedText 
            text='Full Stack Developer' 
            parentClassName='text-lg text-zinc-300'
            speed={30}
            maxIterations={15}
            sequential
            useOriginalCharsOnly
            animateOn='view'
          />
        </FadeContent>
      </div>
      <div className='flex flex-col gap-y-2 mt-4 text-zinc-300'>
        <FadeContent delay={150} duration={2000}>
          <div className='flex items-center gap-x-3'>
            <PiPlant className='size-4' />
            Current: SDE @ Agrofocal
          </div>
        </FadeContent>
        <FadeContent delay={200} duration={2000}>
          <div className='flex items-center gap-x-3'>
            <CiLocationOn className='size-4' />
            Pleasanton, CA
          </div>
        </FadeContent>
        <FadeContent delay={250} duration={2000}>
          <div className='flex items-start gap-x-3'>
            <PiGraduationCapLight className='size-4 mt-1' />
            <div className='flex flex-col'>
              <div>Northeastern University '23</div>
              <div>B.S. in Computer Science</div>
            </div>
          </div>
        </FadeContent>
      </div>
      <FadeContent delay={400} duration={2000}>
        <div className='flex items-center gap-x-4.5'>
          {socials.map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </FadeContent>
    </div>
  )
}