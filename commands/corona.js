const request = require("request");
module.exports = {
	name: 'corona',
	description: 'Ping!',
	async execute(chatId, args,bot) {
        const localurl = "https://hpb.health.gov.lk/api/get-current-statistical";
    request(localurl, function(error, responselk, bodylk) {
      let covidlk = JSON.parse(bodylk);
  
      const corona_str = `ශ්‍රීලංකාවේ COVID-19 තතු \n☣️ මුලු ආසාදිතයින් : ${covidlk.data.local_total_cases}\n🔴 ප්‍රතිකාර ලබන ආසාදිතයින් : ${covidlk.data.local_active_cases}\n♻️ සුව වූවන් : ${covidlk.data.local_recovered}\n⚰️ මියගිය අය ගනන: ${covidlk.data.local_deaths}\n➕ අලුතින් හඳුනා ගත්  ආසාදිතයින් : ${covidlk.data.local_new_cases}`
        bot.sendMessage(chatId,corona_str)
    });
	},
};

