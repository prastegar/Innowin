const success = (state, action) => {
	const {data} = action.payload
	const {_id} = data
	return {
		...state,
		list: {
			...state.list,
			[_id]: {...data},
		}
	}
}

const error = (state, action) => {

}

const base = (state, action) => {

}

export default {
	base,
	error,
	success
}