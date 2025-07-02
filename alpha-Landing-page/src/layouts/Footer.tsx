function Footer() {
	const textLinkClass =
		'no-underline hover:underline text-neutral-400 hover:text-pink-500';

	return (
		<footer className="bg-zinc-800 text-white">
			<div className="container mx-auto px-8">
				<div className="w-full flex flex-col md:flex-row py-6">
					<img src="favicon-512x512.png" className="w-50 h-50 m-10" />
					<div className="flex-1">
						<p className="uppercase text-white md:mb-6">Links</p>
						<ul className="list-reset mb-6">
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									FAQ
								</a>
							</li>
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Help
								</a>
							</li>
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Support
								</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<p className="uppercase text-white md:mb-6">Legal</p>
						<ul className="list-reset mb-6">
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Terms
								</a>
							</li>
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Privacy
								</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<p className="uppercase text-white md:mb-6">Social</p>
						<ul className="list-reset mb-6">
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Facebook
								</a>
							</li>
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Linkedin
								</a>
							</li>
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Twitter
								</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<p className="uppercase text-white md:mb-6">Company</p>
						<ul className="list-reset mb-6">
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Official Blog
								</a>
							</li>
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									About Us
								</a>
							</li>
							<li className="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" className={textLinkClass}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
