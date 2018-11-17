import types from "src/redux/actions/type"
import {put, call} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* getUser({payload}) {
	const {id, params={}} = payload
	try {
		const data = yield call(api.get,{service:services.USERS, id, params})
		yield put({type: types.USER.GET_USER+types.STATUS.SUCCESS, payload:{data}})
	}
	catch (error) {
		yield put({type: types.USER.GET_USER+types.STATUS.ERROR, payload:{error}})
	}
}