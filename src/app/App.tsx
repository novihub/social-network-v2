import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProvider'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<AppRouter />
		</div>
	)
}

export default App
