import Image from 'next/image';

interface UICModel {
  name: string;
  label: string;
  sizeClass: string; 
};

const UICModels: UICModel[] = [
  { 
    name: 'N96', 
    label: 'Checkout',
    sizeClass: 'w-3/4' 
  }, 
  { 
    name: 'CT20P', 
    label: 'Customer Payment',
    sizeClass: 'w-3/4' 
  },
  { 
    name: 'EF20',
    label: 'Post-Auth Adjustments',
    sizeClass: 'w-3/4' 
  } 
];

export default function UIC() {
  return (
    <div className='flex flex-col items-center justify-center 
      pt-lg gap-12 w-full'
    >
      {UICModels.map((model, i) => (
         <div 
           key={model.name} 
           className={`flex flex-col items-center gap-y-3
            shrink-0 ${model.sizeClass}`}
         >
            <Image
              src={`/experience/uic/${model.name}.png`} 
              alt={model.name}
              width={600} 
              height={600}
              className='w-full h-auto object-contain' 
            />
            <div className='flex justify-center items-baseline
              gap-x-sm'>
              <span className='text-xs text-primary/70'>
                [{(i + 1).toString().padStart(2, '0')}]
              </span>
              <span className='text-sm text-primary/90 
                tracking-wide translate-y-px'>
                {model.label}
              </span>
            </div>
         </div>
      ))}
    </div>
  )
}