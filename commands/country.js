const request = require("request");
module.exports = {
	name: 'country',
	description: 'Ping!',
	async execute(chatId, args,bot) {
		
		if(!args[0]) return msg.channel.send("Please tell me a country code");
  var url = "https://restcountries.eu/rest/v2/name/" + args.join("%20");
  

  request(url, function(err, response, body) {
    let data = JSON.parse(body);
    
    if(!data[0]) return msg.channel.send("Error");
	
	try {
            var messsage = `Country code: ${data[0].alpha2Code}\nCapital: ${data[0].capital}\nRegion: ${data[0].region}\nPopulation: ${data[0].population}\nArea: ${data[0].area} Sq km\nTimezone: ${data[0].timezones[0]}\nCurrency: ${data[0].currencies[0].name}\nCurrency Code: ${data[0].currencies[0].code}\nIDD Code: +${data[0].callingCodes[0]}`
			
			bot.sendMessage(chatId,messsage);
        } catch (error) {
            console.error(error);
        }
  });
  },
};