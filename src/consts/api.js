import services from "src/consts/services"
import {socket} from 'src/consts/connection'
import {eventChannel} from 'redux-saga'

const createSocketChannel = (service, method) => {
	const methodName = (method === 'patch') ? method + 'ed' : method + 'd'
	const resultName = `${service} ${methodName}`
  console.log(resultName, 'rrrrrrrrrr')
	return eventChannel(emit => {
    const resultHandler = res => {
			emit(res)
		}
		socket.on(resultName, resultHandler)
		return () => socket.off(resultName, resultHandler)
	})
}

/************ Socket ***********/

function authenticate ({username, password}) {
	console.groupCollapsed(` %cRequest  %cAUTHENTICATE ${username.toUpperCase()}`, "line-height: 1.5 !important; color: gray; font-size:12px; font-family:'Daniel'; font-weight:regular;", "color: #b26aea; font-size:12px; font-family: Consolas, Lucida Console, Courier New, monospace; font-weight:900;")
	console.log(" %cUSERNAME ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",username)
	console.log(" %cPASSWORD ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",password)
	console.groupEnd("Request  AUTHENTICATE")
	return new Promise((resolve, reject) => {
				socket.emit(
						services.AUTHENTICATE, {strategy: 'local', username: username, password: password},
						(error, message) => {
							if (error) {
								reject(error)
							}
							resolve(message)
						})
			}
	)
}

//1 - sending requests
function get ({service, id, params}) {
	console.groupCollapsed(` %cRequest  %cGET ${service.toUpperCase()}`, "line-height: 1.5 !important; color: gray; font-size:12px; font-family:'Daniel'; font-weight:regular;", "color: #b26aea; font-size:12px; font-family: 'roboto',Impact,sans-serif; font-weight:900;")
		console.log(" %cService ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",service)
		console.log(" %cID ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",id)
		console.log(" %cParams ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",params)
	console.groupEnd("Request  GET")
	return new Promise((resolve, reject) => {
		socket.emit('get', service, id, params, (error, message) => {
			if (error) {
				reject(error)
			}
			resolve(message)
		})
	})
}

function find ({service, params}) {
	console.groupCollapsed(` %cRequest  %cFIND ${service.toUpperCase()}`, "line-height: 1.5 !important; color: gray; font-size:12px; font-family:'Daniel'; font-weight:regular;", "color: #b26aea; font-size:12px; font-family: 'roboto',Impact,sans-serif; font-weight:900;")
		console.log(" %cService ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",service)
		console.log(" %cParams ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",params)
	console.groupEnd("%c request  %cFIND")
	return new Promise((resolve, reject) => {
		socket.emit('find', service, params, (error, message) => {
			if (error) {
				reject(error)
			}
			resolve(message)
		})
	})
}

function* create ({service, data , params}) {
	console.groupCollapsed(` %cRequest  %cCREATE ${service.toUpperCase()}`, "line-height: 1.5 !important; color: gray; font-size:12px; font-family:'Daniel'; font-weight:regular;", "color: #b26aea; font-size:12px; font-family: 'roboto',Impact,sans-serif; font-weight:900;")
	console.log(" %cService ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",service)
	console.log(" %cData ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",data)
	console.log(" %cParams ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",params)
	console.groupEnd("Request  CREATE")
	socket.emit('create', service, {...data , strategy:'local'}, params,
			(error, message) => {
				console.log('message is :', message)
				console.log('error is :', error)
			})

  // return new Promise((resolve, reject) => {
  //   socket.emit('create', service, data, params, (error, message) => {
  //     if (error) {
  //       reject(error)
  //     }
  //     resolve(message)
  //   })
  // })
}

function patch ({service, id, data, params}) {
	console.groupCollapsed(` %cRequest  %cPATCH ${service.toUpperCase()}`, "line-height: 1.5 !important; color: gray; font-size:12px; font-family:'Daniel'; font-weight:regular;", "color: #b26aea; font-size:12px; font-family: 'roboto',Impact,sans-serif; font-weight:900;")
	console.log(" %cService ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",service)
  console.log(" %cID ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",id)
  console.log(" %cData ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",data)
	console.log(" %cParams ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",params)
	console.groupEnd("Request  PATCH")
	// socket.emit('patch', service, id, data, params,
	// 		(error, message) => {
	// 			console.log('message is :', message)
	// 			console.log('error is :', error)
	// 		})

  return new Promise((resolve, reject) => {
    socket.emit('patch', service, id, data, params, (error, message) => {
      if (error) {
        reject(error)
      }
      resolve(message)
    })

  })
}

function update ({service, id, data, params}) {
	console.groupCollapsed(` %cRequest  %cUPDATE ${service.toUpperCase()}`, "line-height: 1.5 !important; color: gray; font-size:12px; font-family:'Daniel'; font-weight:regular;", "color: #b26aea; font-size:12px; font-family: 'roboto',Impact,sans-serif; font-weight:900;")
	console.log(" %cService ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",service)
  console.log(" %cID ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",id)
	console.log(" %cData ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",data)
	console.log(" %cParams ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",params)
	console.groupEnd("Request  UPDATE")
	// socket.emit('update', service, id, data, params,
	// 		(error, message) => {
	// 			console.log('message is :', message)
	// 			console.log('error is :', error)
	// 		})

  return new Promise((resolve, reject) => {
    socket.emit('update', service, id, data, params, (error, message) => {
      if (error) {
        reject(error)
      }
      resolve(message)
    })
  })
}

function remove ({service, id, params}) {
	console.groupCollapsed(` %cRequest  %cREMOVE ${service.toUpperCase()}`, "line-height: 1.5 !important; color: gray; font-size:12px; font-family:'Daniel'; font-weight:regular;", "color: #b26aea; font-size:12px; font-family: 'roboto',Impact,sans-serif; font-weight:900;")
	console.log(" %cService ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",service)
	console.log(" %cID ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",id)
	console.log(" %cParams ","color: orange; font-size:12px; font-family: 'Purisa',Impact,sans-serif; font-weight:900;",params)
	console.groupEnd("Request  REMOVE")
	// socket.emit('remove', service, id, params,
	// 		(error, message) => {
	// 			console.log('message is :', message)
	// 			console.log('error is :', error)
	// 		})

  return new Promise((resolve, reject) => {
    socket.emit('remove', service, id, params, (error, message) => {
      if (error) {
        reject(error)
      }
      resolve(message)
    })
  })
}

const api = {
	authenticate,
	create,
	createSocketChannel,
	find,
	get,
	patch,
	remove,
	update,
}
export default api