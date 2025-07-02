import type { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import IconWithAnimationActionContainer from '../../../components/UI/IconWithAnimationActionContainer';

interface MenuIconProps {
	setIsSlideMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function MenuIcon({ setIsSlideMenuOpen }: MenuIconProps) {
	return (
		<IconWithAnimationActionContainer onClick={() => setIsSlideMenuOpen(true)}>
			<FaBars />
		</IconWithAnimationActionContainer>
	);
}

function Logo() {
	return (
		<IconWithAnimationActionContainer w={'w-14'} h={'h-14'}>
			<NavLink to="/">
				<div>
					<img src="favicon-512x512.png" alt="aplha" />
				</div>
			</NavLink>
		</IconWithAnimationActionContainer>
	);
}

export { MenuIcon, Logo };
