const values = require("../variables.js");


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
module.exports = {
	name: 'pp',
	description: 'Ping!',
	async execute(msg, args,bot) {
        var p = getRndInteger(0, values.pp.length);
       bot.sendMessage(msg.chat.id, msg.from.first_name + "\'s pee pee size:\n" + values.pp[p]);
	},
};