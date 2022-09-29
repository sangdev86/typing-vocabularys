import { TYPE_KB } from "./constant";

const initialstate = {
	text: [],
	practice: [],
};

const reducer = (state = initialstate, action) => {
	const { payload } = action;

	switch (action.type) {
		case TYPE_KB.CHANGE_TEXT: {
			const textUpdate = [...state.text];
			if (payload === "backspace") {
				textUpdate.pop();
			} else {
				textUpdate.push(payload);
			}
			return {
				...state,
				text: textUpdate,
			};
		}
		case TYPE_KB.CHANGE_PRACTICE: {
			return {
				...state,
				text: [],
				practice: payload,
			};
		}
		default:
			return state;
	}
};
export { initialstate };
export default reducer;
