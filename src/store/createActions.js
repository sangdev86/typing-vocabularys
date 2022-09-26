export const createAction = (TYPE, payload) => {
	return {
		type: TYPE,
		payload: payload,
	};
};
