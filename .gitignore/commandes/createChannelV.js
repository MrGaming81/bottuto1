module.exports = class createV {

	static match (message){

		return message.content.startsWith('!Vcreate')
	}
	static action (message){

		let args = message.content.split(' ')
		args.shift()
		var server = message.guild;
		var name = args;

		server.createChannel(name , "voice")
	}
}












































































