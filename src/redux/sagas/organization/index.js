import {takeEvery} from 'redux-saga/effects'
import types from 'src/redux/actions/type'

import {createOrganization} from './createOrganization'
import {findOrganization} from './findOrganization'
import {getOrganization} from './getOrganization'
import {patchOrganization} from './patchOrganization'
import {removeOrganization} from './removeOrganization'
import {updateOrganization} from './updateOrganization'

function* watchCreateOrganizations() {
  yield takeEvery(types.ORGANIZATION.CREATE_ORGANIZATION, createOrganization)
}

function* watchFindOrganizations() {
  yield takeEvery(types.ORGANIZATION.FIND_ORGANIZATIONS, findOrganization)
}

function* watchGetOrganization() {
  yield takeEvery(types.ORGANIZATION.GET_ORGANIZATION, getOrganization)
}

function* watchPatchOrganization() {
  yield takeEvery(types.ORGANIZATION.PATCH_ORGANIZATION, patchOrganization)
}

function* watchRemoveOrganization() {
  yield takeEvery(types.ORGANIZATION.REMOVE_ORGANIZATION, removeOrganization)
}

function* watchUpdateOrganization() {
  yield takeEvery(types.ORGANIZATION.UPDATE_ORGANIZATION, updateOrganization)
}

export default [
  watchCreateOrganizations(),
  watchFindOrganizations(),
  watchGetOrganization(),
  watchPatchOrganization(),
  watchRemoveOrganization(),
  watchUpdateOrganization(),
]