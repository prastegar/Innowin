import types from "src/redux/actions/type"
import {put, call, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* createOrganization({payload}) {
	const {data, params={}} = payload
  console.log(payload, 'paaaaaa')
	console.log(services.ORGANIZATIONS, services.method.CREATE, 'aaaaaaaaaaa')
	const SOCKET_CHANNEL = yield call(api.createSocketChannel, services.ORGANIZATIONS, services.method.CREATE)
	try {
		yield fork(api.create, {service: services.ORGANIZATIONS, data, params})
		while (true) {
			const response = yield take(SOCKET_CHANNEL)
      yield put({type: types.ORGANIZATION.CREATE_ORGANIZATION+types.STATUS.SUCCESS, payload:{data: response.data}})
		}
	}
	catch (error) {
		yield put({type: types.ORGANIZATION.CREATE_ORGANIZATION+types.STATUS.ERROR, payload:{error}})
	}

  // try {
  //   const response = yield call(api.create,{service:services.ORGANIZATIONS, data, params})
  //   yield put({type: types.ORGANIZATION.CREATE_ORGANIZATION+types.STATUS.SUCCESS, payload:{data: response.data}})
  // }
  // catch (error) {
  //   yield put({type: types.ORGANIZATION.CREATE_ORGANIZATION+types.STATUS.ERROR, payload:{error}})
  // }
}