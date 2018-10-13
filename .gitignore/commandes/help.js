module.exports = class Help {

	static match (message){

		return message.content === '!help'
	}
	static action(message){

		message.channel.send("!ping retourne Pong !\n!ent renvoie lURL de l'E.N.T.\n!google [une recherche] renvoie un lien pour la recherche souhaité\n!Tcreate [nom de salon] créer un salon textuel du nom souhaité\n!Vcreate [nom de salon] créer un salon vocal du nom souhaité\n!video [matière] [vidéo] lance une vidéo (voire plus sur !video help)")
	}
}