import { ACTIVE_INTENSITY_HEATMAP, ACTIVE_ACTIVITIES } from '@/app/lib/constants';
import PillList from '../utils/PillList';

export default function Active() {
  return (
    <section className='flex flex-col gap-6'>
      <ul className='flex justify-between px-0.5'>
        {ACTIVE_INTENSITY_HEATMAP.map((dayIntensityMapping, i) => (
          <li 
            key={i}
            className='flex flex-col items-center gap-1.5
              text-sm font-accent font-medium'
          >
            {dayIntensityMapping.dayLabel}
            <span className={`block size-2 bg-accent-dark rounded-full
              ${dayIntensityMapping.intensityClass}`} />
          </li>
        ))}
      </ul>
      <PillList items={ACTIVE_ACTIVITIES} />
    </section>
  )
}