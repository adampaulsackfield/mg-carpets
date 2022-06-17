import Typed from 'react-typed';

const Home = () => {
	return (
		<div
			id='home'
			className='pt-20 max-h-screen bg-dark text-white bg-hero-carpet bg-cover bg-center'
		>
			<section className='min-h-screen flex flex-col justify-center text-center bg-dark bg-opacity-30'>
				<div>
					<h1 className='text-4xl font-serif tracking-widest md:text-4xl lg:text-5xl'>
						MG Carpets
					</h1>
				</div>

				<div className='flex justify-center'>
					<h2 className='text-lg font-serif pt-6 md:text-xl md:px-20 lg:text-2xl text-center'>
						<Typed
							strings={[
								'An experienced flooring company in Manchester',
								'Is it time to replace your worn carpets and tired wood floors?',
								'Speak to our experts at MG Carpets today',
							]}
							typeSpeed={75}
							backSpeed={50}
							loop
							className='font-sans'
						/>
					</h2>
				</div>

				<div className='mt-4'>
					<button className='px-2 py-2 bg-primary rounded-lg text-xl hover:scale-105 hover:duration-200 md:text-2xl'>
						Our Work
					</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
