import { classNames } from 'shared/lib/classNames/classNames';
import * as style from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
	const {
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		to,
		...otherProps
	} = props;
	return (
		<Link
			className={classNames(style.AppLink, {}, [className])}
			to={to}
			{...otherProps}>
			{children}
		</Link>
	);
};
