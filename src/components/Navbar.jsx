import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Divide as Hamburger } from 'hamburger-react';

import Logo from '../assets/images/logo.png';

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	const handleMenuHide = () => {
		setMenu(false);
	};

	return (
		<nav className='fixed w-full top-8 z-50 bg-background text-white py-4 border-b-2 border-primary'>
			<div className='container mx-auto'>
				<div className='flex flex-wrap items-center justify-between'>
					<Link to='home'>
						<img
							src={Logo}
							alt='House Logo for Matthew Greaves Carpets'
							className='w-48 cursor-pointer'
						/>
					</Link>

					{/* Mobile Hamburger Menu - START */}
					<div className='md:hidden'>
						<Hamburger
							rounded
							toggled={menu}
							color='#4FA92F'
							toggle={toggleMenu}
						/>
					</div>
					{/* Mobile Hamburger Menu - END */}

					<div
						className={`w-full md:flex md:items-center md:w-auto ${
							menu ? '' : ' hidden'
						}`}
						id='menu'
					>
						<ul className='md:flex text-center'>
							<li>
								<Link
									to='home'
									className='p-4 block font-serif tracking-wide transition ease-in-out duration-300 hover:text-primary cursor-pointer'
									onClick={handleMenuHide}
									spy={true}
									smooth={true}
									offset={-70}
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									to='about'
									className='p-4 block font-serif tracking-wide transition ease-in-out duration-300 hover:text-primary cursor-pointer'
									onClick={handleMenuHide}
									spy={true}
									smooth={true}
									offset={-130}
								>
									About
								</Link>
							</li>

							<li>
								<Link
									to='services'
									className='p-4 block font-serif tracking-wide transition ease-in-out duration-300 hover:text-primary cursor-pointer'
									onClick={handleMenuHide}
									spy={true}
									smooth={true}
									offset={-130}
								>
									Services
								</Link>
							</li>

							<li>
								<NavLink
									to='work'
									className='p-4 block font-serif tracking-wide transition ease-in-out duration-300 hover:text-primary cursor-pointer'
									onClick={handleMenuHide}
									spy={true}
									smooth={true}
								>
									Work
								</NavLink>
							</li>

							<li>
								<NavLink
									to='contact'
									className='p-4 block font-serif tracking-wide transition ease-in-out duration-300 hover:text-primary cursor-pointer'
									onClick={handleMenuHide}
									spy={true}
									smooth={true}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
