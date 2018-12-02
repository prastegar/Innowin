import {all} from 'redux-saga/effects'
import authWatchers from './auth'
import loadingWatchers from './loading'
import userWatchers from './user'
import organizationWatchers from './organization'

const rootSaga = function* () {
  yield all([
    ...userWatchers,
    ...organizationWatchers,
    ...authWatchers,
    ...loadingWatchers,
  ])
}

export default rootSaga
