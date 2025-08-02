import type React from 'react';

const ADDRESS_LINK =
	'https://www.google.com/maps/place/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F+%D1%86%D0%B5%D0%BD%D1%82%D1%8A%D1%80,+%D0%B1%D1%83%D0%BB%D0%B5%D0%B2%D0%B0%D1%80%D0%B4+%D0%A1%D0%BB%D0%B8%D0%B2%D0%BD%D0%B8%D1%86%D0%B0+188,+1202+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F,+%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F/@42.7046824,23.3211974,16.62z/data=!4m5!3m4!1s0x40aa8566d20d15bf:0xed1b380b5bc54401!8m2!3d42.7046107!4d23.3243584?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D';

type Link = { linkName: string; linkURL: string };
interface LinksCol {
	colName: string;
	links: Link[];
}

function Footer() {
	const linksTable: LinksCol[] = [
		{
			colName: 'Контактні дані',
			links: [
				{
					linkName: 'Адреса - бул. Сливница 188, Sofia, Bulgaria',
					linkURL: ADDRESS_LINK,
				},
				{ linkName: '+380 97 282 7263', linkURL: '' },
				{ linkName: 'schoolalphabg@gmail.com', linkURL: '' },
			],
		},
		{
			colName: 'Соціальні мережі',
			links: [
				{
					linkName: 'Facebook',
					linkURL: 'https://www.facebook.com/AlphaSchoolHub',
				},
				{
					linkName: 'Instagram',
					linkURL: 'https://www.instagram.com/alpha_international.school_bg/',
				},
			],
		},
	];

	return (
		<footer className="bg-zinc-800 text-white">
			<div className="container mx-auto px-8">
				<div className="w-full gap-4 flex flex-col md:flex-row  py-3">
					<img src="favicon-512x512.png" className="w-50 h-50 mx-auto" />
					{linksTable.map((column) => (
						<LinksCol colName={column.colName} links={column.links} />
					))}
				</div>
			</div>
		</footer>
	);
}

const LinksCol: React.FC<LinksCol> = ({ colName, links }) => {
	const textLinkClass =
		'w-full no-underline hover:underline text-neutral-400 hover:text-pink-500 text-lg xl:text-xl';

	return (
		<div className="flex-1 py-3">
			<p className="uppercase text-white md:mb-6">{colName.toUpperCase()}</p>
			<ul className="list-reset w-full mb-6">
				{links.map((obj) => (
					<li className="mt-2 block border-b mr-2 sm:block sm:mr-0">
						{obj.linkURL && obj.linkURL.length > 0 ? (
							<a
								href={obj.linkURL}
								target="_blank"
								className={`${textLinkClass} block`}
							>
								{obj.linkName}
							</a>
						) : (
							<div className={textLinkClass}>{obj.linkName}</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Footer;
