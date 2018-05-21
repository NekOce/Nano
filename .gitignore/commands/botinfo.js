const Discord = require("discord.js");
const tool = require("./tool.js");

function botinfo(message, bot, prefix) {
    if (message.content.startsWith(prefix + "botinfo")) {
        const embed = new Discord.RichEmbed()
        .setTitle(`- Nano -`)
        .setColor("#ff05f2")
        .setDescription(`Mon prefix ")" | Je ne suis pas une robot :'(`)
        .addField(`Date de création:`, `${bot.user.createdAt}`)
        .addField(`Créer par:`, `Akane`)
        .addField(`Waifu's Heaven`, `Serveur Officiel du bot`)
        .setThumbnail("https://cdn.discordapp.com/attachments/381766199341744129/442402960115367946/images.png");
        message.channel.send(embed)
    }};

 module.exports = botinfo;
