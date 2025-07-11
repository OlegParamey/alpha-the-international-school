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
			textSize="text-6xl"
			onClick={() => setIsSlideMenuOpen(true)}
		>
			<div className="flex flex-row items-center gap-x-1 hover:underline">
				<FaBars />
				<p className="pb-0 h-full font-mono tracking-wide underline-offset-3 text-slate-800 text-2xl">
					МЕНЮ
				</p>
			</div>
		</IconWithAnimationActionContainer>
	);
}

function Logo() {
	return (
		<IconWithAnimationActionContainer
			w={'w-20'}
			h={'h-20'}
			scale="scale-110 hover:scale-115 active:scale-105"
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
