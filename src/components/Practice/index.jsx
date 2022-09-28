import React, { useEffect, useId } from "react";
import { useStore } from "../../store";
import "./practice.css";

export default function Practice() {
	const { keyboardState: state } = useStore();
	const { practice, text } = state;

	const [position, setPosition] = React.useState([0, 50]);
	const id = useId();
	let page = 100;
	useEffect(() => {
		let end = 0;
		let endX = 0;

		for (let i = end + page; i < end + page + 20; i++) {
			if (practice[i] === " ") {
				endX = i;
				if (i < end + 21) {
					i = i + 20;
				}
			}
		}

		setPosition([0, endX]);
	}, [practice, page]);
	const nextPage = () => {
		let end = position[1];
		let endX = end;

		for (let i = end + page; i < end + page + 20; i++) {
			if (practice[i] === " ") {
				endX = i;
				if (i < end + 21) {
					i = i + 20;
				}
			}
		}
		setPosition([position[1], endX]);
	};

	const checkTyping = (index) => {
		if (text[index] === undefined) return null;
		if (text[index] !== practice[index]) {
			if (text.length === position[1]) {
				nextPage();
			}
			return "wrong";
		} else {
			if (text.length === position[1]) {
				nextPage();
			}
			return "correct";
		}
	};
	// console.log("text", text);
	return (
		<div className="pratice">
			<div>
				{practice.length > 0 &&
					practice.map((el, index) => {
						if (
							index >= position[0] &&
							index < position[1]
						) {
							return (
								<span
									key={id + el + index}
									className={checkTyping(index)}
								>
									{el}
								</span>
							);
						} else {
							return null;
						}
					})}
			</div>
		</div>
	);
}
