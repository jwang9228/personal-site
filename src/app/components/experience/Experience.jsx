import { AiOutlinePython } from 'react-icons/ai';
import { FaJava } from 'react-icons/fa6';
import { RiJavascriptLine } from 'react-icons/ri';

export default function Experience() {

  const experiences = [
    {
      company: 'Agrofocal Technologies',
      location: 'San Jose, CA',
      logo: 'Agrofocal.png',
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
              subSkills: ['PyTorch', 'TensorRT', 'Inference', 'Data Annotations']
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
        <div key={experience.company} className='flex flex-col gap-y-8'>
          <div className='flex items-center gap-x-4.5'>
            <img src={`/experience/${experience.logo}`} className='size-12' />
            <div className='space-y-0.5'>
              <div className='text-xl font-medium'>{experience.company}</div>
              <div className='text-lg font-light'>{experience.location}</div>
            </div>
          </div>
          {experience.positions.map(position => (
            <div key={position.title} className='space-y-0.5 text-zinc-300'>
              <div className='text-lg text-zinc-200'>{position.title}</div>
              <div className='italic'>{position.duration}</div>
              <div className='border-l border-zinc-300 mt-4 pl-3.5 font-light space-y-5'>
                {position.skills.map(skill => (
                  <div key={skill.skill} className='space-y-2'>
                    <div className='flex items-center gap-x-1.5 text-zinc-200'>
                      {skill.skillIcon}
                      {skill.skill}
                    </div>
                    <div className='flex flex-wrap gap-x-3 gap-y-2.5 text-sm'>
                      {skill.subSkills.map(subSkill => (
                        <div 
                          key={subSkill} 
                          className='px-1.5 py-0.5 bg-zinc-700/80 rounded'>
                            {subSkill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}