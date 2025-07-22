import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiMail, CiLinkedin } from 'react-icons/ci';
import { PiPlant, PiGraduationCapLight } from 'react-icons/pi';
import DecryptedText from '../utils/DecryptedText';
import FadeContent from '../utils/FadeContent';
import Hobbies from './hobbies/Hobbies';

export default function About() {

  // renders the 'about' section socials icons + hyperlinks
  const socials = [
    {
      'icon': <CiMail className='size-6.5 tablet:size-7.5 scale-y-125' />,  
      'href': 'mailto:jwang.srv1@gmail.com'
    },
    {
      'icon': <CiLinkedin className='size-7.5 tablet:size-8.5' />, 
      'href': 'https://www.linkedin.com/in/justin-n-wang/'
    },
    {
      'icon': <AiOutlineGithub className='size-6.5 tablet:size-7.5' />, 
      'href': 'https://github.com/jwang9228/'
    }
  ];

  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col gap-y-1 tablet:gap-y-2'>
        <FadeContent>
          <DecryptedText 
            text='Justin Wang' 
            parentClassName='text-3xl tablet:text-4xl font-medium'
            speed={65}
            maxIterations={15}
            sequential
            useOriginalCharsOnly
            animateOn='view' />
        </FadeContent>
        <FadeContent delay={50}>
          <DecryptedText 
            text='Full Stack Developer' 
            parentClassName='text-lg tablet:text-xl text-zinc-200'
            speed={30}
            maxIterations={15}
            sequential
            useOriginalCharsOnly
            animateOn='view' />
        </FadeContent>
        <FadeContent delay={100}>              
          <hr className='w-full tablet:w-2/3 h-px mt-4.5
            border-0 bg-gradient-to-r 
            from-zinc-300/70 via-zinc-300/50 to-zinc-300/40' />
        </FadeContent>
      </div>
      <div className='flex flex-col gap-y-2 tablet:gap-y-3 text-zinc-300 tablet:text-lg'>
        <FadeContent delay={150} duration={2000}>
          <div className='flex items-center gap-x-4'>
            <PiPlant className='size-4 tablet:size-4.5 opacity-80' />
            Current: SDE @ Agrofocal
          </div>
        </FadeContent>
        <FadeContent delay={200} duration={2000}>
          <div className='flex items-center gap-x-4'>
            <CiLocationOn className='size-4 tablet:size-4.5' />
            Pleasanton, CA
          </div>
        </FadeContent>
        <FadeContent delay={250} duration={2000}>
          <div className='flex items-start gap-x-4'>
            <PiGraduationCapLight className='size-4 tablet:size-4.5 mt-1' />
            <div className='flex flex-col'>
              <div>Northeastern University '23</div>
              <div>B.S. in Computer Science</div>
            </div>
          </div>
        </FadeContent>
      </div>
      <FadeContent delay={400} duration={2000}>
        <div className='flex items-center gap-x-4.5 my-1.5 tablet:my-2'>
          {socials.map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'>
              {social.icon}
            </Link>
          ))}
        </div>
      </FadeContent>
      <FadeContent delay={550} duration={2000}>
        <Hobbies />
      </FadeContent>
    </div>
  )
}