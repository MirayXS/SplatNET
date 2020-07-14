const { MessageEmbed } = require('discord.js')
const request = require('superagent')

module.exports = {
    name: "nextmaps",
    category: "general",
    description: "Displays the upcoming Splatoon 2 Gamemodes/Maps",
  execute(message) {

request.get('https://splatoon2.ink/data/schedules.json')
    .end((err, response) => {
  const embed = new MessageEmbed()
  .setTitle("Upcoming Splatoon 2 Maps")
  .addField('<:turfwar:730916510264066059> Turf War', `${response.body.regular[1].stage_a.name}\n${response.body.regular[1].stage_b.name}`, true)
  .addField('<:ranked:730916510133911552> Ranked: ' + response.body.gachi[1].rule.name, `${response.body.gachi[1].stage_a.name}\n${response.body.gachi[1].stage_b.name}`, true)
  .addField('<:league:730916510280712202> League: ' + response.body.league[1].rule.name, `${response.body.league[1].stage_a.name}\n${response.body.league[1].stage_b.name}`, true)
  .setColor(`#3fff33`)
message.channel.send(embed);
  })
 }
}
