const TelegramBot = require('node-telegram-bot-api');
const Discord = require('discord.js');
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
// replace the value below with the Telegram token you receive from @BotFather
const token = '1500257418:AAHHQeLAONLdzkpbqoFBlOkrJ_EhiBDsdW0';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


// Matches "/echo [whatever]"
bot.onText(/\/(.+)/, (msg, whatever) => {
  var args = whatever[1].replace("@KompeSiraBot", "").split(" ");
  const chatId = msg.chat.id;

  if (!client.commands.has(args[0])) return;

  try {
    client.commands.get(args[0]).execute(chatId, args,bot);
  } catch (error) {
    console.error(error);
  }



/*



  switch(args[0]) {
    case'ping':
      client.commands.get('ping').execute(message, args);
      break;
    case 'emoji':    
      var i = getRndInteger(0, values.emoji.length);
     bot.sendMessage(chatId,values.emoji[i]);
     break;
    case "riddle":
      var i = getRndInteger(0, values.riddle.length);
      bot.sendMessage(chatId,values.riddle[i]);
      break;
    case "comic":
      try {
        request("https://www.reddit.com/r/comics/top/.json?sort=top&t=week&limit=500", function(
          error,
          response,
          body
        ) {
          if (!error && response.statusCode == 200) {
            const comic= JSON.parse(body);
            var i = getRndInteger(0,comic.data.children.length);
            bot.sendMessage(chatId,comic.data.children[i].data.url);
          }
        });
      } catch (error) {
        console.log(error);
      }
      break;
    case "image":
      args.shift();
      if(args.length<2){
        bot.sendPhoto(chatId,
                "I Couldn't find a matching image."
            );
      } else if (args[0] == "random") {
            var randht = getRndInteger(100, 800);
            var randwdth = getRndInteger(100, 800);
            var link = "https://picsum.photos/" + randht + "/" + randwdth;
            bot.sendMessage(chatId,link);
    
    
    
    
    
        } else if (args[0] == "cat") {
            var randht = getRndInteger(100, 800);
            var randwdth = getRndInteger(100, 800);
            var link = "http://placekitten.com/" + randht + "/" + randwdth;
            bot.sendPhoto(chatId,link);
    
    
    
    
        } else {
          
          var term= args.join("+");
          
          image(msg,term,chatId);     
        }
        break;
    case "joke":
      try {
        request("https://sv443.net/jokeapi/v2/joke/Any?type=single", function(
          error,
          response,
          bodyjoke
        ) {
          if (!error && response.statusCode == 200) {
            const randjoke = JSON.parse(bodyjoke);
            bot.sendMessage(chatId,randjoke.joke);
          }
        });
      } catch (error) {
        console.log(error);
      }
      break;
      case"corona":
      const localurl = "https://hpb.health.gov.lk/api/get-current-statistical";
      request(localurl, function(error, responselk, bodylk) {
        let covidlk = JSON.parse(bodylk);
    
        const corona_str = `COVID-19 CASES SRI-LANKA\n☣️ Total cases: ${covidlk.data.local_total_cases}\n🔴 Active cases: ${covidlk.data.local_active_cases}\n♻️ Recovered: ${covidlk.data.local_recovered}\n⚰️ Dead: ${covidlk.data.local_deaths}\n➕ New Cases: ${covidlk.data.local_new_cases}`
          bot.sendMessage(chatId,corona_str)
      });
      break;
    default:
      return;
  }
  */
  // send back the matched "whatever" to the chat
//  bot.sendMessage(chatId,chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
/*
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, msg);
});*/