const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomstage",
    category: "randomizers",
    description: "Stage Randomizer",
  execute(message) {

            let roll = [Math.floor(Math.random() * 22)]
            const embed = new MessageEmbed()
            .setAuthor('Random Stage')
            .setColor('8427fa')
            .setDescription('You must select:')
            .setImage(`https://mirayxs.github.io/MirayAPI/sp2/stages/`+roll+'.jpg')
            message.channel.send(embed)
 }
}
