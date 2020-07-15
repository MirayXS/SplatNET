const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomshoes",
    category: "Random Generator",
    description: "Shoes Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/shoes.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
const embed = new MessageEmbed()
.setAuthor('Random Shoes')
.setDescription('Your shoes are:')
.setColor('8427fa')
.setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/shoes/${roll}`)
message.channel.send(embed)
 }
}
