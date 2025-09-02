import type React from 'react';
import TextLinkContainer from './TextLinkContainer';

type TextLinksProps = {
	onClose: () => void;
};

const TextLinks: React.FC<TextLinksProps> = ({ onClose }) => {
	return (
		<div className="flex flex-grow flex-col gap-y-2 p-4 font-sans uppercase text-base md:text-lg lg:text-2xl overflow-y-auto max-h-8/10 sm:max-h-9/10 shadow-inner">
			<TextLinkContainer
				to=""
				end={true}
				text="ГОЛОВНА - Середня школа (1-11 кл)"
				onClose={onClose}
			/>
			<TextLinkContainer
				to="alpha-step"
				text={`Академія Alpha Step (для дітей 4-6 років)`}
				onClose={onClose}
			/>
			<TextLinkContainer to="preparing" text="1 клас" onClose={onClose} />
			<TextLinkContainer
				to="examination"
				text={`Альфа — центр проведення НМТ/ЄВІ/ЄФВВ`}
				onClose={onClose}
			/>
			<TextLinkContainer
				to="leader-club"
				text={`Клуб Лідерів "Альфа" для підлітків`}
				onClose={onClose}
			/>
			<TextLinkContainer
				to="language-classes"
				text="Мовні курси"
				onClose={onClose}
			/>
			<TextLinkContainer
				to="summer-camp"
				text={`Літній табір "Альфа"`}
				onClose={onClose}
			/>
			<TextLinkContainer to="sea-camp" text={`"Альфа" на морі`} onClose={onClose} />
		</div>
	);
};

export default TextLinks;
