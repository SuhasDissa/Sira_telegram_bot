const request = require("request");
const cheerio = require("cheerio");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function image(search, chatId,bot) {

    const options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
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

        const links = $("div.image a.link img");

        const urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("src"));
        if (!urls.length) {
			bot.sendMessage(chatId,"No image found"
            );
        }
        try {
            bot.sendPhoto(chatId, urls[getRndInteger(0, urls.length)]);
        } catch (error) {
            console.error(error);
        }

    });

}
module.exports = {
    name: 'image',
    description: 'Ping!',
    async execute(chatId, args,bot) {
        args.shift();
        if (args.length < 1) {
            bot.sendMessage(chatId,"Please add a search phrase,\nex: /image cute dog"
            );
        } else {

            var term = args.join("+");
			var encoded = encodeURI(term);

            image(encoded, chatId,bot);
        }
    },
};