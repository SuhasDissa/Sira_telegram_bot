const request = require("request");
const cheerio = require("cheerio");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /*
function fetchJoke(chatId,bot) {

    const options = {
        url: "http://www.joke.lk/search/label/Sinhala",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);

        const links = $("/<a.*<img.*data-original.*src="(.*)"><\/a>/");
		
		//var jokes = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("src"));

        var jokes = new Array(links.length);
        if (!jokes.length) {
			bot.sendMessage(chatId,"No image found"
            );
        }
        try {
            bot.sendPhoto(chatId, jokes[getRndInteger(0, jokes.length)]);
        } catch (error) {
            console.error(error);
        }

    });

}
*/

module.exports = {
	name: 'joke',
	description: 'Ping!',
	async execute(chatId, args,bot) {
        //fetchJoke(chatId,bot);
		bot.sendMessage(chatId,"This command is disabled"
            );

	},
};

