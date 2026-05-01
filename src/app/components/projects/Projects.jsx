import { AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';
import Fade from '../utils/Fade';

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
    <Fade type='up' as='div' inView className='layout-px layout-py'>
    </Fade>
  )
}