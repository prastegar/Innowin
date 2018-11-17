import types from "src/redux/actions/type"
import {put, call, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* patchUser({payload}) {
	const {id, data, params={}} = payload
	const SOCKET_CHANNEL = yield call(api.createSocketChannel,services.USERS, services.method.PATCH)
	try {
		yield fork(api.patch, id, data, params)
		while (true) {
			const data = yield take(SOCKET_CHANNEL)
			yield put({type: types.USER.PATCH_USER+types.STATUS.SUCCESS, payload:{data}})
		}
	}
	catch (error) {
		yield put({type: types.USER.PATCH_USER+types.STATUS.ERROR, payload:{error}})
	}
}