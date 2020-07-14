const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "sp2code",
    category: "randomizers",
    description: "Generates a random private session code (DMs)",
  execute(message) {

    var first = Math.floor(Math.random() * 9)
    var second = Math.floor(Math.random() * 9)
    var third = Math.floor(Math.random() * 9)
    var fourth = Math.floor(Math.random() * 9)

    const embed = new MessageEmbed()
    .setAuthor('Splatoon Private Code')
    .setThumbnail('https://cdn.discordapp.com/attachments/619605360260546560/665888484409737226/code.png')
    .addField('\u200B', '**' + first + second + third + fourth + '**')
    message.channel.send('Generating session code. Check your Private Messages!')
    message.author.send(embed)
 }
}
