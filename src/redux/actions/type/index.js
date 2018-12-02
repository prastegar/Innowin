import authTypes from './auth'
import loadingTypes from './loading'
import userTypes from './user'
import organizationTypes from './organization'

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
    ORGANIZATION: organizationTypes.ERROR,
  },
  SUCCESS: {
    AUTH: authTypes.SUCCESS,
	  LOADING: loadingTypes.SUCCESS,
	  USER: userTypes.SUCCESS,
    ORGANIZATION: organizationTypes.SUCCESS,
  },
  AUTH: authTypes.BASE,
  LOADING: loadingTypes.BASE,
  USER: userTypes.BASE,
  ORGANIZATION: organizationTypes.BASE,
}

export default types