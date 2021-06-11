const TelegramBot = require('node-telegram-bot-api');
const Discord = require('discord.js');
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

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
    client.commands.get(args[0]).execute(msg, args,bot);
  } catch (error) {
    console.error(error);
  }

});