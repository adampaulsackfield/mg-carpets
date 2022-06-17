import { TiTick } from 'react-icons/ti';

import Hero from '../assets/gallery/hero.JPG';
import Signature from '../assets/images/signature.png';
import Gallery from './Gallery';

const About = () => {
	return (
		<section id='about' className='min-h-screen bg-white text-black'>
			<div className='container mx-auto'>
				<div className='min-h-screen flex flex-row pt-12'>
					<div className='w-2/3'>
						<h2 className='text-3xl text-primary font-serif tracking-wider mb-8 underline underline-offset-8'>
							About Us
						</h2>

						<h1 className='text-4xl font-sans font-bold tracking-widest uppercase mb-8'>
							MG-Carpets are here for all your flooring needs
						</h1>

						<p className='text-xl leading-8 pr-40 mb-10'>
							All of our services are backed by our 100% satisfaction guarantee.
							Our electricians can install anything from new security lighting
							for your outdoors to a whole home generator that will keep your
							appliances working during a power outage.{' '}
						</p>

						<div className='mb-10'>
							<ul>
								<li className='text-2xl'>
									<TiTick className='inline text-primary' /> Free Quotation
								</li>
								<li className='text-2xl'>
									<TiTick className='inline text-primary' /> High Quality
									Carepts
								</li>
								<li className='text-2xl'>
									<TiTick className='inline text-primary' /> Hardwood Flooring
								</li>
							</ul>
						</div>

						<div className='flex items-center'>
							<img
								src='https://picsum.photos/75'
								alt=''
								className='rounded-full mr-4'
							/>

							<div className='mr-4 border-r-2 border-background pr-10'>
								<h2 className='font-bold font-serif tracking-widest text-xl'>
									Matthew Greaves
								</h2>
								<h3 className='font-bold font-serif tracking-widest text-lg text-primary'>
									Owner
								</h3>
							</div>

							<img src={Signature} alt='' className='w-48' />
						</div>
					</div>

					<div className='w-1/3 pl-6 flex items-center'>
						<Gallery />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
