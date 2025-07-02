import TextLinkContainer from './TextLinkContainer';

function TextLinks() {
	return (
		<div className="flex flex-col gap-y-4 p-4 font-sans uppercase text-3xl overflow-auto">
			<TextLinkContainer to="" end={true} text="Головна" />
			<TextLinkContainer to="healthy-events" text="Оздоровлення" />
			<TextLinkContainer to="preparing" text="Підготовка до школи" />
			<TextLinkContainer to="language-classes" text="язикові курси" />
			<TextLinkContainer to="leader-club" text="Клуб Лідерів “Альфа”" />
		</div>
	);
}

export default TextLinks;
