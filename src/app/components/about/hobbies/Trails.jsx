import { useState, useEffect } from 'react';
import { TbLocation } from 'react-icons/tb';
import FadeContent from '../../utils/FadeContent';

export default function Trails() {
  const [deviceView, setDeviceView] = useState(
    {'view': '', 'columns': 0}
  );

	const spots = [
		{
			'name': 'Point Lobos State Natural Reserve',
			'location': 'Carmel, Monterey County',
			'imagesDir': '/trails/point-lobos',
      /* portrait images: [0-3].jpeg, rest landscape, height of 
      1 portrait = 2 landscape, mosaic gallery 
      columns need balanced heights */
      'mobileView': [0, 4, 5, 1, 6, 7, 8, 9, 2, 10, 11, 3],
      'tabletView': [0, 4, 5, 6, 7, 8, 1, 9, 10, 2, 11, 12], 
      'laptopView': [0, 4, 5, 6, 7, 1, 8, 2, 9, 3, 10, 11]
		}
	];

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 767) {
        setDeviceView({'view': 'mobileView', 'columns': 2})
      } else if (window.innerWidth < 1024) {
        setDeviceView({'view': 'tabletView', 'columns': 3})
      } else {
        setDeviceView({'view': 'laptopView', 'columns': 4})
      }
    };
    
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

	return (
		<div className='flex flex-col gap-y-4 font-light tablet:text-lg'>
	  	<>
				A slice of recent memories exploring scenic gems of 
				Northern California.
			</>
			<div className='flex flex-col gap-y-6 mt-2'>
				{spots.map(spot => (
					<div key={spot.name} className='space-y-0.5'>
            <div className='italic font-normal'>{spot.name}</div>
            <div className='flex items-center gap-x-2 text-sm'>
              <TbLocation /> 
              <>{spot.location}</>
            </div>
						<div className={`grid grid-cols-${deviceView.columns} gap-3 mt-6`}>
							{Array.from({ length: deviceView.columns}, (_, col) => (
								<div key={col} className='grid gap-3'>
									{Array.from({ length: (spot[deviceView.view].length / deviceView.columns) }, (_, i) => (
										<FadeContent 
                      key={i + col * (spot[deviceView.view].length / deviceView.columns)} 
                      delay={15 * (i + col * (spot[deviceView.view].length / deviceView.columns))}>
											<img
												className='h-auto max-w-full rounded-lg 
													grayscale sepia-10 hover:grayscale-0 hover:sepia-0 
													focus:grayscale-0 focus:sepia-0 active:grayscale-0 active:sepia-0
													transition-all duration-300'
												src={`${spot['imagesDir']}/${
                          spot[deviceView.view][i + col * (spot[deviceView.view].length / deviceView.columns)]
                        }.jpeg`}
												alt='' />										
										</FadeContent>
									))}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}