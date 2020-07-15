const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomskill",
    category: "Random Generator",
    description: "Skill Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/skills.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
const embed = new MessageEmbed()
.setAuthor('Random Skill')
.setDescription('Your skill is:')
.setColor('8427fa')
.setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/skills/${roll}`)
message.channel.send(embed)
 }
}
