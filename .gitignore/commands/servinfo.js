const Discord = require("discord.js");
const tool = require("./tool.js");

function servinfo(message, bot, prefix) {
    if (message.content.startsWith(prefix + "servinfo")) {
        const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle(`${message.guild.name}`)
        .setColor("#c2b5ff")
        .setDescription(`Bienvenue sur ${message.guild.name} ! :p`)
        .addField(`Date de création:`, `${message.guild.createdAt}`)
        .addField(`Créer par:`, `Akane`)
        .addField(`Tu nous as rejoins le:`, `${message.member.joinedAt}`)
        .addField(`Nombres de membres:`, `il y a ${message.guild.memberCount} Personnes sur le Discord`)
        .setThumbnail("https://cdn.discordapp.com/attachments/381766199341744129/442425642185654272/816.png")
        .setImage("https://cdn.discordapp.com/attachments/381766199341744129/442404726152364062/Sans_titre.png")
        .setTimestamp();
        message.channel.send(embed)
    }};

 module.exports = servinfo;
