/* eslint-disable no-unused-vars */
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import * as style from './Button.module.scss';

export enum ThemeEnum {
	CLEAR = 'clear',
	OUTLINE = 'outline',
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeEnum;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props;
	return (
		<button
			{...otherProps}
			className={classNames(style.Button, { [style[theme]]: true }, [
				className,
			])}>
			{children}
		</button>
	);
};
