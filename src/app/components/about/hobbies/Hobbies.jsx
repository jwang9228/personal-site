'use client';

import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Trails from './Trails';
import Games from './Games';
import PC from './PC';

export default function Hobbies() {
	const [detailsSection, setDetailsSection] = useState(undefined);

	const hobbies = [
		{
			'prelink': 'Playing badminton @ Bintang Dublin',
		},
		{
			'prelink': 'Hiking and exploring',
			'link': 'scenic spots',
			'postlink': 'in NorCal',
			'detailsSection': <Trails />
		},
		{
			'prelink': 'Climbing the ranks in the latest',
			'link': 'competitive games',
			'postlink': '',
			'detailsSection': <Games />
		},
		{
			'prelink': 'Tinkering with',
			'link': 'PC parts',
			'postlink': 'and peripherals',
			'detailsSection': <PC />
		}
	];

	return (
		<div className='flex flex-col gap-y-3.5 mt-1.5 text-zinc-300'>
			<div className='text-lg'>
				{detailsSection
					? <button 
							type='button'
							className='flex items-center hover:cursor-pointer -translate-x-1.5'
							onClick={() => setDetailsSection(undefined)}
						>
							<IoIosArrowBack className='mr-1' />
							<>about</>
						</button>
					: <>When I'm off work, find me:</>
				}
			</div>
			{detailsSection 
				? <>{detailsSection}</>
				: <ul className='space-y-2.5 font-light'>
						{hobbies.map(hobby => (
							<li key={hobby.prelink}>
								<>{`- ${hobby.prelink}`}</>
								<button 
									type='button'
									className='mx-1.5 underline hover:cursor-pointer font-normal'
									onClick={() => setDetailsSection(hobby.detailsSection)}
								>
									{hobby.link}
								</button>
								<>{hobby.postlink}</>
							</li>
						))}
					</ul>
			}
		</div>
	)
}