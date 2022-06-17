import sample from '../assets/gallery/sample1.JPG';

const Services = () => {
	return (
		<section id='services' className='min-h-screen bg-dark text-white'>
			<div className='container mx-auto'>
				<h1 className='text-4xl font-serif tracking-widest text-center pt-10'>
					What We Offer
				</h1>

				<div className='flex flex-col items-center'>
					<div className='flex space-x-2 pt-6 pb-12 font-bold'>
						<button className='text-primary'>All</button>
						<button className=' tracking-wide'>Commercial Services</button>
						<button className=' tracking-wide'>Industrial Services</button>
						<button className=' tracking-wide'>Residential Services</button>
					</div>

					<div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
							<div className='flex flex-col items-center bg-dark rounded-lg border border-primary shadow-md md:flex-row md:max-w-xl'>
								<img
									className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
									src={sample}
									alt=''
								/>
								<div className='flex flex-col justify-between p-4 leading-normal'>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-center'>
										Free Quotations
									</h5>
									<p className='mb-3 font-normal text-center'>
										We offer 100% free &amp; no obligation quotations and can
										bring all samples direct to you.
									</p>
								</div>
							</div>

							<div className='flex flex-col items-center bg-dark rounded-lg border border-primary shadow-md md:flex-row md:max-w-xl'>
								<img
									className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
									src={sample}
									alt=''
								/>
								<div className='flex flex-col justify-between p-4 leading-normal'>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-center'>
										Carpets
									</h5>
									<p className='mb-3 font-normal text-center'>
										We offer 100% free &amp; no obligation quotations and can
										bring all samples direct to you.
									</p>
								</div>
							</div>

							<div className='flex flex-col items-center bg-dark rounded-lg border border-primary shadow-md md:flex-row md:max-w-xl'>
								<img
									className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
									src={sample}
									alt=''
								/>
								<div className='flex flex-col justify-between p-4 leading-normal'>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-center'>
										Hard Wood
									</h5>
									<p className='mb-3 font-normal text-center'>
										We offer 100% free &amp; no obligation quotations and can
										bring all samples direct to you.
									</p>
								</div>
							</div>

							<div className='flex flex-col items-center bg-dark rounded-lg border border-primary shadow-md md:flex-row md:max-w-xl'>
								<img
									className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
									src={sample}
									alt=''
								/>
								<div className='flex flex-col justify-between p-4 leading-normal'>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-center'>
										More
									</h5>
									<p className='mb-3 font-normal text-center'>
										We offer 100% free &amp; no obligation quotations and can
										bring all samples direct to you.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
