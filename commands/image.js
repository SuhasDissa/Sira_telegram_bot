const request = require("request");
const cheerio = require("cheerio");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function image(search, msg,bot) {

    const options = {
        url: "https://www.bing.com/images/search?q=" + search,
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

        const links = $("div.imgpt a.iusc");

        const urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
			bot.sendMessage(msg.chat.id,"Error");
        }
        try {
            bot.sendPhoto(msg.chat.id, urls[getRndInteger(0, urls.length)]);
        } catch (error) {
            console.error(error);
        }

    });

}
module.exports = {
    name: 'image',
    description: 'Ping!',
    async execute(msg, args,bot) {
        args.shift();
        if (args.length < 1) {
            bot.sendMessage(msg.chat.id,"Please add a search phrase,\nex: /image cute dog"
            );
        } else {

            var term = args.join("+");
			var encoded = encodeURI(term);
            image(encoded,msg,bot);
        }
    },
};