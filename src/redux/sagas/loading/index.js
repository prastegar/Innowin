import {loading} from './loading'
import types from "src/redux/actions/type"
import {takeEvery} from "redux-saga/effects"

/**********    %% WATCHERS %%    **********/
//1 - start of loading
function* watchLoading () {
	yield takeEvery(types.LOADING.LOADING, loading)
}

export default [
	watchLoading(),
]