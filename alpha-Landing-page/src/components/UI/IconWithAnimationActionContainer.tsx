import type { ReactNode } from 'react';

interface IconActionProps {
	children?: ReactNode;
	onClick?: () => void;
	isSmHidden?: boolean;
	textSize?: string;
	w?: string;
	h?: string;
}

function IconWithAnimationActionContainer({
	children,
	onClick,
	isSmHidden = false,
	textSize = 'text-4xl',
	w = 'w-10',
	h = 'h-10',
}: IconActionProps) {
	return (
		<div
			onClick={onClick}
			className={`${w} ${h} transition-transform duration-50 ease-out border-transparent flex items-center justify-around
				hover:scale-115 cursor-pointer active:scale-97 text-center text-black ${textSize}
				${isSmHidden ? 'sm:hidden' : ''}`}
		>
			{children}
		</div>
	);
}

export default IconWithAnimationActionContainer;
