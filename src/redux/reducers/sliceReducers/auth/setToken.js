const base = (state, action) => {
	const {client} = state
	return {
		...state,
		client: {
			...client,
			token: action.payload.token,
			authenticated: true,
		}
	}
}

const success = (state, action) => {
}

const error = (state, action) => {
}

export default {
	base,
	success,
	error,
}