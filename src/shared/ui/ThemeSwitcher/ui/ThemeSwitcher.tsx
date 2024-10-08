import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import LightIcon from 'shared/assets/icons/moon.svg'
import DarkIcon from 'shared/assets/icons/sun.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}
