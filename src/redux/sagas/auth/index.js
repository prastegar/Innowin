import authActions from './auth'

export default [
		authActions.watchSignIn(),
		authActions.watchSignOut(),
		authActions.watchSignInError(),
		authActions.watchVerifyToken()
]