const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomclothes",
    category: "Random Generator",
    description: "Clothes Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/clothes.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
const embed = new MessageEmbed()
.setAuthor('Random Clothes')
.setDescription('Your Clothes are:')
.setColor('8427fa')
.setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/body/${roll}`)
message.channel.send(embed)
 }
}
