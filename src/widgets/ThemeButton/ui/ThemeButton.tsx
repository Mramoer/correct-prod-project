import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ThemeButton.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkTheme from 'shared/assets/icons/dark.svg';
import LightTheme from 'shared/assets/icons/light.svg';
import { Button } from 'shared/ui/Button';
interface ThemeButtonProps {
	className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			className={classNames(cls.ThemeButton, {}, [className])}
			onClick={toggleTheme}>
			{theme === Theme.LIGHT ? (
				<LightTheme
					height={50}
					width={50}
				/>
			) : (
				<DarkTheme
					height={50}
					width={50}
				/>
			)}
		</Button>
	);
};
