import types from "src/redux/actions/type"
import {put, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import {methods, services} from 'src/consts/services'
import Channels from 'src/consts/channels'

export function* socketPatchUser() {
  try {
    while (true) {
      const response = yield take(Channels[services.USERS][methods.PATCH])
      yield put({type: types.USER.PATCH_USER + types.STATUS.SUCCESS, payload: {data: response.data}})
    }
  } catch (error) {
    yield put({type: types.USER.PATCH_USER + types.STATUS.ERROR, payload: {error}})
  } finally {
    socketPatchUser()
  }
}


export function* patchUser({payload}) {
  const {id, data, params = {}} = payload
  try {
    yield fork(api.patch, {service: services.USERS, id, data, params})
  } catch (error) {
    yield put({type: types.USER.PATCH_USER + types.STATUS.ERROR, payload: {error}})
  }
}