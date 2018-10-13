module.exports = class Pong {

	static match (message) {

		return message.content === '!ping'
	}
	static action (message){

		message.channel.send('Pong!')
		
	}

}

	