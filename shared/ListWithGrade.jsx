import css from "./ListWithGrade.module.css"

export default function ListWithGrade(props) {
	const voti = {
		5: "Ottimo",
		4: "Molto Buono",
		3: "Buono"
	}
	return (
		<div className={css.grid}>
			{props.items.map((x) => (
				<>
					<div className={css.name} >
						{x.name}
					</div>
					<div className={css.grade}>
						<div>
							{"-".repeat(5 - x.grade)}
							{"*".repeat(x.grade)}
						</div>
						<div className={css.gradeName}>
							{voti[x.grade]}
						</div>
					</div>

					<div className={css.line}></div>
				</>
			))
			}
		</div >
	)
}