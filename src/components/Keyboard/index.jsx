import React, {
	useCallback,
	useEffect,
	useState,
} from "react";
import { arrKeyboard } from "../../data/data";
import "./keyboard.css";
import { useStore } from "../../store";
import { createAction } from "../../store/createActions";
import { TYPE_KB } from "../../store/Keyboard/constant";
import Setting from "../Setting";

export default function Keyboard() {
	const [pressing, setPressing] = useState([]);
	const [modal, setModal] = useState(false);

	const { keyboardDispatch: dispatch } = useStore();
	const pressKey = (el) => {
		const indexF = pressing.findIndex(
			(key) =>
				key === el.value.toLowerCase() ||
				key === el.label.toLowerCase() ||
				(key === " " && el.value === "space")
		);
		if (
			indexF === -1 ||
			indexF === undefined ||
			pressing === []
		)
			return "";
		return " pressing";
	};
	const handleKeyDown = (e) => {
		const key = e.key.toLowerCase();

		setPressing([key]);
		if (
			key !== "tab" &&
			key !== "shift" &&
			key !== "control" &&
			key !== "enter" &&
			key !== "capslock" &&
			key !== "alt" &&
			modal === false
		) {
			dispatch(createAction(TYPE_KB.CHANGE_TEXT, key));
		}
	};
	const handleKeyUp = () => {
		setTimeout(() => {
			setPressing([]);
		}, 5);
	};
	useEffect(() => {
		if (!modal) {
			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("keyup", handleKeyUp);
			return () => {
				window.removeEventListener(
					"keydown",
					handleKeyDown
				);
				window.removeEventListener("keyup", handleKeyUp);
			};
		}
	});
	const handleModal = useCallback(() => {
		setModal(!modal);
	}, [modal]);

	return (
		<div>
			<div className="keyboard-base">
				{arrKeyboard.map((el) => (
					<div
						key={el.value}
						className={`key ${el.value}	${pressKey(el)} `}
						onKeyDown={handleKeyDown}
						onKeyUp={() => handleKeyUp()}
					>
						{el.label}
					</div>
				))}
			</div>
			<Setting
				modal={modal}
				handleModal={handleModal}
				dispatch={dispatch}
			/>
		</div>
	);
}
