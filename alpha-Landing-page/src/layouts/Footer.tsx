import type React from 'react';

type Link = { linkName: string; linkURL: string };
interface LinksCol {
	colName: string;
	links: Link[];
}

function Footer() {
	const linksTable: LinksCol[] = [
		{
			colName: 'LINKS',
			links: [
				{ linkName: 'FAQ', linkURL: '#' },
				{ linkName: 'Help', linkURL: '#' },
				{ linkName: 'Support', linkURL: '#' },
			],
		},
		{
			colName: 'LEGAL',
			links: [
				{ linkName: 'Terms', linkURL: '#' },
				{ linkName: 'Privacy', linkURL: '#' },
			],
		},
		{
			colName: 'SOCIAL',
			links: [
				{ linkName: 'Facebook', linkURL: '#' },
				{ linkName: 'LinkedIn', linkURL: '#' },
				{ linkName: 'Twitter', linkURL: '#' },
			],
		},
		{
			colName: 'COMPANY',
			links: [
				{ linkName: 'Official Blog', linkURL: '#' },
				{ linkName: 'About Us', linkURL: '#' },
				{ linkName: 'Contact', linkURL: '#' },
			],
		},
	];

	return (
		<footer className="bg-zinc-800 text-white">
			<div className="container mx-auto px-8">
				<div className="w-full gap-4 flex flex-col md:flex-row py-3">
					<img src="favicon-512x512.png" className="w-50 h-50" />
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
		'no-underline hover:underline text-neutral-400 hover:text-pink-500';

	return (
		<div className="flex-1 py-3">
			<p className="uppercase text-white md:mb-6">{colName.toUpperCase()}</p>
			<ul className="list-reset mb-6">
				{links.map((obj) => (
					<li className="mt-2 inline-block mr-2 md:block md:mr-0">
						<a href={obj.linkURL} className={textLinkClass}>
							{obj.linkName}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Footer;
