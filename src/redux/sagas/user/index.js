import {takeEvery, fork} from 'redux-saga/effects'
import types from 'src/redux/actions/type'

import {createUser, socketCreateUser} from './createUser'
import {findUsers} from './findUsers'
import {getUser} from './getUser'
import {patchUser, socketPatchUser} from './patchUser'
import {removeUser, socketRemoveUser} from './removeUser'
import {updateUser, socketUpdateUser} from './updateUser'

function* watchCreateUser() {
  yield fork(socketCreateUser)
  yield takeEvery(types.USER.CREATE_USER, createUser)
}

function* watchFindUsers() {
  yield takeEvery(types.USER.FIND_USERS, findUsers)
}

function* watchGetUser() {
  yield takeEvery(types.USER.GET_USER, getUser)
}

function* watchPatchUser() {
  yield fork(socketPatchUser)
  yield takeEvery(types.USER.PATCH_USER, patchUser)
}

function* watchRemoveUser() {
  yield fork(socketRemoveUser)
  yield takeEvery(types.USER.REMOVE_USER, removeUser)
}

function* watchUpdateUser() {
  yield fork(socketUpdateUser)
  yield takeEvery(types.USER.UPDATE_USER, updateUser)
}

export default [
  watchCreateUser(),
  watchFindUsers(),
  watchGetUser(),
  watchPatchUser(),
  watchRemoveUser(),
  watchUpdateUser(),
]