import status from './status'

const BASE = {
	SET_TOKEN:'SET_TOKEN',
	SIGN_IN: 'SIGN_IN',
	SIGN_OUT:'SIGN_OUT',
	SIGN_OUT_FINISHED:'SIGN_OUT_FINISHED',
	VERIFY_TOKEN: 'VERIFY_TOKEN',
}

const ERROR = {
	SIGN_IN: BASE.SIGN_IN+status.ERROR,
}

const SUCCESS = {
  SIGN_IN: BASE.SIGN_IN+status.SUCCESS,
}

export default {
  SUCCESS,
  ERROR,
  BASE
}