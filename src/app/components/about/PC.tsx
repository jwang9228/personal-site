import { PC_PARTS } from '@/app/lib/constants'

export default function PC() {
  return (
    <section className='flex flex-col w-full'>
      <ol className='flex flex-col gap-y-sm'>
        {PC_PARTS.map(pcPart => (
          <li 
            key={pcPart.partName}
            className='grid grid-cols-3 items-baseline gap-x-lg'
          >
            <p className='col-span-1 text-xs text-background/65 text-right
              uppercase font-mono'>
              {pcPart.partName}
            </p>
            <div className='col-span-2 text-sm flex flex-col gap-y-1.5'>
              {pcPart.partValues.map(values => (
                <p 
                  key={values.value}
                  className='flex flex-wrap 
                    items-baseline gap-x-1.5 gap-y-xxs'
                >
                  {values.value}
                  {values.detail && (
                    <span className='text-xs text-background/80'>
                      ({values.detail})
                    </span>
                  )}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}