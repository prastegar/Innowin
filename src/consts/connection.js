import io from 'socket.io-client'

const SOCKET_URL = 'https://new.daneshboom.ir';
export const socket = io(SOCKET_URL,{
	secure: true,
	extraHeaders: {
		"Access-Control-Allow-Origin": "*:*"
	}
})
