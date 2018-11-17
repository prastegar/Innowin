import {takeEvery} from 'redux-saga/effects'
import types from 'src/redux/actions/type'

import {createUser} from './createUser'
import {findUsers} from './findUsers'
import {getUser} from './getUser'
import {patchUser} from './patchUser'
import {removeUser} from './removeUser'
import {updateUser} from './updateUser'

function* watchCreateUsers() {
	yield takeEvery( types.USER.CREATE_USER, createUser )
}

function* watchFindUsers() {
  yield takeEvery( types.USER.FIND_USERS, findUsers )
}

function* watchGetUser() {
	yield takeEvery( types.USER.GET_USER, getUser )
}

function* watchPatchUser() {
	yield takeEvery( types.USER.PATCH_USER, patchUser )
}

function* watchRemoveUser() {
	yield takeEvery( types.USER.REMOVE_USER, removeUser )
}

function* watchUpdateUser() {
	yield takeEvery( types.USER.UPDATE_USER, updateUser )
}

export default [
	watchCreateUsers(),
	watchFindUsers(),
	watchGetUser(),
	watchPatchUser(),
	watchRemoveUser(),
	watchUpdateUser(),
]