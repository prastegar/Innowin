import types from "src/redux/actions/type"
import {takeEvery, put, all} from "redux-saga/effects"

/**********    %% WORKERS %%    **********/
export function* loading () {
	try {
		yield all([
			put({type: types.USER.FIND_USERS, payload:{}}),
		])
	}
	catch (error) {
		put({type: types.LOADING.LOADING+types.STATUS.ERROR, payload:{error}})
	}
}