import { BUILD_PARTS, PCPart, PERIPHERALS } from '@/app/lib/constants'

export default function PC() {
  return (
    <section className='flex flex-col w-full justify-center'>
      <div className='grid grid-cols-1 laptop:grid-cols-12 gap-x-4 gap-y-2.5'>
        <div className='laptop:col-span-5'>
          <PartsList parts={BUILD_PARTS} />
        </div>
        <div className='laptop:col-span-7'>
          <PartsList parts={PERIPHERALS} />
        </div>
      </div>
    </section>
  )
}

function PartsList({ parts } : { parts: PCPart[] }) {
  return (
    <ul className='flex flex-col gap-y-2.5'>
      {parts.map(pcPart => (
        <li 
          key={pcPart.partName}
          className='grid grid-cols-3 items-baseline gap-x-6'
        >
          <p className='col-span-1 text-xs text-background/60 text-right
            uppercase font-mono'>
            {pcPart.partName}
          </p>
          <div className='col-span-2 flex flex-col gap-y-1.5'>
            {pcPart.partValues.map(values => (
              <span 
                key={values.value} 
                className='text-xs text-background/70'
              >
                {values.value}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}