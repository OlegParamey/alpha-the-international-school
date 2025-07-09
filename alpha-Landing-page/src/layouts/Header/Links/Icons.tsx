import type { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import IconWithAnimationActionContainer from '../../../components/UI/IconWithAnimationActionContainer';

interface MenuIconProps {
	setIsSlideMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function MenuIcon({ setIsSlideMenuOpen }: MenuIconProps) {
	return (
		<IconWithAnimationActionContainer
			w={'w-max'}
			h={'h-10'}
			onClick={() => setIsSlideMenuOpen(true)}
		>
			<div className="flex flex-row items-center gap-x-2">
				<FaBars />
				<p className="pb-1 h-full font-mono tracking-wide underline underline-offset-3 text-slate-800 text-3xl">
					МЕНЮ
				</p>
			</div>
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
