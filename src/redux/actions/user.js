import types from "./type/index"

const createUser = ({data,params}) => ({
	type: types.USER.CREATE_USER,
	payload:{data, params}
})

const findUsers = ({params}) => ({
	type: types.USER.FIND_USERS,
	payload: {params},
})

const getUser = ({id , params}) => ({
	type: types.USER.GET_USER,
	payload:{id, params}
})

const patchUser = ({id, data, params}) => ({
	type: types.USER.PATCH_USER,
	payload: {id, data, params}
})

const removeUser = ({id, params}) => ({
	type: types.USER.REMOVE_USER,
	payload: {id, params}
})

const updateUser = (id, data, params) => ({
	type: types.USER.UPDATE_USER,
	payload: {id, data, params}
})

export default {
	createUser,
	findUsers,
	getUser,
	patchUser,
	removeUser,
	updateUser,
}
