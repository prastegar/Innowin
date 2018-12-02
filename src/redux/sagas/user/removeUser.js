import types from "src/redux/actions/type"
import {put, call} from "redux-saga/effects"
import api from 'src/consts/api'
import {services} from 'src/consts/services'

export function* removeUser({payload}) {
	const {id, params={}} = payload
	// const SOCKET_CHANNEL = yield call(api.createSocketChannel,services.USERS, services.method.REMOVE)
	// try {
	// 	yield fork(api.patch, id, params)
	// 	while (true) {
	// 		const data = yield take(SOCKET_CHANNEL)
	// 		yield put({type: types.USER.REMOVE_USER+types.STATUS.SUCCESS, payload:{data}})
	// 	}
	// }
	// catch (error) {
	// 	yield put({type: types.USER.REMOVE_USER+types.STATUS.ERROR, payload:{error}})
	// }

  try {
    const response = yield call(api.remove,{service:services.USERS, id, params})
    yield put({type: types.USER.REMOVE_USER+types.STATUS.SUCCESS, payload:{data: response.data}})
  }
  catch (error) {
    yield put({type: types.USER.REMOVE_USER+types.STATUS.ERROR, payload:{error}})
  }
}