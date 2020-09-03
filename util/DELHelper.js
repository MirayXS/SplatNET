// Discord API

const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require("../config/config.json")

// Node.JS using node-fetch

const fetch = require("node-fetch");
const botID = "720254825815736410"; // Discord Bot Application ID
const URL = "https://api.discordextremelist.xyz/v1/bot/${botID}";

// Request Headers

const reqHeaders = {
    "Content-Type": "application/json",
    "Authorization": "-"
}

// Request Body

const reqBody = {
    "guildCount": client.guilds.size // You will probably need to change this
}

// Functions

// Post Stats + Interval
function PostStatsDELInterval() {
    fetch(url, { method: "POST", headers: reqHeaders, body: reqBody})
  .then((res) => {
     return res.json()
})
setInterval(() => {
    fetch(url, { method: "POST", headers: reqHeaders, body: reqBody})
    .then((res) => {
       return res.json()
  })
}, 1800000);
console.log('[DEL PostStats] Client Guilds Size Posted! ['+client.guilds.cache.size+']');
}

// Post Stats
function PostStatsDEL() {
    fetch(url, { method: "POST", headers: reqHeaders, body: reqBody})
  .then((res) => {
     return res.json()
})
console.log('[DEL PostStats] Client Guilds Size Posted! ['+client.guilds.cache.size+']');
}

// Log In

client.login(token)

module.exports = {
  PostStatsDELInterval,
  PostStatsDEL
};