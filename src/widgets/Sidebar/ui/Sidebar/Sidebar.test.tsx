import { Sidebar } from './Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('classNames', () => {
	test('with only first param', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggleButton', () => {
		renderWithTranslation(<Sidebar />);
		const sidebar = screen.getByTestId('sidebar');
		const toggle = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggle);
		expect(sidebar).not.toHaveClass('collasped');
	});
});
