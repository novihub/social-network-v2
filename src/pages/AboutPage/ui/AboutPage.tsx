import { FC } from 'react'
import { useTranslation } from 'react-i18next'

// interface AboutPageProps {}

const AboutPage: FC = () => {
	const { t } = useTranslation('about')

	return <div>{t('О сайте')}</div>
}

export default AboutPage
