import type React from 'react';
import TextLinkContainer from './TextLinkContainer';

type TextLinksProps = {
	onClose: () => void;
};

const TextLinks: React.FC<TextLinksProps> = ({ onClose }) => {
	return (
		<div className="flex flex-col gap-y-4 p-4 font-sans uppercase text-2xl lg:text-3xl overflow-auto">
			<TextLinkContainer to="" end={true} text="Головна" onClose={onClose} />
			<TextLinkContainer to="preparing" text="1 клас" onClose={onClose} />
			<TextLinkContainer
				to="summer-camp"
				text={`Літній табір "Альфа"`}
				onClose={onClose}
			/>
			<TextLinkContainer to="sea-camp" text={`"Альфа" на морі`} onClose={onClose} />
			<TextLinkContainer
				to="language-classes"
				text="Мовні курси"
				onClose={onClose}
			/>
			<TextLinkContainer
				to="leader-club"
				text={`Клуб Лідерів "Альфа" для старшокласників`}
				onClose={onClose}
			/>
		</div>
	);
};

export default TextLinks;
