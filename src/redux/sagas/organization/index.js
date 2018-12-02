import {takeEvery, fork} from 'redux-saga/effects'
import types from 'src/redux/actions/type'

import {createOrganization, socketCreateOrganization} from './createOrganization'
import {findOrganizations} from './findOrganizations'
import {getOrganization} from './getOrganization'
import {patchOrganization, socketPatchOrganization} from './patchOrganization'
import {removeOrganization, socketRemoveOrganization} from './removeOrganization'
import {updateOrganization, socketUpdateOrganization} from './updateOrganization'

function* watchCreateOrganization() {
  yield fork(socketCreateOrganization)
  yield takeEvery(types.ORGANIZATION.CREATE_ORGANIZATION, createOrganization)
}

function* watchFindOrganizations() {
  yield takeEvery(types.ORGANIZATION.FIND_ORGANIZATIONS, findOrganizations)
}

function* watchGetOrganization() {
  yield takeEvery(types.ORGANIZATION.GET_ORGANIZATION, getOrganization)
}

function* watchPatchOrganization() {
  yield fork(socketPatchOrganization)
  yield takeEvery(types.ORGANIZATION.PATCH_ORGANIZATION, patchOrganization)
}

function* watchRemoveOrganization() {
  yield fork(socketRemoveOrganization)
  yield takeEvery(types.ORGANIZATION.REMOVE_ORGANIZATION, removeOrganization)
}

function* watchUpdateOrganization() {
  yield fork(socketUpdateOrganization)
  yield takeEvery(types.ORGANIZATION.UPDATE_ORGANIZATION, updateOrganization)
}

export default [
  watchCreateOrganization(),
  watchFindOrganizations(),
  watchGetOrganization(),
  watchPatchOrganization(),
  watchRemoveOrganization(),
  watchUpdateOrganization(),
]