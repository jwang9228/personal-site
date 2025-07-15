import { TbLocation } from 'react-icons/tb';
import FadeContent from '../../utils/FadeContent';

export default function Trails() {

	const spots = [
		{
			'name': 'Point Lobos State Natural Reserve',
			'location': 'Carmel, Monterey County',
			'images-dir': '/trails/point-lobos',
			'images-per-col': 5,
			'image-type': 'jpeg'
		}
	];

	return (
		<div className='flex flex-col gap-y-4 font-light'>
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
						<div className='grid grid-cols-2 gap-3 mt-6'>
							{Array.from({ length: 2}, (_, col) => (
								<div key={col} className='grid gap-3'>
									{Array.from({ length: spot['images-per-col'] }, (_, i) => (
										<FadeContent 
                      key={i + col * spot['images-per-col']} 
                      delay={15 * (i + col * spot['images-per-col'])}
                    >
											<img
												className='h-auto max-w-full rounded-lg 
													grayscale sepia-10 hover:grayscale-0 hover:sepia-0 
													focus:grayscale-0 focus:sepia-0 active:grayscale-0 active:sepia-0
													transition-all duration-300'
												src={`${spot['images-dir']}/${i + col * spot['images-per-col']}.jpeg`}
												alt=''
											/>										
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