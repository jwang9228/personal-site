import { AiOutlinePython } from 'react-icons/ai';
import { FaJava } from 'react-icons/fa6';
import { RiJavascriptLine } from 'react-icons/ri';
import FadeContent from '../utils/FadeContent';
import Link from 'next/link';

export default function Experience() {

  const experiences = [
    {
      company: 'Agrofocal Technologies',
      location: 'San Jose, CA',
      logo: 'Agrofocal.png',
      link: 'https://agrofocal.ai',
      positions: [
        {
          title: 'Software Developer',
          duration: 'January 2024 - Present',
          skills: [
            {
              skill: 'Python',
              skillIcon: <AiOutlinePython />,
              subSkills: ['Flask', 'PyMongo', 'OpenCV', 'boto3']
            },
            {
              skill: 'JavaScript',
              skillIcon: <RiJavascriptLine />,
              subSkills: ['Tailwind CSS', 'Vite + React', 'React Router', 'Figma']
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
    <div>
      {experiences.map(experience => (
        <div key={experience.company} className='flex flex-col gap-y-8 tablet:gap-y-10 laptop:gap-y-12'>
          <FadeContent delay={100} duration={1500} 
            className='flex items-center gap-x-4.5 tablet:gap-x-5 laptop:gap-x-6'>
              <Link
                href={experience.link}
                target='_blank'
                rel='noopener noreferrer'>
                <img 
                  src={`/experience/${experience.logo}`} 
                  className='size-12 tablet:size-14 laptop:size-16 hover:cursor-pointer' />
              </Link>
            <div className='space-y-0.5 tablet:space-y-1 laptop:space-y-1.5'>
              <div className='text-xl tablet:text-2xl laptop:text-3xl font-medium'>{experience.company}</div>
              <div className='text-lg tablet:text-xl laptop:text-2xl font-light'>{experience.location}</div>
            </div>
          </FadeContent>
          {experience.positions.map((position, i) => (
            <FadeContent key={position.title} delay={150 + (200 * i)} duration={1500}
              className='space-y-0.5 text-light'>
              <div className='text-lg tablet:text-xl laptop:text-2xl text-zinc-200'>{position.title}</div>
              <div className='italic tablet:text-lg laptop:text-xl'>{position.duration}</div>
              <div className='border-l border-light mt-4 pl-3.5 tablet:pl-4 font-light 
                space-y-5 tablet:space-y-6'>
                {position.skills.map(skill => (
                  <div key={skill.skill} className='space-y-2 tablet:space-y-2.5'>
                    <div className='flex items-center gap-x-1.5 text-zinc-200 tablet:text-lg'>
                      {skill.skillIcon}
                      {skill.skill}
                    </div>
                    <div className='flex flex-wrap gap-x-3 tablet:gap-x-4 gap-y-2.5 
                      text-sm tablet:text-base'>
                      {skill.subSkills.map(subSkill => (
                        <div 
                          key={subSkill} 
                          className='px-1.5 tablet:px-2 laptop:px-2.5 py-0.5 bg-zinc-700/80 rounded'>
                            {subSkill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeContent>
          ))}
        </div>
      ))}
    </div>
  )
}