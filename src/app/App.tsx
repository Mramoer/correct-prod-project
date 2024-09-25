import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import * as style from './App.module.scss';

import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

function App() {
	const { theme } = useTheme();

	return (
		<div className={classNames(style.App, {}, [style[theme]])}>
			<Suspense fallback=''>
				<Navbar />
				<div className={style.contentPage}>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
}

export default App;
