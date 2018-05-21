const Discord = require("discord.js");
const tool = require("./tool.js");

function sondage(message, bot, prefix) {  
    if (message.content.startsWith(prefix + "sondage")) {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send({embed: {
                title: `${message.author.username}`,
                desciption: `Tu ne peux pas créer de sondage >.<`,
           }});
        }
                    let args = message.content.split(" ").slice(1);
                    let thingToEcho = args.join(" ")
                    const channel = message.guild.channels.find("name", "annonces");
                    if (!channel) return;
                    const embed = new Discord.RichEmbed()
                        .setTitle("- Sondage -")
                        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
                        .setColor("#f4427a")
                        .setDescription('*Répondez avec ✅ ou ❌*')
                        .setThumbnail("https://cdn.discordapp.com/attachments/386159915225317379/440978034410127361/hqdefault_copie.png")
                        .addField(`Le sujet: `, `${thingToEcho}`)
                        .addField(`-----`, `Merci de votre participation !`)
                        .setFooter("Bot créer par Akane")
                        .setTimestamp();
                    channel.send(embed)
                        .then(function (message) {
                            message.react("✅")
                            message.react("❌")
                        }).catch(function() {                           
                        });
                        }
};


module.exports = sondage;
