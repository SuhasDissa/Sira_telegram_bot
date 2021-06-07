const request = require("request");
module.exports = {
    name: 'news',
    description: 'Ping!',
    async execute(msg, args, bot) {
        try {
            request("https://sinhala.news.lk/news?format=json", function (
                error,
                response,
                body
            ) {
                if (!error && response.statusCode == 200) {
                    const comic = JSON.parse(body);					
					for (x = 0; x < 10; x++) {
						title = comic.items[x].title
						desc = comic.items[x].fulltext
						
						message = "*" + title +"*\n\n"
						bot.sendMessage(msg.chat.id, message,{parse_mode : "Markdown"});
					}
                }
            });
        } catch (error) {
            console.log(error);
        }
		
    },
};