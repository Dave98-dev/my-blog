import css from './ArrayVisual.module.css'
import { useState, useReducer } from 'react';

function defaultArray() {
	return Array.from({ length: 20 }, (_, i) => i + 1)
		.sort(() => Math.random() - 0.5)
		.map(x => ({ val: x, color: "white" }));
}


function useOrdering() {
	const [array, setArray] = useState([...defaultArray()]);
	function startOrder() {

		let index = 0;
		let swapped = false;
		let myInterval = setInterval(() => {
			if (array[index - 1]) {
				array[index - 1].color = "white"
			}
			array[index].color = "red"
			array[index + 1].color = "red"
			if (array[index].val > array[index + 1].val) {
				swapped = true;
				let temp = array[index].val
				array[index].val = array[index + 1].val
				array[index + 1].val = temp
			}
			setArray([...array])
			index++;
			if (index >= array.length - 1) {
				array[index].color = "white"
				array[index - 1].color = "white"
				index = 0
				setArray([...array])

				if (!swapped) {
					clearInterval(myInterval);
				}
				swapped = false
			}
		}, 50);
	}

	function reset() {
		setArray([...defaultArray()])
	}

	return { startOrder, reset, array }
}

export function ArrayVisual() {
	const { startOrder, reset, array } = useOrdering();

	return (<>
		<button className={css.button} onClick={startOrder}>Ordina</button>
		<button className={css.button} onClick={reset}>Shuffle</button>
		<br />
		<div className={css.container}>
			{array.map((x) => (<div key={x.val} className={css.listItem} style={{ ["--val"]: x.val, backgroundColor: x.color }}>{x.val}</div>))}
		</div>
	</>);
}