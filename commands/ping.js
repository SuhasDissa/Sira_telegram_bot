module.exports = {
	name: 'ping',
	description: 'Ping!',
	async execute(msg, args,bot) {
        bot.sendMessage(msg.chat.id,'pong');
	},
};