const values = require("../variables.js");
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
module.exports = {
	name: 'future',
	description: 'Ping!',
	async execute(chatId, args,bot) {
		var i = getRndInteger(0, values.future.length);
        bot.sendMessage(chatId,values.future[i]);
	},
};