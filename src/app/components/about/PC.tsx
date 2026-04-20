import { PC_PARTS } from '@/app/lib/constants'

export default function PC() {
  return (
    <section className='flex flex-col w-full'>
      <ol className='flex flex-col gap-y-xs'>
        {PC_PARTS.map(pcPart => (
          <li 
            key={pcPart.partName}
            className='flex flex-wrap 
              justify-between items-baseline'
          >
            <p className='text-xs uppercase'>
              {pcPart.partName}
            </p>
            <p className='text-sm'>
              {pcPart.partValue}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}