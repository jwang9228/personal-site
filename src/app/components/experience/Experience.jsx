import { AiOutlinePython } from 'react-icons/ai';
import { FaJava } from 'react-icons/fa6';
import { RiJavascriptLine } from 'react-icons/ri';
import FadeContent from '../utils/FadeContent';
import Link from 'next/link';

export default function Experience() {

  const experiences = [
    {
      company: 'UIC Payments',
      location: 'Fremont, CA', 
      logo: 'UIC.jpg',
      link: 'https://uicpaymentsinc.com/',
      positions: [
        {
          title: 'Software Engineer',
          duration: 'October 2025 - Present',
          skills: []
        }
      ]
    }, 
    {
      company: 'Agrofocal Technologies',
      location: 'San Jose, CA',
      logo: 'Agrofocal.png',
      link: 'https://agrofocal.ai',
      positions: [
        {
          title: 'Software Developer',
          duration: 'January 2024 - October 2025',
          skills: [
            {
              skill: 'Python',
              skillIcon: <AiOutlinePython />,
              subSkills: ['Flask', 'PyMongo', 'OpenCV', 'boto3', 'Cron']
            },
            {
              skill: 'JavaScript',
              skillIcon: <RiJavascriptLine />,
              subSkills: ['Tailwind CSS', 'Vite + React', 'React Router', 'Figma', 'Esri ArcGIS']
            }
          ]
        }, 
        {
          title: 'Software Developer Intern',
          duration: 'January 2023 - December 2023',
          skills: [
            {
              skill: 'Python',
              skillIcon: <AiOutlinePython />,
              subSkills: ['PyTorch', 'TensorRT', 'Inference', 'Data Annotation']
            }
          ]
        }, 
        {
          title: 'Software Developer Co-op',
          duration: 'July 2022 - December 2022',
          skills: [
            {
              skill: 'Java / Kotlin',
              skillIcon: <FaJava />,
              subSkills: ['Android Studio', 'Camera2', 'OpenCV', 'RTSP', 'OpenGL']
            }
          ]
        }
      ]
    }
  ];

  return (
    <ul className='flex flex-col gap-y-8 tablet:gap-y-10 laptop:gap-y-12'>
      {experiences.map(experience => (
        <li key={experience.company} className='flex flex-col gap-y-8 tablet:gap-y-10 laptop:gap-y-12'>
          <FadeContent delay={100} duration={1500} 
            className='flex items-center gap-x-4.5 tablet:gap-x-5 laptop:gap-x-6'>
              <Link
                href={experience.link}
                target='_blank'
                rel='noopener noreferrer'>
                <img 
                  src={`/experience/${experience.logo}`} 
                  alt={`${experience.company} Logo`}
                  className='rounded-xl size-12 tablet:size-14 laptop:size-16 hover:cursor-pointer' />
              </Link>
            <header className='space-y-0.5 tablet:space-y-1 laptop:space-y-1.5'>
              <h2 className='text-xl tablet:text-2xl laptop:text-3xl font-medium'>{experience.company}</h2>
              <h3 className='text-lg tablet:text-xl laptop:text-2xl font-light'>{experience.location}</h3>
            </header>
          </FadeContent>
          {experience.positions.map((position, i) => (
            <FadeContent key={position.title} delay={150 + (200 * i)} duration={1500}
              className='space-y-0.5 text-light'>
              <h4 className='text-lg tablet:text-xl laptop:text-2xl text-zinc-200'>{position.title}</h4>
              <h5 className='italic tablet:text-lg laptop:text-xl text-zinc-400'>{position.duration}</h5>
              <ul className='border-l border-light mt-4 pl-3.5 tablet:pl-4 font-light 
                space-y-5 tablet:space-y-6'>
                {position.skills.map(skill => (
                  <li key={skill.skill} className='space-y-2 tablet:space-y-2.5'>
                    <h6 className='flex items-center gap-x-1.5 tablet:text-lg'>
                      {skill.skillIcon}
                      {skill.skill}
                    </h6>
                    <ul className='flex flex-wrap gap-x-3 tablet:gap-x-4 gap-y-2.5 
                      text-sm tablet:text-base'>
                      {skill.subSkills.map(subSkill => (
                        <li
                          key={subSkill} 
                          className='px-1.5 tablet:px-2 laptop:px-2.5 py-0.5 bg-zinc-700/80 rounded'>
                            {subSkill}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </FadeContent>
          ))}
        </li>
      ))}
    </ul>
  )
}