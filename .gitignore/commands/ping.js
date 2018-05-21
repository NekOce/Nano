const Discord = require("discord.js");

function ping(message, bot, prefix) {
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send({embed : { 
            description: ('Vous avez ' +  `${message.createdTimestamp - Date.now()}` + ' ms` de latence avec le serveur ^^'),
        }})
       }
    }

module.exports = ping;
