import { EXPERIENCES } from '@/app/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

export default function Experience() {
  return (
    <ul className='flex'>
      {EXPERIENCES.map(experience => (
        <li key={experience.company} className='flex'>
          <Link
            href={experience.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center gap-5'
          >
            <Image
              src={`/experience/${experience.logo}`} 
              alt={`${experience.company}`}
              width={48}
              height={48}
              className='rounded-lg' />
            <div className='flex flex-col gap-y-1.5'>
              <h3 className='flex items-center gap-x-2 text-lg 
                transition-colors group-hover:text-accent'
              >
                {experience.company}
                <RiArrowRightUpLine className='translate-y-xxs 
                  text-primary/85 group-hover:text-accent' />
              </h3>
              <p className='text-xs text-primary/80'>
                {experience.location}
                <span className='inline-block -translate-y-xxs mx-2 text-primary-muted'>•</span>
                {experience.industry}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}