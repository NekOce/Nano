const Discord = require("discord.js");

function clear(message, bot, prefix) {
if(message.content.startsWith(prefix + "clear")){
      let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES");
  
      if (!yourole) {
          const embed2 = new Discord.RichEmbed() 
          .setColor("#a8170d")
          .setDescription("Vous n'avez pas les droits pour supprimer ses messages ^^'")
          .setThumbnail()
          message.channel.send(embed2);
 return; 
                    }

      var suppression = message.content.substr(7);
      if (suppression <2||suppression>101)  {
             const embed1 = new Discord.RichEmbed()
              .setColor("#a8170d")
              .setDescription(`Dites moi combien de messages je dois retirer >.<, je ne peux pas au delà de cent :c`)
              .setTimestamp()
              message.channel.send(embed1);
return;           
             }
      message.channel.bulkDelete(suppression, true).then(ok => {
          var suppression = message.content.substr(7);
          const embed = new Discord.RichEmbed()
              .setColor("#00cbff")
              .setDescription(`Je suis parvenue à supprimer les ${supression} que vous m'aviez demander :3`)
              .setTimestamp();
          message.channel.send(embed)
          .then(message => setTimeout(function(){message.delete()}, 5000))
          .catch(err => console.log(err));
      
  })
}
}

module.exports = clear;
