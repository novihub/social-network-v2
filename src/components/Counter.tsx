import { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
	const [count, setCount] = useState(0)

	const countHandler = () => {
		setCount(c => c + 1)
	}

	return (
		<div>
			<div>{count}</div>
			<button className={classes.btn} onClick={countHandler}>
				Click me
			</button>
		</div>
	)
}

export default Counter
