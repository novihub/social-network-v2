import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
	className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation()

	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.pageError, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	)
}
