import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Suspense fallback=''>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Suspense>
);
