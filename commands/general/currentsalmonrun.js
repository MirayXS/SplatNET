const { MessageEmbed } = require('discord.js')
const request = require('superagent')

module.exports = {
    name: "currentsalmonrun",
    category: "general",
    description: "Displays current Splatoon 2 Salmon Run Map/Weapons",
  execute(message) {

request.get('https://splatoon2.ink/data/coop-schedules.json').set('User-Agent', "SplatNET/5.2.0 (Discord Author Contact: XxMirayxX21#3561) [Repository: github.com/MirayXS/SplatNET]")
    .end((errRes, response) => {
      request.get('https://splatoon2.ink/data/timeline.json').set('User-Agent', "SplatNET/5.2.0 (Discord Author Contact: XxMirayxX21#3561) [Repository: github.com/MirayXS/SplatNET]")
    .end((errTimeline, responseTimeline) => {
  const embed = new MessageEmbed()
  .setTitle("Current Salmon Run")
  .addField('Map', response.body.details[0].stage.name)
  .addField('Weapons', response.body.details[0].weapons[0].weapon.name+'\n'+response.body.details[0].weapons[1].weapon.name+'\n'+response.body.details[0].weapons[2].weapon.name+'\n'+response.body.details[0].weapons[3].weapon.name)
  .setImage('https://splatoon2.ink/assets/splatnet/'+response.body.details[0].stage.image)
  .setThumbnail('https://splatoon2.ink/assets/splatnet'+responseTimeline.body.coop.reward_gear.gear.image)
  .setColor('ff8633')
message.channel.send(embed);
  })
})
 }
}
