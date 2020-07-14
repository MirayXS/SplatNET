const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randommode",
    category: "randomizers",
    description: "Mode Randomizer",
  execute(message) {

    const toselect = ['Defense_zones.png', 'Expedition_risquee.png', 'Mission_Bazookarpe.png', 'Pluie_de_palourdes.png']
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
    const embed = new MessageEmbed()
    .setAuthor('Random Mode')
    .setColor('8427fa')
    .setDescription('This is the random mode you got:')
    .setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/modes/`+roll)
    message.channel.send(embed)
 }
}
