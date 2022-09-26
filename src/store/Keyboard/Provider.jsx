import { useReducer } from "react";
import Context from "../Context";

import reducer, { initialstate } from "./reducer";

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(
		reducer,
		initialstate
	);
	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	);
};

export default Provider;
