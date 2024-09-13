import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};
	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t('An error occured')}</p>
			<Button
				type='button'
				onClick={reloadPage}>
				{t('Refresh page')}
			</Button>
		</div>
	);
};
