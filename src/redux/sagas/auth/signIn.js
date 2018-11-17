import api from "src/consts/api"
import types from "src/redux/actions/type"
import {put, call} from "redux-saga/effects"


//1 - sign in worker
export function* signIn (action) {
	const {payload} = action
	const {username, password, rememberMe} = payload
	try {
		const data = yield call(api.authenticate, username, password)
		yield put({type: types.AUTH.SET_TOKEN, payload: {rememberMe, token: data.accessToken}})
		yield put({type: types.LOADING.LOADING,payload:{}})
		
	}
	catch (e) {
		yield put({type: types.ERRORS.AUTH.SIGN_IN, payload: {error: e}})
	}
}