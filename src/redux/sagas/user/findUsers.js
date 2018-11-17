import types from "src/redux/actions/type"
import {put, call} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* findUsers({payload}) {
	const {params} = payload
	try {
		const {data} = yield call(api.find,{service:services.USERS, params})
		yield put({type: types.USER.FIND_USERS+types.STATUS.SUCCESS, payload:{data}})
	}
	catch (error) {
		yield put({type: types.USER.FIND_USERS+types.STATUS.ERROR, payload:{error}})
	}
}