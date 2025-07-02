// import TextLinks from './Links/TextLinks.js';
import IconLinks from './Links/IconLinks.js';

function Header() {
	return (
		<>
			<nav
				className="bg-white text-neutral-900 px-2 min-h-18 fixed top-0
			flex flex-row items-center w-full border-b-6 z-100"
			>
				<IconLinks />
			</nav>
		</>
	);
}

export default Header;
