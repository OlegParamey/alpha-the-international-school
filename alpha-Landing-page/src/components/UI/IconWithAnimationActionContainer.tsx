import type { ReactNode } from 'react';

interface IconActionProps {
	children?: ReactNode;
	onClick?: () => void;
	scale?: string;
	isSmHidden?: boolean;
	textSize?: string;
	w?: string;
	h?: string;
}

function IconWithAnimationActionContainer({
	children,
	onClick,
	scale = 'hover:scale-110 active:scale-105',
	isSmHidden = false,
	textSize = 'text-4xl',
	w = 'w-10',
	h = 'h-10',
}: IconActionProps) {
	return (
		<div
			onClick={onClick}
			className={`${w} ${h} transition-transform duration-50 ease-out border-transparent flex items-center justify-around
				cursor-pointer  text-center text-black ${textSize} ${scale}
				${isSmHidden ? 'sm:hidden' : ''}`}
		>
			{children}
		</div>
	);
}

export default IconWithAnimationActionContainer;
