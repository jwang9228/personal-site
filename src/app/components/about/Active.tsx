import { ACTIVE_INTENSITY_HEATMAP, ACTIVE_ACTIVITIES } from '@/app/lib/constants';

export default function Active() {
  return (
    <section className='flex flex-col gap-base'>
      <ol className='flex justify-between px-xs'>
        {ACTIVE_INTENSITY_HEATMAP.map((dayIntensityMapping, i) => (
          <li 
            key={i}
            className='flex flex-col items-center gap-1.5
              text-sm font-accent font-medium'
          >
            {dayIntensityMapping.dayLabel}
            <span className={`block size-1.5 bg-accent-dark rounded-full
              ${dayIntensityMapping.intensityClass}`} />
          </li>
        ))}
      </ol>
      <ol className='flex flex-wrap gap-x-base gap-y-sm'>
        {ACTIVE_ACTIVITIES.map(activity => (
          <li
            key={activity}
            className='text-xs text-background/70 font-normal rounded-full
              bg-background/6 px-sm py-xs'
          >
            {activity}
          </li>
        ))}
      </ol>
    </section>
  )
}