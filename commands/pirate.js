const request = require("request");
module.exports = {
	name: 'pirate',
	description: 'Ping!',
	async execute(msg, args,bot) {
        
    
  args.shift();
        if (args.length < 1) {
            bot.sendMessage(msg.chat.id,"Please add a phrase,\nex: /pirate Hello sir! my mother goes with me to the ocean."
            );
        } else {

            var term = args.join("%20");
			var term_n = encodeURI(term);
			var url = "https://api.funtranslations.com/translate/pirate.json?text="+term_n;
			try {
            request(url, function(error, responselk, body) {
      let parsed = JSON.parse(body);
	  var encoded =parsed.contents.translated;
	  var decoded = decodeURI(encoded);
            bot.sendMessage(msg.chat.id,decoded)
			});
        } catch (error) {
            bot.sendMessage(msg.chat.id,"translate failed")
        }
		}

    
	},
};