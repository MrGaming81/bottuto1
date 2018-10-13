st Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commandes/google')
const Pong = require('./commandes/pong')
const ENT = require('./commandes/ent')
const Help = require('./commandes/help')
const Image = require('./commandes/image')
const createChannel = require('./commandes/createChannel')
const createChannelV = require('./commandes/createChannelV')
const Video = require('./commandes/video')
const Musique = require('./commandes/video/musique')
const Eps = require('./commandes/video/eps')




var prefix = ("bot")


bot.on('ready', function () {

	//bot.user.setAvatar('./koala.png')
	//.then(() => console.log('Avatar mis en place avec succès'))
	//.catch(console.error)

	
	bot.user.setActivity("!help pour de l'aide").catch(console.error)
})

bot.on('guildMemberAdd', function (member){
	

	member.createDM().then(function (channel){

		return channel.send('Bienvenu sur le channel' +_member.displayName)


	}).catch(console.error)
})


bot.on('message', function (message) {
	if (Google.match(message)){

		return Google.action(message)
	}
	if (Pong.match(message)){

		return Pong.action(message)
	}
	if (ENT.match(message)){

		return ENT.action(message)
	}
	if (Help.match(message)){

		return Help.action(message)
	}
	if (Image.match(message)){

		return Image.action(message)
	}
	if (createChannel.match(message)){

		return createChannel.action(message)
	}
	if (createChannelV.match(message)){

		return createChannelV.action(message)
	}
	
	if (Video.matchhelp(message)){
		return Video.actionhelp(message)
	}
	if (Musique.matchhelp(message)){
		return Musique.actionhelp(message)
	}
	if (Musique.match6es1e1(message)){
		return Musique.action6es1e1(message)
	}
	if (Musique.match6es1pj(message)){
		return Musique.action6es1jp(message)
	}
	if (Musique.match6es2e1(message)){
		return Musique.action6es2e1(message)
	}
	if (Musique.match6es2e2(message)){
		return Musique.action6es2e2(message)
	}
	if (Musique.match6es2pj(message)){
		return Musique.action6es2jp(message)
	}
	if (Eps.match(message)){
		return Eps.action(message)
	}
	if (Eps.match1(message)){
		return Eps.action1(message)
	}
	if (Eps.match2(message)){
		return Eps.action2(message)
	}
	if (Eps.match3(message)){
		return Eps.action3(message)
	}



	




})

bot.login('NDc1MjUyOTM2MzE5MTcyNjE5.DqMj_A.jHex4p4DVRvSqgYBAPfgHeM9wVM')