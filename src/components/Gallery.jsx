import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import sample from '../assets/gallery/sample1.JPG';
import sample2 from '../assets/gallery/sample2.JPG';
import sample3 from '../assets/gallery/sample3.JPG';
import sample4 from '../assets/gallery/sample4.JPG';

const Gallery = () => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			showThumbs={false}
			centre={true}
			dynamicHeight={false}
		>
			<div>
				<img src={sample} alt='' />
				<p className='legend' style={{ fontSize: '20px' }}>
					Placeholder Image
				</p>
			</div>

			<div>
				<img src={sample2} alt='' />
				<p className='legend' style={{ fontSize: '20px' }}>
					Placeholder Image
				</p>
			</div>

			<div>
				<img src={sample3} alt='' />
				<p className='legend' style={{ fontSize: '20px' }}>
					Placeholder Image
				</p>
			</div>

			<div>
				<img src={sample4} alt='' />
				<p className='legend' style={{ fontSize: '20px' }}>
					Placeholder Image
				</p>
			</div>
		</Carousel>
	);
};

export default Gallery;
