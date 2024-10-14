import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (Story: () => any) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
)
