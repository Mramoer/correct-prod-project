import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<div>
			{t('Главная страница')} {t('всем привет')}
		</div>
	);
};

export default MainPage;
