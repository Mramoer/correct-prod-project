import { classNames } from 'shared/lib/classNames/classNames';
import * as style from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeButton } from 'widgets/ThemeButton';
import { LangButton } from 'shared/ui/LangButton/index';
import { useTranslation } from 'react-i18next';
interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			data-testid='sidebar'
			className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [
				className,
			])}>
			<button
				data-testid='sidebar-toggle'
				onClick={onToggle}>
				{t('toggle')}
			</button>
			<div className={style.switchButtons}>
				<ThemeButton />
				<LangButton className={style.lang} />
			</div>
		</div>
	);
};
