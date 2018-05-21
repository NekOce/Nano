const Discord = require("discord.js");

function hr(message, bot, prefix, member) {
  if (message.content.startsWith(prefix + "hr")) {
        const les_roles = message.guild.channels.find("name", "les-roles")
        const hroles = new Discord.RichEmbed()
        .setTitle(`Les rôles`)
        .setColor("#de00fc")
        .setThumbnail("https://cdn.discordapp.com/attachments/438379829365178375/442006176662683648/636a32a7e264246010d6d1055a1c6ba0.png")
        .setDescription(`Voici les commandes pour vous affecter à certains rôles sur le discord.`)
        .addField(`Enlevez les rôles`, `Pour vous retirer les rôles, faites un )remove (ex: )remove csgo).`)
        les_roles.send(hroles)
        const hroles1 = new Discord.RichEmbed()
        .setTitle(`- Les rôles de jeux -`)
        .setColor("#42b3f4")
        .addField(`)csgo`, `Counter-Strike: Global Offensive`)
        .addField(`)ow`, `Overwatch`)
        .addField(`)lol`, `League Of Legend`)
        .addField(`)ft`, `Fortnite`)
        .addField(`)gta5`, `Grand Theft Auto V`)
        .addField(`)mc`, `Minecraft`)
        .addField(`)pc`, `Plateforme "Pc"`)
        .addField(`)xb1`, `Plateforme "Xbox one"`)
        .addField(`)ps4`, `Plateforme "Ps4"`)
        les_roles.send(hroles1)
      
        const hroles2 = new Discord.RichEmbed()
        .setTitle("- Les rôles généraux -")
        .addField(`)am`, `Amateurs d'animes/mangas`)
        .addField(`)mtl`, `Métalleux`)
        .addField(`)kpop`, `Kpop`)
        .addField(`)jpop`, `Jpop`)
        .addField(`)ms`, `Musiciens`)
        .addField(`)ds`, `Déssinateurs`)
        .setColor("#b0e82e")
        .setTimestamp()
        .setFooter(`Bot créer par Akane`) ;
        les_roles.send(hroles2)
      }
    }
  
module.exports = hr;
