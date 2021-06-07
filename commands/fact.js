const request = require("request");
module.exports = {
	name: 'fact',
	description: 'Ping!',
	async execute(msg, args,bot) {
		
		const urlfact = "https://uselessfacts.jsph.pl/random.json?language=en";

      request(urlfact, function(err, response, body) {
        let fact = JSON.parse(body);
        bot.sendMessage(msg.chat.id,fact.text);
      });

        
	},
};