import types from "src/redux/actions/type"
import {takeEvery} from "redux-saga/effects"

/**********    %% WORKERS %%    **********/
import {signIn} from "./signIn"
import {signOut} from "./signOut"
import {verifyToken} from "./verifyToken"

/**********    %% WATCHERS %%    **********/
//1 - sign In
function* watchSignIn () {
	yield takeEvery(types.AUTH.SIGN_IN, signIn)
}

//2 - sign out
export function* watchSignOut () {
	yield takeEvery(types.AUTH.SIGN_OUT, signOut)
}

//3 - sign in error
export function* watchSignInError () {
	yield takeEvery(types.ERRORS.AUTH.SIGN_IN, signOut)
}

//4 -verify Token
function* watchVerifyToken () {
	yield takeEvery(types.AUTH.VERIFY_TOKEN, verifyToken)
}

export default {
	watchSignIn,
	watchSignInError,
	watchSignOut,
	watchVerifyToken,
}