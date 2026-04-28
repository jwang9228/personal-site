import { 
  MAIN_GAME, MAIN_GAME_TAG, GAMES
} from '@/app/lib/constants';
import { motion } from 'motion/react';
import { useQueueTimer } from '../utils/useQueueTimer';

export default function Games() {
  const queueTime = useQueueTimer();

  return (
    <section className='flex flex-col gap-lg'>
      <div className='flex items-center justify-between pl-xs'>
        <div className='flex items-center gap-sm'>
          <motion.span 
            className='block size-1.5 bg-accent-dark 
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
          <hgroup className='flex items-baseline gap-1.5'>
            <h3 className='leading-none'>{MAIN_GAME}</h3>
            <h4 className='text-xs text-background/65 leading-none'>
              {MAIN_GAME_TAG}
            </h4>
          </hgroup>
        </div>
        <time className='text-xs text-accent-dark/70
          font-mono translate-y-0.5'>
            [{queueTime}]
        </time>
      </div>
      <ol className='flex flex-wrap gap-x-base gap-y-sm'>
        {GAMES.map(game => (
          <li 
            key={game}
            className='text-xs text-background/70 font-normal rounded-full
              bg-background/6 px-sm py-xs'
          >
            {game}
          </li>
        ))}
      </ol>
    </section>
  )
}