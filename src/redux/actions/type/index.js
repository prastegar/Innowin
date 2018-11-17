import authTypes from './auth'
import loadingTypes from './loading'
import userTypes from './user'

const types = {
  RESET: 'RESET',
  STATUS: {
    ERROR: '_ERROR',
    SUCCESS: '_SUCCESS',
  },
  ERRORS: {
    AUTH: authTypes.ERROR,
    LOADING: loadingTypes.ERROR,
    USER: userTypes.ERROR,
  },
  SUCCESS: {
    AUTH: authTypes.SUCCESS,
	  LOADING: loadingTypes.SUCCESS,
	  USER: userTypes.SUCCESS,
  },
  AUTH: authTypes.BASE,
  LOADING: loadingTypes.BASE,
  USER: userTypes.BASE,
}

export default types