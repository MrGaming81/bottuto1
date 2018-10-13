module.exports = class Create {

	static match (message){

		return message.content.startsWith('!Tcreate')
	}
	static action (message){

		let args = message.content.split(' ')
		args.shift()
		var server = message.guild;
		var name = args;

		server.createChannel("'" + name +"'", "text")
	}
}