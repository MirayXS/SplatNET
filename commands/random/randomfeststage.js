const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomfeststage",
    category: "Random Generator",
    description: "Splatfest Stage Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/feststages.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
            const embed = new MessageEmbed()
            .setAuthor('Random Splatfest Stage')
            .setColor('8427fa')
            .setDescription('You must select:')
            .setImage(`https://mirayxs.github.io/SplatHeX/feststages/`+roll)
            message.channel.send(embed)
 }
}
