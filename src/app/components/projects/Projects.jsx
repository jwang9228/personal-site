import { AiOutlineGithub } from 'react-icons/ai';
import FadeContent from '../utils/FadeContent';
import Link from 'next/link';

export default function Projects() {

  const projects = [
    {
      title: 'personal website',
      description: '(You are here)',
      skills: ['Next.js', 'React', 'Tailwind CSS'],
      repository: 'https://github.com/jwang9228/personal-site'
    },
    {
      title: 'nexus', 
      description: 'An alternative to popular League of Legends stat trackers',
      skills: ['Next.js', 'React', 'Tailwind CSS', 'AWS S3', 'Node.js', 'Express', 'REST API', 'Riot API', 'MongoDB', 'PM2'],
      repository: 'https://github.com/jwang9228/nexus'
    }
  ];

  return (
    <main className='flex flex-col gap-y-8 tablet:gap-y-10 laptop:gap-y-12'>
      {projects.map((project, i) => (
        <FadeContent key={project.title} delay={500 + (150 * i)} duration={1500} 
          className='space-y-0.5 tablet:space-y-1 laptop:space-y-1.5'>
          <header className='flex items-center gap-x-3 text-lg tablet:text-xl laptop:text-2xl'>
            <h2>{project.title}</h2>
            {project.repository && 
              <Link href={project.repository} target='_blank' rel='noopener noreferrer'>
                <AiOutlineGithub /> 
              </Link>
            }
          </header>
          <h3 className='tablet:text-lg laptop:text-xl text-zinc-400 font-light'>
            {project.description}
          </h3>
          <ul className='flex flex-wrap w-full laptop:w-1/3
            gap-x-3 tablet:gap-x-4.5 gap-y-2.5 tablet:gap-y-4
            mt-3 tablet:mt-3.5 laptop:mt-4 text-light/95 
            text-sm tablet:text-base laptop:text-lg'>
            {project.skills.map(skill => (
              <li
                key={skill} 
                className='px-1.5 tablet:px-2 laptop:px-2.5 py-0.5 
                bg-zinc-700/80 rounded'>
                  {skill}
              </li>
            ))}
          </ul>
        </FadeContent>
      ))}
      <FadeContent delay={500 + (150 * projects.length)} duration={1500}
        className='flex justify-between items-center w-fit
        p-px rounded-sm hover:animate-rotate-border
        hover:bg-zinc-400 hover:bg-conic/[from_var(--border-angle)] 
        from-dark via-light/85 to-dark
        from-80% via-90% to-100%'>
        <Link
          href={'https://nexus.justinnwang.com'}
          target='_blank'
          rel='noopener noreferrer'
          className='cursor-pointer rounded-sm px-2.5 py-1.5 bg-dark 
            border border-zinc-500 text-light/90 tablet:text-lg laptop:text-xl'>
          Explore the nexus
        </Link>
      </FadeContent>
    </main>
  )
}