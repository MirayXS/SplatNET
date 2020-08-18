const { prefix }                  = require('../config/config.json')

module.exports = (client) => {

    client.user.setActivity(`${prefix}help || GC: ${client.guilds.cache.size} || UC: ${client.users.cache.size}`, {type: "STREAMING", url: "https://twitch.tv/."});

}