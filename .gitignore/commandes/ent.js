module.exports = class ENT {

	static match (message){

		return message.content === '!ent'
	}
	static action (message){
		message.channel.send('https://entauvergne.fr/my.policy')


	}
}