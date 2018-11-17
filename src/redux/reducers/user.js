import initialState from "./initialState"
import types from "../actions/types/index"

const users = (state = initialState.users, action) => {
	switch (action.type) {
			/****** CREATE ******/
		case types.USER.CREATE_USER:
			/****** FIND ******/
		case types.USER.FIND_USERS:
			/****** GET ******/
		case types.USER.GET_USER:
			/****** PATCH ******/
		case types.USER.PATCH_USER:
			/****** REMOVE ******/
		case types.USER.REMOVE_USER:
			/****** UPDATE ******/
		case types.USER.UPDATE_USER:


		case types.RESET:
			return initialState.users
		default:
			return state
	}
}

export default users