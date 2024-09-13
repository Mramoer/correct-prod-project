import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
interface ErrorButtonProps {
	className?: string;
}
//Тестовая ошибка
export const ErrorButton = ({ className }: ErrorButtonProps) => {
	const [error, setError] = useState(false);
	const toggleError = () => setError(true);
	const { t } = useTranslation();
	useEffect(() => {
		if (error === true) {
			throw new Error();
		}
	}, [error]);
	return (
		<div>
			<Button onClick={toggleError}>{t('Error')}</Button>
		</div>
	);
};
