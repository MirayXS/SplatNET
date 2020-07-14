const { MessageEmbed } = require('discord.js')
const request = require('superagent')

module.exports = {
    name: "nextsalmonrun",
    category: "general",
    description: "Displays upcoming Splatoon 2 Salmon Run Map/Weapons",
  execute(message) {

request.get('https://splatoon2.ink/data/coop-schedules.json')
    .end((err, response) => {
      request.get('https://splatoon2.ink/data/timeline.json')
      .end((err, responseTimeline) => {
  const embed = new MessageEmbed()
  .setTitle("Upcoming Salmon Run")
  .addField('Map', response.body.details[1].stage.name)
  .addField('Weapons', response.body.details[1].weapons[0].weapon.name+'\n'+response.body.details[1].weapons[1].weapon.name+'\n'+response.body.details[1].weapons[2].weapon.name+'\n'+response.body.details[1].weapons[3].weapon.name)
  .setImage('https://splatoon2.ink/assets/splatnet/'+response.body.details[1].stage.image)
  .setThumbnail('https://splatoon2.ink/assets/splatnet'+responseTimeline.body.coop.reward_gear.gear.image)
  .setColor('ff8633')
message.channel.send(embed);
  })
})
 }
}
