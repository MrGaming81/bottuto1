

module.exports = class video{
	
	static matchhelp (message){
		return message.content === '!video help'


	}
	static actionhelp (message){
		return message.channel.send('Les matières disponibles sont : \n - EPS \n -Musique (faites !video [matière] help pour la liste des viéos)')



	}

}	