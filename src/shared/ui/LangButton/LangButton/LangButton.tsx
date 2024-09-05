import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangButton.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
interface LangButtonProps {
	className?: string;
}

export const LangButton = ({ className }: LangButtonProps) => {
	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<Button
			className={classNames(cls.LangButton, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggleLang}>
			{t('Язык')}
		</Button>
	);
};
