import { EXPERIENCES, ExperienceSection, Position } from '@/app/lib/constants';
import { PiArrowUpRight } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';
import SkillsList from './SkillsList';
import Fade from '../utils/Fade';

export default function Experience() {
  return (
    <section className='flex flex-col gap-y-6 layout-px layout-py pb-14'>
      <Fade speed='ui'>
        <p className='text-xs text-primary/95 uppercase font-bold'>
          Experience
        </p>
      </Fade>

      <div className='flex flex-col gap-y-14'>
        {EXPERIENCES.map((experience, i) => (
          <Fade
            key={experience.company} 
            inView={i > 0}
            className='flex flex-col gap-7 w-full'
          >
            <ExperienceHeader experience={experience} />
            
            <ul className='flex flex-col gap-y-10'>
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
    <Link
      href={experience.link}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center gap-5 w-fit'
    >
      <div className='flex items-center justify-center shrink-0 size-11
        bg-white rounded-xl'
      >
        <Image
          src={`/experience/${experience.logo}`} 
          alt={`${experience.company}`}
          width={48}
          height={48}
          className='object-contain size-11 p-1.5' />
      </div>
      <div className='flex flex-col gap-y-1.5'>
        <h2 className='flex items-center gap-x-1.5 text-lg 
          group-hover:text-accent transition-colors '>
          {experience.company}
          <PiArrowUpRight className='translate-y-0.5 text-primary/70 
          group-hover:text-accent transition-colors' />
        </h2>
        <p className='text-xs text-primary/80'>
          {experience.location}
        </p>
      </div>
    </Link>
  )
}

function PositionSection({ position } : { position: Position }) {
  return (
    <section className='relative flex flex-col gap-y-5 pl-8'>
      <div className='absolute left-1.5 top-2 bottom-0 flex flex-col items-center w-1.5'>
        <div className='size-1.5 rounded-full bg-primary/55 shrink-0' />
        <div className='w-px h-full 
          bg-linear-to-b from-primary-muted/50 via primary-muted/50 to-primary-muted/30' />
      </div>
      <hgroup className='flex flex-col gap-y-1 font-mono'>
        <span className='text-xs text-primary/80 font-normal'>{position.duration}</span>
        <h3 className='font-medium tracking-wide'>{position.title}</h3>
      </hgroup>
      <p className='text-sm text-primary/85 leading-relaxed max-w-2xl'>
        {position.description}
      </p>
      <SkillsList skills={position.skills} />
      {position.showcase} 
    </section>
  )
}