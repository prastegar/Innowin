import types from "src/redux/actions/type"
import {put, call, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* createUser({payload}) {
	const {data, params={}} = payload
  console.log(payload, 'paaaaaa')
	console.log(services.USERS, services.method.CREATE, 'aaaaaaaaaaa')
	const SOCKET_CHANNEL = yield call(api.createSocketChannel, services.USERS, services.method.CREATE)
	try {
		yield fork(api.create, {service: services.USERS, data, params})
		while (true) {
			const response = yield take(SOCKET_CHANNEL)
      yield put({type: types.USER.CREATE_USER+types.STATUS.SUCCESS, payload:{data: response.data}})
		}
	}
	catch (error) {
		yield put({type: types.USER.CREATE_USER+types.STATUS.ERROR, payload:{error}})
	}

  // try {
  //   const response = yield call(api.create,{service:services.USERS, data, params})
  //   yield put({type: types.USER.CREATE_USER+types.STATUS.SUCCESS, payload:{data: response.data}})
  // }
  // catch (error) {
  //   yield put({type: types.USER.CREATE_USER+types.STATUS.ERROR, payload:{error}})
  // }
}