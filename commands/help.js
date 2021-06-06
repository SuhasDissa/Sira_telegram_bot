module.exports = {
	name: 'help',
	description: 'Ping!',
	async execute(chatId, args,bot) {
        bot.sendMessage(chatId,'*HELP*\n\n ඔබට පහත  commands බාවිතා කල හැකිය\n\n*Find images from the web* - /image [whatever]\n*Find riddles* - /riddle\n*Find jokes* - /joke\n*Get a random emoji* - /emoji\n*See if I\'m online* - /ping\n*Get funny memes* - /meme',{parse_mode : "Markdown"});
	},
};