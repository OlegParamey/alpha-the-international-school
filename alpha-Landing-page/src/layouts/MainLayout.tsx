import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';

function MainLayout() {
	return (
		<>
			<Header />
			<div className="pt-18 w-max-screen">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default MainLayout;
