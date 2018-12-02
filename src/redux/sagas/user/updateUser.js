import types from "src/redux/actions/type"
import {put, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import {services, methods} from 'src/consts/services'
import Channels from 'src/consts/channels'

export function* socketUpdateUser() {
  try {
    while (true) {
      const response = yield take(Channels[services.USERS][methods.UPDATE])
      yield put({type: types.USER.UPDATE_USER + types.STATUS.SUCCESS, payload: {data: response.data}})
    }
  } catch (error) {
    yield put({type: types.USER.UPDATE_USER + types.STATUS.ERROR, payload: {error}})
  } finally {
    socketUpdateUser()
  }
}

export function* updateUser({payload}) {
  const {data, params = {}} = payload
  try {
    yield fork(api.update, {service: services.USERS, data, params})
  } catch (error) {
    yield put({type: types.USER.UPDATE_USER + types.STATUS.ERROR, payload: {error}})
  }
}