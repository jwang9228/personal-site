import { 
  PiMouseMiddleClick, 
  PiMonitor,
  PiComputerTower,
  PiCpu,
  PiGraphicsCard
} from 'react-icons/pi';
import { FaRegKeyboard } from 'react-icons/fa';
import { BsMotherboard, BsMemory, BsSnow, BsDeviceSsd } from 'react-icons/bs';
import { MdOutlinePower } from 'react-icons/md';

export default function PC() {

  const peripherals = [
    {
      'icon': <PiMouseMiddleClick />,
      'description': 'Finalmouse ULX Pro Series - Aceu'
    },
    {
      'icon': <FaRegKeyboard />,
      'description': 'Razer Huntsman V3 Pro Mini 60%'
    },
    {
      'icon': <PiMonitor />,
      'description': 'LG 27GP850-B Ultragear QHD 165Hz'
    }
  ];

  const buildSpecsIcons = {
    'case': <PiComputerTower />,
    'cpu': <PiCpu />,
    'gpu': <PiGraphicsCard />,
    'motherboard': <BsMotherboard />,
    'ram': <BsMemory />, 
    'storage' : <BsDeviceSsd />,
    'cpu cooler': <BsSnow />,
    'psu': <MdOutlinePower />
  };

  const builds = [
    {
      'name': '2024 sff build', 
      'specs': {
        'case': 'Fractal Design - Terra (Jade)',
        'cpu': 'AMD Ryzen 7 7800X3D',
        'gpu': 'NVIDIA GeForce GTX 1660 Super',
        'motherboard': 'MSI MPG B650I Edge (AM5)',
        'ram': 'G.SKILL Flare X5 (DDR5 32 GB)',
        'storage': 'Samsung 980 PRO M.2 (1TB)',
        'cpu cooler': 'Noctua NH-L12S (120mm Fan)',
        'psu': 'Corsair SF750 (750w 80+ Platinum)'
      }
    },
    {
      'name': '2022 tower build',
      'specs': {
        'case': 'NZXT H510 Flow',
        'cpu': 'AMD Ryzen 9 5900X',
        'gpu': 'NVIDIA GeForce RTX 3080',
        'motherboard': 'NZXT N7 B550 (AM4)',
        'ram': 'Corsair Vengeance RGB Pro (DDR4 32GB)',
        'storage': 'Samsung 970 EVO Plus M.2 (1 TB)',
        'cpu cooler': 'NZXT Kraken Z63 RGB (280mm AIO)',
        'psu': 'Corsair RM750x (750w 80+ Gold)'
      }
    }
  ];

  return (
    <div className='flex flex-col gap-y-4 font-light'>
      <>Check out my setup and custom build specs below!</>
      <PCItem 
        header='peripherals' 
        content={
          <>
            {peripherals.map(peripheral => (
              <div 
                key={peripheral.description} 
                className='flex items-center gap-x-3.5'
              >
                {peripheral.icon}
                {peripheral.description}
              </div>
            ))}
          </>
        }
      />
      {builds.map(build => (
        <PCItem 
          key={build.name}
          header={build.name}
          content={
            <>
              {Object.entries(build.specs).map(([buildPart, buildVal]) => (
                <div 
                  key={buildPart}
                  className='flex items-center gap-x-3.5'
                >
                  {buildSpecsIcons[buildPart]}
                  {buildVal}
                </div>
              ))}
            </>
          }
        />
      ))}
      <PCItem 
        header='icon legend'
        content={
          <div className='grid grid-cols-2 items-center gap-y-0.5'>
            {Object.entries(buildSpecsIcons).map(([iconName, icon]) => (
              <div 
                key={iconName}
                className='flex items-center gap-x-2'
              >
                {icon}
                {iconName}
              </div>
            ))}
          </div>
        }
      />
    </div>
  )
}

function PCItem({header, content}) {
  return (
    <div className='relative border border-zinc-400/90 rounded-md 
      px-4.5 pt-5 pb-4 mt-2.5'
    >
      <span className='absolute -top-3.5 left-3.5 px-1.5 bg-black italic'>
        {header}
      </span>
      <div className='flex flex-col text-sm gap-y-1'>
        {content}
      </div>
    </div>
  )
}