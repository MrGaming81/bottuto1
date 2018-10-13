module.exports = class Musique {
	


	static matchhelp (message){
		return message.content === '!video Musique help'

	}
	static actionhelp (message){
		message.reply("VOICI LES VIDÉOS DISPONIBLES \n - La grande porte de Kiev extrait tableaux d'une exposition : !video musique 6es1e1\n - Des gammes et des arpèges : !video musique 6es1pj\n - 5eme symphonie de Beethoven : !video musique 6es2e1\n - 9eme symphonie Beethoven : !video musique 6es2e2\n - La pince à linge : !video musique 6es2pj ")

	}
	static match6es1e1 (message){

		return message.content === '!video musique 6es1e1'
	}
	static action6es1e1 (message){
		return message.reply('https://youtu.be/rt3oFm2gn0I?t=69')
	}
	static match6es1pj (message){
		return message.content === '!video musique 6es1pj'
	}
	static action6es1jp (message){
		return message.reply('https://www.youtube.com/watch?v=1Vy4Q_XLOCM')
	}
	static match6es2e1 (message){
		return message.content === '!video musique 6es2e1'
	}
	static action6es2e1 (message){
		return message.reply('https://www.youtube.com/watch?v=K6ZXFFpdilY')

	}
	static match6es2e2 (message){
		return message.content === '!video musique 6es2e2'
	}
	static action6es2e2 (message){
		return message.reply('Lien Mort')

	}
	static match6es2pj (message){
		message.content === '!video Musique 6es2pj'
	}
	static action6es2jp (messagr){

		return message.reply('https://www.youtube.com/watch?v=HGRODV5WbRs')
	}
}


