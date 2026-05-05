import { Skill } from '@/app/lib/constants';

export default function SkillsList({ skills }: { skills: Skill[] }) {
  return (
    <ul className='flex flex-wrap gap-x-4 gap-y-3'>
      {skills.map(skill => (
        <li
          key={skill.skill}
          className='flex gap-x-sm text-xs text-primary/90 font-normal font-mono select-none
            px-sm py-xxs bg-primary-muted/35 border-l-2 tablet:border-l-3 border-primary/30'
        >
          {skill.skill}
          {skill.detail && (
            <span className='flex gap-x-1.5 text-xs 
              font-mono text-primary/70'
            >
              <span>//</span>
              <span>{skill.detail}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}