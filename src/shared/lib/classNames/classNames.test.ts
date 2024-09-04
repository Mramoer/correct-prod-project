import { classNames } from './classNames';

describe('classNames', () => {
	const expected = 'privet class1 class2 hovered';
	test('first param', () => {
		expect(
			classNames('privet', { hovered: true, scrollable: undefined }, [
				'class1',
				'class2',
			])
		).toBe(expected);
	});
});
