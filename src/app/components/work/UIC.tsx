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
    sizeClass: 'w-2/5 tablet:w-1/6 laptop:w-1/7' 
  }, 
  { 
    name: 'CT20P', 
    label: 'Customer Payment',
    sizeClass: 'w-2/5 tablet:w-1/5 laptop:w-1/6' 
  },
  { 
    name: 'EF20',
    label: 'Post-Auth Adjustments',
    sizeClass: 'w-2/5 tablet:w-1/4 laptop:w-1/5' 
  } 
];

const designStatement = [
  'Retail and restaurant point-of-sale applications',
  'require interfaces that are highly responsive and', 
  'instantly intuitive. The team designed a clean,',
  'expressive UI that demonstrates meticulous care',
  'for user experience at every stage of the transaction flow —',
  'scaling seamlessly across handheld',
  'mobile units to full-size countertop registers.'
].join(' ');

export default function UIC() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col gap-y-2
        pt-4 pb-12'
      >
        <span className='font-mono uppercase text-xs text-primary/70'>
          // System Design
        </span>
        <p className='text-sm text-primary/85 
          leading-relaxed max-w-3xl'
        >
          {designStatement}
        </p>
      </div>
      <div className='flex flex-col tablet:flex-row items-center 
        tablet:items-baseline tablet:justify-start tablet:pl-3
        gap-12 tablet:gap-28 laptop:gap-32'>
        {UICModels.map((model, i) => (
          <div 
            key={model.name} 
            className={`flex flex-col items-center gap-y-4
              shrink-0 ${model.sizeClass}`}
          >
              <Image
                src={`/experience/uic/${model.name}.png`} 
                alt={model.name}
                width={600} 
                height={600}
                className='w-full h-auto object-contain' 
                priority
              />
              <div className='flex justify-center items-baseline
                gap-x-2.5 whitespace-nowrap'>
                <span className='text-xs text-primary/75'>
                  {(i + 1).toString().padStart(2, '0')}.
                </span>
                <span className='text-sm text-primary/85 
                  tracking-wide'>
                  {model.label}
                </span>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}