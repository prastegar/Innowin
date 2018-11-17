import status from './status'


const BASE = {
	LOADING: 'LOADING',
}

const SUCCESS = {
	LOADING: BASE.LOADING + status.SUCCESS,
}

const ERROR = {
	LOADING: BASE.LOADING + status.ERROR,
}

export default {
	SUCCESS,
	ERROR,
	BASE,
}