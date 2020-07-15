const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "randomsub",
    category: "Random Generator",
    description: "Sub Weapon Random Generator",
  execute(message) {

    let toselect = ["Wsb_Bomb_Curling.png	","Wsb_Bomb_Piyo.png	","Wsb_Bomb_Quick.png		","Wsb_Bomb_Robo.png	","Wsb_Bomb_Splash.png	","Wsb_Bomb_Suction.png	","Wsb_Bomb_Tako.png	","Wsb_Flag.png	","Wsb_PointSensor.png	","Wsb_PoisonFog.png	","Wsb_Shield.png	","Wsb_Sprinkler.png	","Wsb_TimerTrap.png	"]
    let roll = toselect[Math.floor(Math.random() * toselect.length)]
const embed = new MessageEmbed()
.setAuthor('Random Sub Weapon')
.setDescription('Your sub weapon is:')
.setColor('8427fa')
.setThumbnail(`https://mirayxs.github.io/MirayAPI/sp2/subs/${roll}`)
message.channel.send(embed)
 }
}
