import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
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
		<div>
			<button onClick={onToggle}>{t('toggle')}</button>
			<div>
				<ThemeButton />
				<LangButton />
			</div>
		</div>
	);
};
