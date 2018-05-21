const Discord = require("discord.js");
const tool = require("./tool.js");

function kick(message, bot, prefix) {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];

    if (cmd === `${prefix}report`) {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send({embed: {
            description: `L'utilisateur est introuvable, je suis navrée..`,
        }})
        let reason = args.join(" ").slice(22);
        
        let reportembed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle(`- Report -`)
        .setColor("#fc7500")
        .setThumbnail("https://cdn.discordapp.com/attachments/438379829365178375/442364148441939969/31718b1442e2f5dbd5d17327b35ab1b7.png")
        .setDescription(`Le report de ${rUser} à bien était effectuer, ${rUser.id}`)
        .setFooter(`Merci de votre aide au seins de la communauté. :)`)
        .setTimestamp();
        message.channel.send(reportembed);

        const admin = bot.channels.get('437222287943401473');
        let reportembed2 = new Discord.RichEmbed()
        .setTitle(`- Report -`)
        .setColor("#fc7500")
        .setThumbnail("https://cdn.discordapp.com/attachments/438379829365178375/442364148441939969/31718b1442e2f5dbd5d17327b35ab1b7.png")
        .setDescription(`${rUser} a était report,${reason}.`)
        .setAuthor(`${message.author}`)
        .setFooter(`reporter depuis le salon ${message.channel} à ${message.createdAt}.`)
        admin.send(reportembed2);
        return;
       }}


        module.exports = kick;
