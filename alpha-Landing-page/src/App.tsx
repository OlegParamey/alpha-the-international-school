import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/Home/Home';
import SummerCamp from './pages/SummerEvents/SummerCamp';
import SeaCamp from './pages/SummerEvents/SeaCamp';
import PreparingForSchool from './pages/Preparing/PreparingForSchool';
import LangClases from './pages/LangClases/LangClases';
import LeaderClub from './pages/LeaderClub/LeaderClub';
import Examination from './pages/Examination/Examination';
import AlphaStep from './pages/AplhaStep/AlphaStep';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="summer-camp" element={<SummerCamp />} />
					<Route path="sea-camp" element={<SeaCamp />} />
					<Route path="preparing" element={<PreparingForSchool />} />
					<Route path="language-classes" element={<LangClases />} />
					<Route path="leader-club" element={<LeaderClub />} />
					<Route path="examination" element={<Examination />} />
					<Route path="alpha-step" element={<AlphaStep />} />

					<Route path="*" element={<div>Not found</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
