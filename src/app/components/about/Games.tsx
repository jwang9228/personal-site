import { MAIN_GAME, GAMES } from '@/app/lib/constants';
import { motion } from 'motion/react';
import { useQueueTimer } from '../utils/useQueueTimer';

export default function Games() {
  const queueTime = useQueueTimer();

  return (
    <section className='flex flex-col gap-3'>
      <div className='flex justify-start items-center 
        pl-0.5 gap-2.5 min-w-0'>
        <motion.span 
          className='block size-1.5 shrink-0 bg-accent-dark rounded-full'
          animate={{
            opacity: [0.25, 1],
            scale: [0.98, 1.02]
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <p className='font-mono
            text-background/80'>
          {MAIN_GAME}
        </p>

        <time className='text-xs text-accent-dark/70 font-mono'>
          [In Queue: {queueTime}]
        </time>
      </div>

      <ul className='flex flex-col gap-y-1.5 pl-4'>
        {GAMES.map((game, index) => (
          <li
            key={game}
            className='flex gap-x-3 text-xs font-mono'
          >
            <span className='text-background/25 select-none'>
              {index === GAMES.length - 1 ? '└──' : '├──'}
            </span>
            <span className='text-background/60 tracking-wide'>
              {game}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}