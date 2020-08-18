// const { MessageEmbed }            = require('discord.js')
const { prefix }                  = require('../config/config.json')
// const { PostStatsDBL }            = require('../util/DBLHelper.js')

module.exports = (client, guild) => {
  /* const ownerID = '325605285731500033'
  let sicon = guild.iconURL()
  const embed = new MessageEmbed()
  .setTitle(`<:GuildCreate:643071891929694229>`)
  .addField(`Name`, `${guild.name}`, true)
  .addField(`ID`, `${guild.id}`, true)
  .addField(`Owner`, `<@${guild.owner.id}> | ${guild.owner.user.tag} (\`${guild.owner.id})\``)
  .setColor("#43B581")
  .setThumbnail(sicon)
  .addField(`Members`, `\`\`\`yaml
Total: ${guild.memberCount} \nBots: ${guild.members.cache.filter(m => m.user.bot).size} \nUsers: ${guild.members.cache.filter(m => !m.user.bot).size}\`\`\``)
  .setFooter(`Guild #${client.guilds.cache.size}`)
  .setTimestamp();
  client.users.cache.get(ownerID).send(embed)*/
	client.user.setActivity(`${prefix}help || GC: ${client.guilds.cache.size} || UC: ${client.users.cache.size}`, {type: "STREAMING", url: "https://twitch.tv/."});
  // PostStatsDBL()
}