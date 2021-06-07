const values = require("../variables.js");
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
module.exports = {
	name: 'future',
	description: 'Ping!',
	async execute(msg, args,bot) {
		var i = getRndInteger(0, values.future.length);
        bot.sendMessage(msg.chat.id,values.future[i]);
	},
};