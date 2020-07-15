const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomweapon",
    category: "Random Generator",
    description: "Weapon Random Generator",
  execute(message) {

    const toselect = require('../../assets/json/weapon.json');
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
    const embed = new MessageEmbed()
    .setAuthor('Random Weapon')
    .setColor('8427fa')
    .setDescription('You must take:')
    .setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/weapons/`+roll)
    message.channel.send(embed)
 }
}
