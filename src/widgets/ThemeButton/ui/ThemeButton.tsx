import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkTheme from 'shared/assets/icons/dark.svg';
import LightTheme from 'shared/assets/icons/light.svg';
import { Button, ThemeEnum } from 'shared/ui/Button';
interface ThemeButtonProps {
	className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			onClick={toggleTheme}
			theme={ThemeEnum.CLEAR}
			className={classNames('', {}, [className])}>
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
