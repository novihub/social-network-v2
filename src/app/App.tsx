import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<div>...loading</div>}>
			
				<Routes>
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/'} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
