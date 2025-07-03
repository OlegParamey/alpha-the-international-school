import TextLinkContainer from './TextLinkContainer';

function TextLinks() {
	return (
		<div className="flex flex-col gap-y-4 p-4 font-sans uppercase text-2xl lg:text-3xl overflow-auto">
			<TextLinkContainer to="" end={true} text="Головна" />
			<TextLinkContainer to="preparing" text="1 клас" />
			<TextLinkContainer to="healthy-events" text="Оздоровчі заходи" />
			<TextLinkContainer to="language-classes" text="Мовні курси" />
			<TextLinkContainer to="leader-club" text="Клуб Лідерів “Альфа”" />
		</div>
	);
}

export default TextLinks;
