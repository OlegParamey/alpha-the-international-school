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
			textSize="text-5xl"
			onClick={() => setIsSlideMenuOpen(true)}
		>
			<div className="flex flex-row items-center gap-x-1 hover:underline hover:italic">
				<FaBars />
				<p className="pb-0 h-full tracking-tighter underline-offset-3 text-slate-800 text-2xl">
					МЕНЮ
				</p>
			</div>
		</IconWithAnimationActionContainer>
	);
}

function Logo() {
	return (
		<IconWithAnimationActionContainer
			w={'w-16'}
			h={'h-16'}
			scale="scale-100 hover:scale-110 active:scale-105"
		>
			<NavLink to="/">
				<div>
					<img src="favicon-512x512.png" alt="aplha" />
				</div>
			</NavLink>
		</IconWithAnimationActionContainer>
	);
}

export { MenuIcon, Logo };
