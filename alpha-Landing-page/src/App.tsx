import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import PreparingForSchool from './pages/Preparing/PreparingForSchool';
import LangClases from './pages/LangClases/LangClases';
import LeaderClub from './pages/LeaderClub/LeaderClub';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="healthy-events" element={<Events />} />
					<Route path="preparing" element={<PreparingForSchool />} />
					<Route path="language-classes" element={<LangClases />} />
					<Route path="leader-club" element={<LeaderClub />} />
					<Route path="*" element={<div>Not found</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
