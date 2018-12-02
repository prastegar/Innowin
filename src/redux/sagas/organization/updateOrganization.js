import types from "src/redux/actions/type"
import {put, call, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* updateOrganization({payload}) {
	const {id, data, params={}} = payload
	// const SOCKET_CHANNEL = yield call(api.createSocketChannel,services.ORGANIZATIONS, services.method.UPDATE)
	// try {
	// 	yield fork(api.update, id, data, params)
	// 	while (true) {
	// 		const data = yield take(SOCKET_CHANNEL)
	// 		yield put({type: types.ORGANIZATION.UPDATE_ORGANIZATION+types.STATUS.SUCCESS, payload:{data}})
	// 	}
	// }
	// catch (error) {
	// 	yield put({type: types.ORGANIZATION.UPDATE_ORGANIZATION+types.STATUS.ERROR, payload:{error}})
	// }

  try {
    const response = yield call(api.patch,{service:services.ORGANIZATIONS, id, data, params})
    yield put({type: types.ORGANIZATION.UPDATE_ORGANIZATION+types.STATUS.SUCCESS, payload:{data: response.data}})
  }
  catch (error) {
    yield put({type: types.ORGANIZATION.UPDATE_ORGANIZATION+types.STATUS.ERROR, payload:{error}})
  }
}