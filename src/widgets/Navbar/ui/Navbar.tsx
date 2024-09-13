import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import * as style from './Navbar.module.scss';
interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(style.Navbar, {}, [className])}>
			<div className={style.links}>
				<AppLink
					to={'/'}
					className={classNames(style.mainLink, {}, [])}>
					{t('Home')}
				</AppLink>
				<AppLink
					to={'/about'}
					className={classNames('', {}, [])}>
					{t('About')}
				</AppLink>
			</div>
		</div>
	);
};
