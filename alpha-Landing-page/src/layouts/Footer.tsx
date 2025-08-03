import type React from 'react';

const ADDRESS_LINK =
	'https://www.google.com/maps/place/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F+%D1%86%D0%B5%D0%BD%D1%82%D1%8A%D1%80,+%D0%B1%D1%83%D0%BB%D0%B5%D0%B2%D0%B0%D1%80%D0%B4+%D0%A1%D0%BB%D0%B8%D0%B2%D0%BD%D0%B8%D1%86%D0%B0+188,+1202+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F,+%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F/@42.7046824,23.3211974,16.62z/data=!4m5!3m4!1s0x40aa8566d20d15bf:0xed1b380b5bc54401!8m2!3d42.7046107!4d23.3243584?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D';

type Link = {
	linkName: string;
	linkURL: string;
	ariaLabel?: string;
};

interface LinksCol {
	colName: string;
	links: Link[];
}

const getLinkType = (linkName: string, linkURL: string) => {
	if (linkURL && linkURL.length > 0) return 'external';
	if (linkName.includes('@')) return 'email';
	if (linkName.startsWith('+')) return 'tel';
	return 'text';
};

const generateHref = (linkName: string, linkURL: string, type: string) => {
	switch (type) {
		case 'external':
			return linkURL;
		case 'email':
			return `mailto:${linkName}`;
		case 'tel':
			return `tel:${linkName.replace(/\s/g, '')}`;
		default:
			return undefined;
	}
};

function Footer() {
	const linksTable: LinksCol[] = [
		{
			colName: 'Контактні дані',
			links: [
				{
					linkName: 'бул. Сливница 188, Sofia, Bulgaria',
					linkURL: ADDRESS_LINK,
					ariaLabel: 'Відкрити адресу школи на Google Maps',
				},
				{
					linkName: '+380 97 282 7263',
					linkURL: '',
					ariaLabel: 'Зателефонувати до школи',
				},
				{
					linkName: 'schoolalphabg@gmail.com',
					linkURL: '',
					ariaLabel: 'Написати email до школи',
				},
			],
		},
		{
			colName: 'Соціальні мережі',
			links: [
				{
					linkName: 'Facebook',
					linkURL: 'https://www.facebook.com/AlphaSchoolHub',
					ariaLabel: 'Відвідати нашу сторінку на Facebook',
				},
				{
					linkName: 'Instagram',
					linkURL: 'https://www.instagram.com/alpha_international.school_bg/',
					ariaLabel: 'Відвідати наш профіль в Instagram',
				},
			],
		},
	];

	return (
		<footer className="bg-zinc-800 text-white" role="contentinfo">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="w-full gap-6 flex flex-col md:flex-row py-6 md:py-8">
					<div className="flex-shrink-0 flex justify-center md:justify-start">
						<img
							src="/favicon-512x512.png"
							alt="Alpha School логотип"
							className="w-20 h-20 sm:w-50 sm:h-50 object-contain"
							loading="lazy"
						/>
					</div>

					<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
						{linksTable.map((column, index) => (
							<LinksCol
								colName={column.colName}
								key={`${column.colName}-${index}`}
								links={column.links}
							/>
						))}
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-zinc-700 py-4 text-center">
					<p className="text-sm text-zinc-400">
						© {new Date().getFullYear()} Alpha the International School. Всі
						права захищені.
					</p>
				</div>
			</div>
		</footer>
	);
}

const LinksCol: React.FC<LinksCol> = ({ colName, links }) => {
	const baseLinkClass = `
		block w-full py-2 text-base lg:text-lg
		text-zinc-300 hover:text-pink-400 
		transition-colors duration-200
		focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
		focus:ring-offset-zinc-800 rounded-sm
	`.trim();

	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold text-white uppercase tracking-wide">
				{colName}
			</h3>

			<ul className="space-y-2" role="list">
				{links.map((link) => {
					const linkType = getLinkType(link.linkName, link.linkURL);
					const href = generateHref(link.linkName, link.linkURL, linkType);
					const isExternal = linkType === 'external';

					return (
						<li key={link.linkName}>
							{href ? (
								<a
									href={href}
									className={`${baseLinkClass} hover:underline`}
									{...(isExternal && {
										target: '_blank',
										rel: 'noopener noreferrer',
									})}
									aria-label={link.ariaLabel || link.linkName}
								>
									{link.linkName}
									{isExternal && (
										<span className="ml-1 text-xs" aria-hidden="true">
											↗
										</span>
									)}
								</a>
							) : (
								<span className={baseLinkClass}>{link.linkName}</span>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Footer;
