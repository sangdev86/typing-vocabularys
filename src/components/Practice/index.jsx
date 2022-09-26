import React from "react";
import { useStore } from "../../store";
import "./practice.css";

export default function Practice() {
	const { keyboardState: state } = useStore();
	const { practice, text } = state;

	const checkTyping = (index) => {
		if (index >= text.length) return null;
		if (text[index] !== practice[index]) {
			return "wrong";
		} else {
			return "correct";
		}
	};
	return (
		<div className="pratice">
			<div>
				{practice.map((el, index) => {
					return (
						<span
							key={index + el}
							className={checkTyping(index)}
						>
							{el}
						</span>
					);
				})}
			</div>
		</div>
	);
}
