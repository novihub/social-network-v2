import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import AboutPageAsync from './pages/AboutPage/AboutPage.async'
import MainPageAsync from './pages/MainPage/MainPage.async'
import './styles/index.scss'
import { useTheme } from './styles/theme/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<Counter />
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<div>...loading</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
