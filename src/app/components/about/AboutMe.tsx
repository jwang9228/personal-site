import { ABOUT_ME_LOCATION, ABOUT_ME_STATEMENT } from '@/app/lib/constants';

export default function AboutMe() {
  return (
    <section className='flex flex-col gap-y-base'>
      <p className='text-sm text-background/90 leading-relaxed'>
        {ABOUT_ME_STATEMENT}
      </p>
      <p className='text-xs text-background/50 font-mono 
        uppercase tracking-widest'>
        {ABOUT_ME_LOCATION}
      </p>
    </section>
  )
}