import { useState, useEffect } from 'react';
import { MenuIcon, Logo } from './Icons';
import SlideMenu from '../../../components/UI/Menu/SlideMenu';
import TextLinks from './TextLinks.js';

function IconLinks() {
	const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

	useEffect(() => {
		const shouldLockScroll = isSlideMenuOpen;
		document.body.classList.toggle('overflow-hidden', shouldLockScroll);
		return () => document.body.classList.remove('overflow-hidden');
	}, [isSlideMenuOpen]);

	return (
		<>
			<div className="flex justify-between px-4 items-center w-full text-white text-center">
				<MenuIcon setIsSlideMenuOpen={setIsSlideMenuOpen} />
				<Logo />
			</div>

			{isSlideMenuOpen && (
				<SlideMenu onClose={() => setIsSlideMenuOpen(false)}>
					<TextLinks />
				</SlideMenu>
			)}
		</>
	);
}

export default IconLinks;
