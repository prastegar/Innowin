import {all} from 'redux-saga/effects'
import authWatchers from './auth'
import loadingWatchers from './loading'
import userWatchers from './user/index'

const rootSaga = function* () {
	yield all([
		...userWatchers,
		...authWatchers,
		...loadingWatchers,
	])
}

export default rootSaga
