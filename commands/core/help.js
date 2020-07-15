const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../config/config.json')

module.exports = {
    name: "help",
    category: "core",
    description: "Displays Base Help with all my commands",
  execute(message) {

    const embed = new MessageEmbed()
    .setAuthor(message.client.user.username, message.client.user.displayAvatarURL())
    .setColor('45ddc0')
    .setThumbnail(message.client.user.displayAvatarURL())
    .setFooter(`Created with ❤ by XxMirayxX21#3561 - (Miray)`)
    .setDescription(`Hi! I'm **${message.client.user.username}** and I am a bot based\n\on splatoon <Specially Splatoon 2, v5.2.0>\n\All my commands start with the prefix \`${prefix}\`!`)
    .addField('\u200B', `\`\`\`asciidoc
• Discord.js  :: v${require("discord.js").version}
• Node        :: ${process.version}
• SplatNET    :: v5.2.0\`\`\``)
    .addField('\u200B', `SplatNET [Github Repository](https://github.com/MirayXS/SplatNET) | SplatNET [Website](https://mirayxs.github.io/SplatNET)`)

    message.channel.send(embed);

    const embedHelp = new MessageEmbed()
    .setTitle('Base Help - ' + message.client.user.username)
    .setColor('7289da')
    .setFooter(`Created with ❤ by XxMirayxX21#3561 - (Miray)`)
    .setDescription(`__**•• General / Information Commands - ${message.client.user.username} ••**__\n\n**${prefix}currentmaps :** Displays the current Splatoon 2 Gamemodes/Maps\n**${prefix}nextmaps :** Displays the upcoming Splatoon 2 Gamemodes/Maps\n**${prefix}currentsalmonrun :** Displays current Splatoon 2 Salmon Run Map/Weapons\n**${prefix}nextsalmonrun :** Displays upcoming Splatoon 2 Salmon Run Map/Weapons\n\n__**•• Core Commands - ${message.client.user.username} ••**__\n\n**${prefix}help :** Displays Base Help with all my commands\n**${prefix}ping :** Returns the bot's average ping\n**${prefix}stats :** Returns bot stats\n\n__**•• Random Generator Commands - ${message.client.user.username} ••**__\n\n**${prefix}sp2code :** Generates a random private session code (DMs)\n**${prefix}randommode :** Mode Random Generator\n**${prefix}randoweapon :** Weapon Random Generator\n**${prefix}randomstage :** Stage Random Generator\n**${prefix}randomsub :** Sub Weapon Random Generator\n**${prefix}randomskill :** Skill Random Generator\n**${prefix}randomshoes :** Shoes Random Generator\n**${prefix}randombrand :** Brand Random Generator\n**${prefix}randomclothes :** Clothes Random Generator\n**${prefix}randomheadgear :** Head Gear Random Generator\n**${prefix}randommemcake :** Memcake Random Generator\n**${prefix}randomfeststage :** Splatfest Stage Random Generator\n**${prefix}randomfestcolor :** Splatfest Color Random Generator`)

    message.channel.send(embedHelp);
 }
}
