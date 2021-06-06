module.exports = {
	name: 'about',
	description: 'Ping!',
	async execute(chatId, args, bot) {
		bot.sendMessage(chatId,'*මේ Bot ගැන *\n\nමේ Bot ගොඩක් ප්‍රයෝජනවත් Bot කෙනෙක්. /help command එක මගින් ඔබට මෙ බොට් සහය දක්වන commands ලබාගත හැකිය. \nඅපි අලුත් commands නිතරම අතුලත් කරන්න උත්සාහ දරනවා.\nඑමනිසා අලුත් තොරතුරු /about හරහා ලබාගන්න.\n\n*අලුත් තොරතුරු :*දැන් මේ බොට් සින්හල කතාකරනවා*',{parse_mode : "Markdown"});
	},
};