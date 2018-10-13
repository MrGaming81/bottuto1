module.exports = class Eps {

	static match (message){

		message.content === '!video help eps'
	}
	static action (message){

		message.reply("VOICI LES VIDÉOS DISPONIBLES \n - Basketball : !video eps 1\n - Course d'orientation : ! video eps 2\n - Voley Ball : !video eps 3 ")
	}
	static match1 (message){
		message.content === '!video eps 1'
	}
	static action1 (message){
		message.reply('https://www.youtube.com/watch?v=z93bLrx7JTw')
	}
	static match2 (message){
		message.content === '!video eps 2'
	}
	static action2 (message){
		message.reply('https://www.youtube.com/watch?v=P11oy55kwio')
	}
	static match3 (message){
		message.content === '!video eps 3'
	}
	action3 (message){
		message.reply('https://www.youtube.com/watch?v=4922qP01gTI')
	}

}