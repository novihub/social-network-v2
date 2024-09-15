import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import './index.scss'
import AboutPageAsync from './pages/AboutPage/AboutPage.async'
import MainPageAsync from './pages/MainPage/MainPage.async'

const App = () => {
	return (
		<div className='app'>
			<Counter />
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
