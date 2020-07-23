/*!
 * SplatNET v5.2.0 (https://github.com/MirayXS/SplatNET)
 * Made by XxMirayxX21#3561 - (Miray) (https://github.com/MirayXS)
 * Licensed under GPL-3.0 (https://github.com/MirayXS/SplatNET/LICENSE)
 */

//-----------------------Require Package for logging-------------------------//

const { green, yellow, red, magenta, cyan } = require('chalk')
chalk                                       = require("chalk")
const gradient                              = require("gradient-string")

//------------------------------System Messages------------------------------//

console.clear();

var ASCIIHeader = [
	"   _____       _       _   _   _ ______ _______ ",
	"  / ____|     | |     | | | \\ | |  ____|__   __|",
	" | (___  _ __ | | __ _| |_|  \\| | |__     | |   ",
	"  \\___ \\| '_ \\| |/ _` | __| . ` |  __|    | |   ",
	"  ____) | |_) | | (_| | |_| |\\  | |____   | |   ",
	" |_____/| .__/|_|\\__,_|\\__|_| \\_|______|  |_|   ",
	"        | |                                     ",
	"        |_|                                     "

].join("\n");

console.log([
	// Print the header
	chalk.bold(gradient("#8EA6DB", "#6A54C9")(ASCIIHeader)),
	chalk.hex("#6A54C9").bold.italic("SplatNET is a Powerful Splatoon Discord Bot.\n\n"),
].join("\n"));

console.log(cyan('\n\n<----------- Booting up SplatNET ----------->'))
console.log(`Upon booting, you might notice some of these log headers:`)
//console.log(`${yellow('[WARN]')} - Warn about some errors in the code`)
console.log(`${green('[SUCCESS]')} - Alerts that a process has been successfully executed.`)
console.log(`${red('[FAIL]')}    - Alerts about a fatal error that might make the bot dysfunctional.`)
console.log(`${magenta('[DEBUG]')}   - Appears when debugging mode is on - Alert when a promise is being rejected which are not caught.`)
console.log(`${chalk.bold(gradient("#ff5700", "#e74c3c")(`[ERROR]`))}   - Alerts about commands error`)
console.log(`${chalk.bold(gradient("#8EA6DB", "#6A54C9")(`[INFO]`))}    - Information about the process`)
console.log(cyan('--------------------------------------------\n\n'))

//------------------------Require the Necessary Packages---------------------//

const { Client, Collection } = require('discord.js')
const fs                     = require('fs');
const { prefix, token }      = require('./config/config.json')

//------------------------------Initialize Client----------------------------//

const client = new Client()

//-------------------------Add necessary Collections-------------------------//

client.commands = new Collection();

//--------------------------Load Commands to Client--------------------------//

fs.readdirSync("./commands").forEach((dir) => {
    // Imports the different commands for each file
    fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith(".js")).forEach((file) => {
        // Include the file to be able to operate on it
        const Command = require(`./commands/${dir}/${file}`);
        // Parse the file to retrieve the assigned name.
		client.commands.set(Command.name, Command);
    });
});

console.log(chalk.bold(gradient("#8EA6DB", "#6A54C9")('<----------- LOAD COMMANDS TO CLIENT ----------->')))
console.log(`${chalk.bold(gradient("#8EA6DB", "#6A54C9")(`[INFO]`))} : General           commands were successfully loaded to Client`)
console.log(`${chalk.bold(gradient("#8EA6DB", "#6A54C9")(`[INFO]`))} : Core              commands were successfully loaded to Client`)
console.log(`${chalk.bold(gradient("#8EA6DB", "#6A54C9")(`[INFO]`))} : Random Generator  commands were successfully loaded to Client`)
console.log(chalk.bold(gradient("#8EA6DB", "#6A54C9")('-----------------------------------------------\n\n')))

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(chalk.bold(gradient("#ff5700", "#e74c3c")(`[ERROR]`)) + ' : ' + error);
		console.error(error)
		message.reply('there was an error trying to execute that command!\n\n```'+error+'```');
	}
});

//--------------------------------Debugging----------------------------------//

process.on('unhandledRejection', err => {
	console.error(`${magenta('[DEBUG]')} : ${err}`)
  })

//------------------------Log In---------------------//


client.login(token).catch( (err) => {

  if (err.name === 'Error [TOKEN_INVALID]') console.log(`${red('[FAIL]')} : The token you provided is not valid!`)

  else if (err.name === 'FetchError') console.log(`${red('[FAIL]')} : Could not connect to internet. Please secure a stable connection.`)

  else if (err.name === 'AbortError') console.log(`${red('[FAIL]')} : A request took longer than 15 seconds, and was aborted to not lock up the request handler.`)

  else console.log(`${red('[FAIL]')} : ${err.name}: ${err.message}`)

  process.exit()

})

client.once("ready", () =>{
	console.log(green('<----------- NEW SESSION ----------->'))
	console.log(`${green('[SUCCESS]')} : Logged in as ${cyan(`${client.user.username}`)}`)
	console.log(`${green('[SUCCESS]')} : Logged in as ${cyan(`User ID: ${client.user.id}`)}`)
	console.log(green('-------------------------------------\n\n'))
	client.user.setActivity(`${prefix}help || GC: ${client.guilds.cache.size} || UC: ${client.users.cache.size}`, {type: "STREAMING", url: "https://twitch.tv/."});
	//client.user.setActivity(`${RPres}`, {type: "STREAMING", url: RUrl});
});