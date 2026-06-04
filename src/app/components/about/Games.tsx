import { 
  MAIN_GAME, GAMES
} from '@/app/lib/constants';
import { motion } from 'motion/react';
import { useQueueTimer } from '../utils/useQueueTimer';

export default function Games() {
  const queueTime = useQueueTimer();

  return (
    <section className='flex flex-col gap-6'>
      <div className='flex justify-start pl-0.5 gap-x-4'>
        <div className='flex items-center gap-2.5 min-w-0'>
          <motion.span 
            className='block size-1.5 shrink-0 bg-accent-dark 
              rounded-full translate-y-px'
            animate={{
              opacity: [0.25, 1],
              scale: [0.95, 1.05]
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
          <p className='font-mono leading-none 
             text-background/80 tracking-wide'>
            {MAIN_GAME}
          </p>
        </div>
        <time className='text-micro laptop:text-xs 
          text-accent-dark/70 font-mono 
            translate-y-px laptop:translate-y-0'>
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