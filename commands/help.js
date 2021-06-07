module.exports = {
	name: 'help',
	description: 'Ping!',
	async execute(msg, args,bot) {
        bot.sendMessage(msg.chat.id,'*HELP*\n\n ඔබට පහත  commands බාවිතා කල හැකිය\n\n*Get bot info* - /about\n*Get covid-19 updates* - /corona\n*Find images from the web(not working rn)* - /image [search term]\n*Find riddles* - /riddle\n*Find jokes* - /joke\n*Get a random emoji* - /emoji\n*Find Did you know Fact* - /fact\n*See if I\'m online* - /ping\n*Get funny memes* - /meme\n*Get country info* - /country\n*For fun* - /pp',{parse_mode : "Markdown"});
	},
};