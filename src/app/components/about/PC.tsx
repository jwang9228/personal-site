import { BUILD_PARTS, PCPart, PERIPHERALS } from '@/app/lib/constants'

export default function PC() {
  return (
    <section className='flex flex-col w-full justify-center'>
      <div className='grid grid-cols-1 laptop:grid-cols-2 gap-x-4 gap-y-sm'>
        <PartsList parts={BUILD_PARTS} />
        <PartsList parts={PERIPHERALS} />
      </div>
    </section>
  )
}

function PartsList({ parts } : { parts: PCPart[] }) {
  return (
    <ul className='flex flex-col gap-y-sm'>
      {parts.map(pcPart => (
        <li 
          key={pcPart.partName}
          className='grid grid-cols-3 items-baseline gap-x-base'
        >
          <p className='col-span-1 text-xs text-background/60 text-right
            uppercase font-mono'>
            {pcPart.partName}
          </p>
          <div className='col-span-2 flex flex-col gap-y-1.5'>
            {pcPart.partValues.map(values => (
              <p 
                key={values.value}
                className='flex flex-wrap 
                  items-baseline gap-x-2 gap-y-xxs'
              >
                <span className='text-sm text-background/80'>
                  {values.value}
                </span>
                {values.detail && (
                  <span className='flex gap-x-1.5 text-xs 
                    font-mono text-primary-muted'
                  >
                    <span>//</span>
                    <span>{values.detail}</span>
                  </span>
                )}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}