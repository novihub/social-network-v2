import { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	const countHandler = () => {
		setCount(c => c + 1)
	}

	return (
		<div>
			<div>{count}</div>
			<button onClick={countHandler}>Click me</button>
		</div>
	)
}
