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
    sizeClass: 'w-3/5 tablet:w-1/3 laptop:w-1/6' 
  }, 
  { 
    name: 'CT20P', 
    label: 'Customer Payment',
    sizeClass: 'w-3/5 tablet:w-1/3 laptop:w-1/5' 
  },
  { 
    name: 'EF20',
    label: 'Post-Auth Adjustments',
    sizeClass: 'w-3/5 tablet:w-1/3 laptop:w-1/4' 
  } 
];

const designStatement = [
  'Retail and restaurant point-of-sale applications',
  'require interfaces that are highly responsive and', 
  'instantly intuitive. We engineered a clean,',
  'expressive UI that demonstrates meticulous care',
  'for user experience at every stage of the transaction flow.',
  'The resulting design scales seamlessly across handheld',
  'mobile units to full-size countertop registers.'
].join(' ');

export default function UIC() {
  return (
    <div className='flex flex-col pt-7 w-full'>
      <div className='flex flex-col gap-y-3
        pt-sm pb-14'
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
      <div className='flex flex-col laptop:flex-row items-center 
        laptop:items-baseline justify-center gap-14 tablet:gap-16 laptop:gap-32'>
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
                gap-x-sm whitespace-nowrap'>
                <span className='text-sm text-primary/75'>
                  {(i + 1).toString().padStart(2, '0')}.
                </span>
                <span className='font-medium text-primary/85 
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