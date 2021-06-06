const values = require("../variables.js");


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
module.exports = {
	name: 'pp',
	description: 'Ping!',
	async execute(chatId, args,bot) {
        var p = getRndInteger(0, values.pp.length);
       bot.sendMessage(chatId,"your pee pee size:\n" + values.pp[p]);
	},
};