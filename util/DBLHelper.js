const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require("../config/config.json")
const DBL = require("dblapi.js");
const dbl = new DBL('-', client);

function PostStatsDBLInterval() {
dbl.postStats(client.guilds.size);
setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
dbl.on('posted', () => {
  console.log('[DBL PostStats] Client Guilds Size Posted! ['+client.guilds.cache.size+']');
})
dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
}

function PostStatsDBL() {
dbl.postStats(client.guilds.size);
dbl.on('posted', () => {
  console.log('[DBL PostStats] Client Guilds Size Posted! ['+client.guilds.cache.size+']');
})
dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
}

function GetStatsDBL() {
dbl.getStats('720254825815736410').then(stats => {
    console.log(stats)
});
dbl.getBot('720254825815736410').then(bot => {
    console.log(`Discord Bot Application Invite          : ${bot.invite}`)
    console.log(`Support Server                          : https://discord.gg/${bot.support}`)
    console.log(`GitHub Repository                       : ${bot.github}`)
    console.log(`Discord Bot Application Description     : ${bot.shortdesc}`)
    console.log(`Discord Bot Application User/ Client ID : ${bot.id}`)
    console.log(`Discord Bot Application Username        : ${bot.username}#${bot.discriminator}`)
})
}

client.login(token)

module.exports = {
  PostStatsDBLInterval,
  PostStatsDBL,
  GetStatsDBL
};