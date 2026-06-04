import { Skill } from '@/app/lib/constants';

export default function SkillsList({ skills }: { skills: Skill[] }) {
  return (
    <ul className='flex flex-col gap-y-3'>
      {skills.map(skill => (
        <li
          key={skill.skill}
          className='flex items-baseline gap-x-2 text-sm font-mono'
        >   
          <span className='text-primary/50'>{'>'}</span>
          <span className='text-primary/85'>{skill.skill}</span>
          {skill.detail && (
            <span className='flex gap-x-1.5 pl-0.5 text-xs text-primary/65'>
              <span>//</span>
              <span>{skill.detail}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}