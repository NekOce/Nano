const Discord = require("discord.js");
const tool = require("./tool.js");

function ban(message, bot, prefix) {
if (message.content.startsWith(prefix + "ban")) {

    if (message.channel.type === "dm") return;
      if (!message.member.hasPermission("BAN_MEMBERS")) {
    return message.channel.send({embed: {
        title: `${message.author.username}`,
        description: `Tu n'as pas la permission de bannir d'autres utilisateurs...`, 
    }});
  }
  let memberToBan = message.mentions.members.first();
    if ( memberToBan && memberToBan.bannable && (message.member.highestRole.calculatedPosition >
      memberToBan.highestRole.calculatedPosition || message.guild.ownerID == message.author.id)) {
    let reason = tool.parseOptionArg("raison", message.content);
    let days = parseInt(tool.parseOptionArg("days", message.content));
    let banOption = { days: days ? days : 0, reason: reason ? reason : "none"};
    memberToBan.ban(banOption);
    const channel = message.guild.channels.find("name", "general");
if (!channel) return; 
    const embed = new Discord.RichEmbed()
        .setTitle(`${memberToBan.user.username}`)
        .setColor("#f44242")
        .setDescription(`Cette personne vient d'être bannie à cause de son comportement !`)
        .setThumbnail(memberToBan.user.avatarURL)
        .setFooter(`Par ${message.author.username}`)
        .setTimestamp();  
        channel.send(embed)
  }
}
}


module.exports = ban;
