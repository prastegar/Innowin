import types from "src/redux/actions/type"
import {put, call} from "redux-saga/effects"
import api from 'src/consts/api'
import services from 'src/consts/services'

export function* getOrganization({payload}) {
	const {id, params={}} = payload
	try {
		const data = yield call(api.get,{service:services.ORGANIZATIONS, id, params})
		yield put({type: types.ORGANIZATION.GET_ORGANIZATION+types.STATUS.SUCCESS, payload:{data}})
	}
	catch (error) {
		yield put({type: types.ORGANIZATION.GET_ORGANIZATION+types.STATUS.ERROR, payload:{error}})
	}
}