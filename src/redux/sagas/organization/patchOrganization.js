import types from "src/redux/actions/type"
import {put, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import {methods, services} from 'src/consts/services'
import Channels from 'src/consts/channels'

export function* socketPatchOrganization() {
  try {
    while (true) {
      const response = yield take(Channels[services.ORGANIZATIONS][methods.PATCH])
      yield put({type: types.ORGANIZATION.PATCH_ORGANIZATION + types.STATUS.SUCCESS, payload: {data: response.data}})
    }
  } catch (error) {
    yield put({type: types.ORGANIZATION.PATCH_ORGANIZATION + types.STATUS.ERROR, payload: {error}})
  } finally {
    socketPatchOrganization()
  }
}


export function* patchOrganization({payload}) {
  const {id, data, params = {}} = payload
  try {
    yield fork(api.patch, {service: services.ORGANIZATIONS, id, data, params})
  } catch (error) {
    yield put({type: types.ORGANIZATION.PATCH_ORGANIZATION + types.STATUS.ERROR, payload: {error}})
  }
}