const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randommemcake",
    category: "randomizers",
    description: "Memcake Randomizer",
  execute(message) {

    const toselect = require('../../assets/json/memcake.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
const embed = new MessageEmbed()
.setAuthor('Random memcake')
.setDescription('Your memcake is:')
.setColor('8427fa')
.setThumbnail(`https://mirayxs.github.io/SplatHeX/octo/${roll}`)
message.channel.send(embed)
 }
}
