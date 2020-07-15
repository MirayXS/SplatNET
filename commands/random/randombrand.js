const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randombrand",
    category: "Random Generator",
    description: "Brand Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/brand.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
const embed = new MessageEmbed()
.setAuthor('Random Brand')
.setDescription('Your brand is:')
.setColor('8427fa')
.setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/brands/${roll}`)
message.channel.send(embed)
 }
}
