const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomfestcolor",
    category: "Random Generator",
    description: "Splatfest Color Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/festcolors.json')
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
            const embed = new MessageEmbed()
            .setAuthor('Random Splatfest Stage')
            .setColor('8427fa')
            .setDescription('You must select:')
            .setImage(`https://mirayxs.github.io/SplatHeX/colors/`+roll)
            message.channel.send(embed)
 }
}
