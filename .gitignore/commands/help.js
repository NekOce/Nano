const Discord = require("discord.js");

function help(message, bot, prefix, member) {
    if (message.content.startsWith(prefix + "help")) {
        const embed1 = new Discord.RichEmbed()
        .setAuthor(`Akane`, "https://cdn.discordapp.com/attachments/441002945979482112/442074924304302091/751.jpg")
        .setColor("#f20798")
        .setDescription(`Voici toutes les commandes d'aides de Nano, merci de me notifier le moindre problème, pour certaines commandes il vous faut les autorisations appropriés. Merci à vous :p`)
        .setThumbnail("https://cdn.discordapp.com/attachments/381766199341744129/442086857279275009/tumblr_o8mlcvaQBp1vuedq4o1_400.gif")
        .setImage("https://cdn.discordapp.com/attachments/381766199341744129/441853835326259211/Sans_titre.png")
        .setTitle(`Help | prefix ")"`);
        message.channel.send(embed1)

        const embed2 = new Discord.RichEmbed()
        .setColor("#f19006")
        .setTitle(`- Administration -`)
        .addField(`report`, `report <mention> <raison>`)
        .addField(`kick`, `Exclure un utilisateur.`)
        .addField(`ban`, `Bannir un utilisateur, à utiliser avec précaution.`)
        .addField(`clear`, `Effacer de 2 à 100 messages.`)
        .addField(`sondage`, `créer votre sondage.`)
        message.channel.send(embed2)

        const embed3 = new Discord.RichEmbed()
        .setColor("#e5e50b")
        .setTitle("- Fun -")
        .addField(`cat`, `Vous affiches un tout mimi chat :3`)

        const embed4 = new Discord.RichEmbed()
        .setColor("#22e8e1")
        .setTitle(`- Musique -`)
        .addField(`play`, `play <URL YouTube>`)
        .addField(`skip`, `passer à la musique suivante.`)
        .addField(`stop`, `Arrêter la musique.`)
        .addField(`resume`, `Reprendre la musique.`)
        .addField(`np`, `Montre la musique en cour.`)
        .addField(`volume`, `volume <1-5>`)
        .addField(`queue`, `Regarder la file de musiques.`);

        //const embed5 = new Discord.RichEmbed() NSFW

        const embed6 = new Discord.RichEmbed()
        .setColor("#f0dd06")
        .setTitle(`- Utilitaire -`)
        .addField(`hr`, `"help rôles", Une commande pour vous montrer les rôles qui vous sont disponible et comment les appliquer.`)
        .addField(`ping`, `Vous montre votre latence avec le serveur.`)
        .addField(`servinfo`, `Vous affiches les informations de notre serveur.`)
        .addField(`botinfo`, `Vous affiches les informations sur Nano.`)
        .addField(`avatar`, `avatar <mention>, vous montre son avatar Discord`)
        .addField(`savatar`, `Vous montre l'image de notre serveur discord`)
        .setImage("https://cdn.discordapp.com/attachments/445527850477551627/447933202787729439/nyanko-days-04-01-sulk.jpg")
        .setTimestamp()
        .setFooter(`bot créer par Akane`)
        message.channel.send(embed6)
  }
}

    module.exports = help;
