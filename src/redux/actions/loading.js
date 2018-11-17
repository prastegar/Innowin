// @flow
import types from "./type"

const loading = (userId: number) => ({
	type: types.USER.GET_USER_IDENTITY,
	payload: {userId}
})

const loadingActions = {
	loading,
}

export default loadingActions