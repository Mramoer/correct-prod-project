import '../../../../styles/index.scss';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route
						// eslint-disable-next-line max-len
						element={<div className='page-wrapper'>{element}</div>}
						path={path}
						key={path}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
