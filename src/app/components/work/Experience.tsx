import { EXPERIENCES, ExperienceSection, Position } from '@/app/lib/constants';
import { PiArrowUpRight } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';
import SkillsList from './SkillsList';
import Fade from '../utils/Fade';

export default function Experience() {
  return (
    <section className='flex flex-col gap-y-6 layout-px layout-py pb-16'>
      <Fade speed='ui' className='flex flex-col gap-y-3'>
        <p className='text-xs text-primary/85 uppercase'>
          Experience
        </p>
        <div className='h-px laptop:h-[2px] w-full 
          bg-linear-to-r from-primary/30 via-primary/25 to-primary/15 tablet:to-primary/5' />
      </Fade>

      <div className='flex flex-col gap-y-16'>
        {EXPERIENCES.map((experience, i) => (
          <Fade
            key={experience.company} 
            inView={i > 0}
            className='flex flex-col gap-8 w-full'
          >
            <ExperienceHeader experience={experience} />
            
            <ul className='flex flex-col gap-y-lg'>
              {experience.positions.map(position => (
                <PositionSection key={position.duration} position={position} />
              ))}
            </ul>
          </Fade>
        ))}
      </div>
    </section>
  )
}

function ExperienceHeader({ experience } : { experience: ExperienceSection} ) {
  return (
    <Fade key={experience.company} className='flex'>
      <Link
        href={experience.link}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center gap-5'
      >
        <div className='flex items-center justify-center shrink-0 size-13
          bg-white rounded-xl overflow-hidden'
        >
          <Image
            src={`/experience/${experience.logo}`} 
            alt={`${experience.company}`}
            width={48}
            height={48}
            className='object-contain size-13 p-1.5' />
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <h2 className='flex items-center gap-x-1.5 text-lg 
            transition-colors group-hover:text-accent'
          >
            {experience.company}
            <PiArrowUpRight className='translate-y-xxs 
              text-primary/70 group-hover:text-accent' />
          </h2>
          <p className='text-xs text-primary/80'>
            {experience.location}
          </p>
        </div>
      </Link>
    </Fade>
  )
}

function PositionSection({ position } : { position: Position }) {
  return (
    <Fade as='section' className='relative flex flex-col gap-y-base pl-lg'>
      <div className='absolute left-1.5 top-3 bottom-0 flex flex-col items-center w-1.5'>
        <div className='size-1.5 rounded-full bg-primary/60 shrink-0' />
        <div className='w-px h-full 
          bg-linear-to-b from-primary-muted/50 via primary-muted/50 to-primary-muted/25' />
      </div>
      <hgroup className='flex flex-col tablet:flex-row items-baseline 
        gap-x-4 gap-y-xs font-mono'
      >
        <h3 className='font-medium tracking-wider'>{position.title}</h3>
        <span className='flex gap-x-1.5 text-xs text-primary/80'>
          <span className='hidden tablet:block'>//</span>
          <span>{position.duration}</span>
        </span>
      </hgroup>
      <p className='text-sm text-primary/85 leading-relaxed max-w-3xl'>
        {position.description}
      </p>
      <SkillsList skills={position.skills} />
      {position.showcase} 
    </Fade>
  )
}