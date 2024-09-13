import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Loader.module.scss';
interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
	return (
		<div className={classNames(cls.loader, {}, [className])}>
			<div className={classNames(cls.loader, {}, [className])}></div>
		</div>
	);
};
