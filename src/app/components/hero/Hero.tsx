import { MAIN_TITLE, SECONDARY_TITLE } from '@/app/lib/constants';
import { SOCIALS } from '@/app/lib/navigation';
import Fade from '../utils/Fade';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='flex flex-col layout-px layout-py tablet:pt-9 gap-y-7'>
      <Fade 
        as='section' speed='ui'
        className='flex flex-col text-2xl gap-1'
      >
        <h1 className='flex flex-col tablet:flex-row gap-1 tablet:gap-3'>
          <span className='flex items-baseline gap-2.5 tablet:gap-3'>
            {MAIN_TITLE}
            <span className='font-accent font-normal text-primary/85 text-xl'>&</span>
          </span>
          <span>{SECONDARY_TITLE}</span>
        </h1>
      </Fade>
      <Fade 
        as='section' speed='ui'
        className='flex items-center gap-x-6 tablet:gap-x-7'
      >
        {SOCIALS.map(social => {
          const Icon = social.icon

          return (
            <Link
              key={social.href}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon className='text-primary/80 hover:text-accent
                transition-colors duration-300 size-7' />
            </Link>
          )
        })}
      </Fade>
    </section>
  )
}