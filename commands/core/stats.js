const { MessageEmbed } = require('discord.js');
const { version} = require('../../package.json');
const { heapUsed, heapTotal } = process.memoryUsage()
const { duration } = require('moment');
const momentDurationFormatSetup = require('moment-duration-format');
const { release, cpus } = require('os');
const { timeZoneConvert, commatize, fromNow, roundTo, addBlankSpace } = require('../../helper.js')

module.exports = {
    name: "stats",
    category: "core",
    description: "Returns bot stats",
  execute(message) {

    let received = 0
    message.client.guilds.cache.each( guild => {
      guild.channels.cache.each( channel => {
        if (channel.type !== 'text') return
        received += channel.messages.cache.filter(m => m.author.id !== message.client.user.id).size
      })
    })

    let sent = 0
    message.client.guilds.cache.each( guild => {
      guild.channels.cache.each( channel => {
        if (channel.type !== 'text') return
        sent += channel.messages.cache.filter(m => m.author.id === message.client.user.id).size
      })
    })

    const embed = new MessageEmbed()
    .setAuthor(`SplatNET v${version}`, message.client.user.displayAvatarURL({format:'png',dynamic:true}))
    .setColor('GREY')
    .setThumbnail(message.client.user.displayAvatarURL({format:'png',dynamic:true}))
    .setFooter('Made with ❤ by XxMirayxX21#3561 - (Miray)')
    .addField(`${addBlankSpace(2)}\Discord API`,`•\u2000\**Server Count**:${addBlankSpace(1)}${commatize(message.client.guilds.cache.size)}\n•\u2000\**Channel Count**:${addBlankSpace(1)}${commatize(message.client.channels.cache.size)}\n•\u2000\**User Count**:${addBlankSpace(1)}${commatize(message.client.users.cache.size)}`, true)
    .addField(`${addBlankSpace(2)}System`,`•\u2000\**OS**: ${addBlankSpace(1)}${process.platform}\n•\u2000\**Version**: ${release()}\n•\u2000\**Uptime**: ${addBlankSpace(1)}${duration(message.client.uptime, 'milliseconds').format('D [days] H [hours] m [minutes] s [seconds]')}\n•\u2000\**Node**: ${addBlankSpace(1)}${process.version}\n•\u2000\**Memory**:${addBlankSpace(1)}${heapUsed / 1000 < 999 ? roundTo(heapUsed,2)+'KiB' : roundTo(heapUsed / 1000000,2) + 'MiB'} [${roundTo(heapUsed / heapTotal * 100,2)}%]\n•\u2000\**CPU**:${addBlankSpace(1)}${(cpus()[0].speed / 1000).toFixed(2)} GHz`,true)
    .addField(`${addBlankSpace(2)}Miscellaneous`,`•\u2000\**Created**: ${timeZoneConvert(message.client.user.createdAt)}, ${fromNow(message.client.user.createdAt)}\n•\u2000\**Commands**: ${message.client.commands.size}`)
    .addField(`\u200B`,`[Github Repository](https://github.com/MirayXS/SplatNET)`)
    message.channel.send(embed)
}
}
