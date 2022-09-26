import { useReducer } from "react";
import Context from "./Context";

import {
	default as keyboardReducer,
	initialstate as keyboardInitstate,
} from "./Keyboard/reducer";
import {
	default as FormReducer,
	initialstate as FormInitstate,
} from "./Form/reducer";
const GlobalProvider = ({ children }) => {
	const [keyboardState, keyboardDispatch] = useReducer(
		keyboardReducer,
		keyboardInitstate
	);
	const [FormState, FormDispatch] = useReducer(
		FormReducer,
		FormInitstate
	);
	return (
		<Context.Provider
			value={{
				keyboardState,
				keyboardDispatch,
				FormState,
				FormDispatch,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default GlobalProvider;
