import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
				className
			])}
		>
			<button onClick={onToggle}>{t('Переключить')}</button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
