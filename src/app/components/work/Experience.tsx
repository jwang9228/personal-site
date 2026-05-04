import { EXPERIENCES, ExperienceSection, Position } from '@/app/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';
import PillList from '../utils/PillList';

export default function Experience() {
  return (
    <ul className='flex flex-col gap-y-xl'>
      {EXPERIENCES.map(experience => (
        <div 
          key={experience.company} 
          className='flex flex-col gap-base w-full'
        >
          <ExperienceHeader experience={experience} />
          <ul className='flex flex-col'>
            {experience.positions.map(position => (
              <PositionSection key={position.duration} position={position} />
            ))}
          </ul>
        </div>
      ))}
    </ul>
  )
}

function ExperienceHeader({ experience } : { experience: ExperienceSection} ) {
  return (
    <li key={experience.company} className='flex'>
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
            className='object-contain size-full p-1.5' />
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <h3 className='flex items-center gap-x-1.5 text-lg 
            transition-colors group-hover:text-accent'
          >
            {experience.company}
            <PiArrowUpRight className='translate-y-xxs 
              text-primary/70 group-hover:text-accent' />
          </h3>
          <p className='text-xs text-primary/80'>
            {experience.location}
          </p>
        </div>
      </Link>
    </li>
  )
}

function PositionSection({ position } : { position: Position }) {
  return (
    <section className='flex flex-col gap-y-base'>
      <hgroup className='flex flex-col tablet:flex-row items-baseline 
        gap-x-4 gap-y-xs font-mono'
      >
        <h3>{position.title}</h3>
        <span className='flex gap-x-1.5 text-xs text-primary/80'>
          <span className='hidden tablet:block'>//</span>
          <span>{position.duration}</span>
        </span>
      </hgroup>
      <p className='text-sm text-primary/85 leading-relaxed'>{position.description}</p>
      <PillList items={position.skills} />
    </section>
  )
}