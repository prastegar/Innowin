import types from "src/redux/actions/type"
import {put, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import {services, methods} from 'src/consts/services'
import Channels from 'src/consts/channels'

export function* socketUpdateOrganization() {
  try {
    while (true) {
      const response = yield take(Channels[services.ORGANIZATIONS][methods.UPDATE])
      yield put({type: types.ORGANIZATION.UPDATE_ORGANIZATION + types.STATUS.SUCCESS, payload: {data: response.data}})
    }
  } catch (error) {
    yield put({type: types.ORGANIZATION.UPDATE_ORGANIZATION + types.STATUS.ERROR, payload: {error}})
  } finally {
    socketUpdateOrganization()
  }
}

export function* updateOrganization({payload}) {
  const {data, params = {}} = payload
  try {
    yield fork(api.update, {service: services.ORGANIZATIONS, data, params})
  } catch (error) {
    yield put({type: types.ORGANIZATION.UPDATE_ORGANIZATION + types.STATUS.ERROR, payload: {error}})
  }
}