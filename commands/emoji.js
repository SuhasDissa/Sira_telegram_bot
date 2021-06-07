function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const values = require("../variables.js");
  module.exports = {
	name: 'emoji',
	description: 'Ping!',
	async execute(msg, args,bot) {
        var i = getRndInteger(0, values.emoji.length);
        bot.sendMessage(msg.chat.id,values.emoji[i]);
	},
};