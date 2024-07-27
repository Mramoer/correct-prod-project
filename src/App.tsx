import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.lazy';
import { MainPageAsync } from './pages/MainPage/MainPage.lazy';
import { Suspense } from 'react';

import { useTheme } from './styles/themes/theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div
			className={classNames('app', { hovered: true, selected: false }, [
				theme,
			])}>
			<button onClick={toggleTheme}>Change Theme</button>
			<Link to={'/about'}>О нас</Link>
			<Link to={'/'}>На главную</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path={'/about'}
						element={<AboutPageAsync />}
					/>
					<Route
						path={'/'}
						element={<MainPageAsync />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
