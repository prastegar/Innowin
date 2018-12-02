import types from "src/redux/actions/type"
import {put, call} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* removeOrganization({payload}) {
	const {id, params={}} = payload
	// const SOCKET_CHANNEL = yield call(api.createSocketChannel,services.ORGANIZATIONS, services.method.REMOVE)
	// try {
	// 	yield fork(api.patch, id, params)
	// 	while (true) {
	// 		const data = yield take(SOCKET_CHANNEL)
	// 		yield put({type: types.ORGANIZATION.REMOVE_ORGANIZATION+types.STATUS.SUCCESS, payload:{data}})
	// 	}
	// }
	// catch (error) {
	// 	yield put({type: types.ORGANIZATION.REMOVE_ORGANIZATION+types.STATUS.ERROR, payload:{error}})
	// }

  try {
    const response = yield call(api.remove,{service:services.ORGANIZATIONS, id, params})
    yield put({type: types.ORGANIZATION.REMOVE_ORGANIZATION+types.STATUS.SUCCESS, payload:{data: response.data}})
  }
  catch (error) {
    yield put({type: types.ORGANIZATION.REMOVE_ORGANIZATION+types.STATUS.ERROR, payload:{error}})
  }
}