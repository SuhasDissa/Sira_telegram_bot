module.exports = {
	name: 'ping',
	description: 'Ping!',
	async execute(chatId, args,bot) {
        bot.sendMessage(chatId,'pong');
	},
};