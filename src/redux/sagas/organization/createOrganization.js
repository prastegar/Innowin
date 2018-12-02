import types from "src/redux/actions/type"
import {put, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import {services, methods} from 'src/consts/services'
import Channels from 'src/consts/channels'

export function* socketCreateOrganization() {
  try {
    while (true) {
      const response = yield take(Channels[services.ORGANIZATIONS][methods.CREATE])
      yield put({type: types.ORGANIZATION.CREATE_ORGANIZATION + types.STATUS.SUCCESS, payload: {data: response.data}})
    }
  } catch (error) {
    yield put({type: types.ORGANIZATION.CREATE_ORGANIZATION + types.STATUS.ERROR, payload: {error}})
  } finally {
    socketCreateOrganization()
  }
}

export function* createOrganization({payload}) {
  const {data, params = {}} = payload
  try {
    yield fork(api.create, {service: services.ORGANIZATIONS, data, params})
  } catch (error) {
    yield put({type: types.ORGANIZATION.CREATE_ORGANIZATION + types.STATUS.ERROR, payload: {error}})
  }
}