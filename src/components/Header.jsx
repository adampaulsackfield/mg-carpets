import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Header = () => {
	return (
		<header className='fixed top-0 z-50 w-full bg-background text-white font-serif font-light tracking-widest py-2 h-8'>
			<div className='container mx-auto'>
				<div className='flex justify-between'>
					<a href='mailto:mgcarpets07@outlook.com'>
						<AiOutlineMail className='inline text-primary' />{' '}
						mgcarpets07@outlook.com
					</a>

					<a href='tel:+447720935345'>
						<AiOutlinePhone className='inline text-primary' /> 07720 935 345
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
