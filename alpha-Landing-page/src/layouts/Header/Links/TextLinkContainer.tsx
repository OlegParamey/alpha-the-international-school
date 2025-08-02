import { NavLink } from 'react-router-dom';

type ActiveClassHandlerProps = {
	isActive: boolean;
};

interface TextLinkContainerProps {
	text: string;
	to: string;
	end?: boolean;
	onClose: () => void;
}

function handleActiveClass({ isActive }: ActiveClassHandlerProps) {
	return isActive ? ' !text-rose-500 hover:!bg-rose-100' : '';
}

function TextLinkContainer({ text, to, end = false, onClose }: TextLinkContainerProps) {
	return (
		<NavLink
			to={to}
			end={end}
			onClick={onClose}
			className={({ isActive }) =>
				`${handleActiveClass({
					isActive,
				})} w-full border-b-2 hover:border-dashed hover:bg-neutral-200 hover:text-neutral-800 
				 duration-75 active:scale-98 max-h-12 md:max-h-14 lg:max-h-16 2xl:max-h-14 flex-1`
			}
		>
			• {text}
		</NavLink>
	);
}

export default TextLinkContainer;
