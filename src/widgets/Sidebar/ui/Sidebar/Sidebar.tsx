import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeButton } from 'widgets/ThemeButton';
import { LangButton } from 'shared/ui/LangButton/index';
interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}>
			<button onClick={onToggle}>toggle</button>
			<div className={cls.switchButtons}>
				<ThemeButton />
				<LangButton className={cls.lang} />
			</div>
		</div>
	);
};
