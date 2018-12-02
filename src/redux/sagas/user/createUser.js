import types from "src/redux/actions/type"
import {put, fork, take} from "redux-saga/effects"
import api from 'src/consts/api'
import {services, methods} from 'src/consts/services'
import Channels from 'src/consts/channels'

export function* socketCreateUser() {
	try {
		while (true) {
			const response = yield take(Channels[services.USERS][methods.CREATE])
      yield put({type: types.USER.CREATE_USER+types.STATUS.SUCCESS, payload:{data: response.data}})
		}
	}
	catch (error) {
		yield put({type: types.USER.CREATE_USER+types.STATUS.ERROR, payload:{error}})
	}
}

export function* createUser({payload}) {
	const {data, params={}} = payload
	try {
		yield fork(api.create, {service: services.USERS, data, params})
	}
	catch (error) {
		yield put({type: types.USER.CREATE_USER+types.STATUS.ERROR, payload:{error}})
	}
}