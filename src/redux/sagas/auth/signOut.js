import client from "src/consts/client"
import types from "src/redux/actions/types"
import {call, put} from "redux-saga/effects"

export function* signOut () {
	yield call(client.clearData)
	yield put({type: types.RESET})
	yield put({type: types.AUTH.SIGN_OUT_FINISHED})
}