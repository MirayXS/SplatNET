const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomheadgear",
    category: "Random Generator",
    description: "Head Gear Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/headgear.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
const embed = new MessageEmbed()
.setAuthor('Random Head Gear')
.setDescription('Your head gear is:')
.setColor('8427fa')
.setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/head/${roll}`)
message.channel.send(embed)
 }
}
