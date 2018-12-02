import api from "src/consts/api"
import {services, methods} from "src/consts/services"

let channelsInstance = null

class Channels {
	constructor () {
		this.channels = {};
		// Check if the instance exists or is null
		if (!channelsInstance) {
			// If null, set channelsInstance to this Class
			channelsInstance = this
			//instantiate of channels begin
			for (let [keyS, service] of Object.entries(services)) {
				this.channels[service] = {
					[methods.CREATE]: api.createSocketChannel(service, methods.CREATE),
					[methods.PATCH]: api.createSocketChannel(service, methods.PATCH),
					[methods.REMOVE]: api.createSocketChannel(service, methods.REMOVE),
					[methods.UPDATE]: api.createSocketChannel(service, methods.UPDATE),
				}
			}
		} else {
			// showing alert in console to know instance of Class is created before;
			console.error("Channel instantiated before!")
		}
		// Returns the initiated Class
		return channelsInstance
	}
}

const ChannelsInstance = new Channels()
console.log("✋👍 channels instance created ✋👍")
export default ChannelsInstance.channels