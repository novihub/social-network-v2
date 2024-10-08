import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red'
}

interface AppLinkProps extends LinkProps {
	className?: string
	children: ReactNode
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = props => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props
	return (
		<Link
			to={to}
			className={classNames(cls.appLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}
