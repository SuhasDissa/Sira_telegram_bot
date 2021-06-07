const request = require("request");
module.exports = {
	name: 'joke',
	description: 'Ping!',
	async execute(msg, args,bot) {
		try {
        request("https://sv443.net/jokeapi/v2/joke/Any?type=single", function(
          error,
          response,
          bodyjoke
        ) {
          if (!error && response.statusCode == 200) {
            const randjoke = JSON.parse(bodyjoke);
			bot.sendMessage(msg.chat.id,randjoke.joke);
          }
        });
      } catch (error) {
        console.log(error);
      }
	  },
};