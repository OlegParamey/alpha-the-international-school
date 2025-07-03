import { useEffect, useState, type ReactNode } from 'react';
import CloseBtn from '../CloseBtn.js';

interface SlideMenuProps {
	children: ReactNode;
	onClose: () => void;
	p?: string;
}

function SlideMenu({ children, onClose, p = 'p-5' }: SlideMenuProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 10);
		return () => setIsVisible(false);
	}, [setIsVisible]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(onClose, 300);
	};

	const modalBackground = `absolute top-0 left-0 bg-black/50 flex justify-center w-full h-screen
	backdrop-blur-sm duration-200 ease-in-out z-50
	${isVisible ? 'opacity-100' : 'opacity-0'}`;

	return (
		<div className={modalBackground}>
			<div
				className={`absolute left-0 top-0 inset-0 flex flex-col ${p}  min-h-fit h-full  max-h-[calc(100vh+50px)]
				bg-neutral-50 max-w-full sm:max-w-2/3 md:max-w-1/2 xl:max-w-2/5 transition-all duration-200 ease-in-out shadow-2xl
        ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<CloseBtn onClose={handleClose} />
				{children}
			</div>
		</div>
	);
}

export default SlideMenu;
