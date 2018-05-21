//Require packages   Exiger des paquets
 const Util = require("discord.js");
 const Discord = require("discord.js");
 const superagent = require("superagent");
 const YouTube = require('simple-youtube-api');
 const ytdl = require('ytdl-core');
 var fs = require ("fs");

 const GOOGLE_API_KEY = "AIzaSyDU3HcYYWTIWOnqdDqyRpASln9RCiAXHZI"

//configure packages    Configurer les paquets
const bot = new Discord.Client({ disableEveryone: true });
const client = new Discord.Client({ disableEveryone: true });
const prefix = ")";
const PREFIX = ")";

//Musiques
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

bot.on("ready", () => {
  
  console.log(`${bot.user.username}: Je suis réveillée professeur.`)
  bot.user.setGame(`)help pour demander mon aide ! :3`, "https://www.twitch.tv/animeshon_music")
    
});

bot.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    const args = message.content.split(' ');   
	  let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

    if (command === "cat") {
       const { body } = await superagent
       //.get('thecatapi.com/api/images/get');
       .get('aws.random.cat/meow')
       const embed = new Discord.RichEmbed()
       .setColor("#f904c4")
       .setTitle("Meow :cat:")
       //embed.setImage("http://thecatapi.com/api/images/get")
       .setImage(body.file)
       .setFooter(message.author.username, message.author.avatarURL)
       .setTimestamp();
       message.channel.send({embed})
   }else

     if (command === "avatar") {
     let usera = message.mentions.members.first();
     const embed = new Discord.RichEmbed()
     .setImage(usera.user.avatarURL)
     .setColor('#bdc4f9')
     .setTimestamp()
     .setFooter(message.author.username, message.author.avatarURL);
     message.channel.send(embed)
   }else

    if (command === "savatar") {
      const embed = new Discord.RichEmbed()
      .setImage(message.guild.iconURL)
      .setTimestamp()
      .setColor("#bdc4f9")
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(embed)
    }
});

bot.on("message", message => {
  if (message.author.bot) return;

  var member = message.author;

const botinfo = require ("./commands/botinfo.js"); //Bot Infos
botinfo(message, bot, prefix);

const servinfo = require ("./commands/servinfo.js"); //Serveur infos
servinfo(message, bot, prefix);

const report = require ("./commands/report.js"); //Report
report(message, bot, prefix);

const ban = require ("./commands/ban.js"); //Ban
ban(message, bot, prefix);

const clear = require ("./commands/clear.js"); //Clear
clear(message, bot, prefix);

const ping = require ("./commands/ping.js"); //Ping
ping(message, bot, prefix);

const sondage = require ("./commands/sondage.js") //Sondage
sondage(message, bot, prefix);

const help =require ("./commands/help.js"); //Help
help(message, bot ,prefix);

const hr = require ("./commands/hr.js") //Help roles
hr(message, bot, prefix);
});

bot.on("guildMemberRemove", member => {
  const log = member.guild.channels.find("name", "log")
  const byelog = new Discord.RichEmbed()
  .setAuthor(`${member.user.username}`)
  .setThumbnail(member.user.avatarURL)
  .setColor("#fcbd00")
  .setDescription(`${member.user.username} a quitter le serveur`)
  log.send(byelog);

});


bot.on("guildMemberAdd", member => {
  const bvn = member.guild.channels.find("name", "bienvenue")
  const embed = new Discord.RichEmbed()
  .setTitle(`Bienvenue ${member.user.username} !`)
  .setThumbnail(member.user.avatarURL)
  .setDescription(`${member.guild.name} vous souhaite la bienvenue, nous vous laissons vous installer. Nous vous souhaitons de passer vos meilleurs moment parmis nous, ${member.user.username}.`)
  .addField(`Hi !`, `Pensez à vous présenter dans le salon textuel #presentations , et regardez bien le salon #informations .`)
  .setImage("https://cdn.discordapp.com/attachments/381766199341744129/441978214227902479/BanniC3A8re-Anime-Winter-2017-One-Room-Ruru-Berryz-MoePop.png")
  .setFooter(`Bot créer par Akane`)
  .setTimestamp();
  bvn.send(embed);

  const logbvn = member.guild.channels.find("name", "log")
  const logembedbvn = new Discord.RichEmbed()
  .setAuthor(`${member.user.username}`)
  .setThumbnail(member.user.avatarURL)
  .setColor("#00defc")
  .setDescription(`${member.user.username} a rejoins le serveur`)
  logbvn.send(logembedbvn);

  var role = member.guild.roles.find("name", "Visiteurs");
  member.addRole(role);

  member.createDM().then(channel => {
  const embed1 = new Discord.RichEmbed()
  .setTitle(`    Bienvenue dans **Waifu's Heaven**`)
  .setAuthor(`Akane`, `https://cdn.discordapp.com/attachments/381766199341744129/441846082088075264/751.jpg`)
  .setDescription(`Coucou à toi ${member.user.username}, je suis **Akane**, une des créateurs du serveur.

                 Je te souhaite la bienvenue dans notre paradis, je t'invite à te présenter (prénom, âge, loisir, passion, etc...) biensur je ne t'oblige pas à y mettre toute tes informations, mais nous aimons savoir une idée de qui nous accueillons.
                 Une fois ça de fait, jettes un oeil au salon #information ou y est attacher le règlement et d'autres choses utiles.
            
                 Merci pour ta compréhension et passes de bons moments chez nous. ^^`)
  .setImage(`https://cdn.discordapp.com/attachments/381766199341744129/441853835326259211/Sans_titre.png`)
  .addField(`Des cados`, `Nous organisons des giveaways une fois par mois minimum, alors sois attentif ! :p`)
  .addField(`L'administration`, `Notre agréable staff en or, on tous plus de 18ans. ^^`)
  .addField(`Des events`, `Des concours de jeu ou autres seront lancés de temps en temps. Participez pour avoir la chance d'obtenir la récompence. :)`)
  .setThumbnail("https://cdn.discordapp.com/attachments/381766199341744129/441976824948326410/yamakaze_kantai_collection_drawn_by_nagineko__sample-ad030434d1490671a2666e9bc1f66cce2.png")
  .setFooter(`Bot créer par Akane`)
  .setTimestamp()
  channel.send(embed1)
   });
});

bot.on("message", message => {
if (message.author.bot) return;

//var addRole = 
//var member = message.author;
const channel = bot.channels.get('434989911935025152');

//===LES ROLES===
//à copier
//if (message.content.startsWith(prefix + "")) {
// let = message.guild.role.find("name", ""); 
// message.member.addRole();
// }
//const amembed = new Discord.RichEmbed()
//.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
//.setColor("#13efc3")
///.setDescription(`Vous êtes maintenant affecter au rôle, LOL.`)
//.setTimestamp();
//channel.send(amembed)
//}
//if (message.content.startsWith(prefix + "remove lol")) {
//let remove_am = message.guild.roles.find("name", "LOL");
//message.member.removeRole(remove_am);
//const amembed = new Discord.RichEmbed()
//.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
//.setColor("#efb013")
//.setDescription(`Vous n'êtes plus affecter au rôle, LOL.`)
//.setTimestamp();
//channel.send(amembed)
//}
//LES ROLES DE JEUX

  if (message.content.startsWith(prefix + "ow")) {
    let ow = message.guild.roles.find("name", "Overwatch");
    message.member.addRole(ow);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#13efc3")
    .setDescription(`Vous êtes maintenant affecté(e) au rôle, Overwatch.`)
    .setTimestamp();
    channel.send(amembed)
     }
   if (message.content.startsWith(prefix + "remove ow")) {
    let remove_ow = message.guild.roles.find("name", "Overwatch");
    message.member.removeRole(remove_ow);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#efb013")
    .setDescription(`Vous n'êtes plus affecté(e) au rôle,Overwatch.`)
    .setTimestamp();
     channel.send(amembed)
      }    
   if (message.content.startsWith(prefix + "csgo")) {
    let csgo = message.guild.roles.find("name", "CSGO");
     message.member.addRole(csgo);
     const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#13efc3")
      .setDescription(`Vous êtes maintenant affecté(e) au rôle, CSGO.`)
     .setTimestamp();
     channel.send(amembed)
       }
    if (message.content.startsWith(prefix + "remove csgo")) {
     let remove_csgo = message.guild.roles.find("name", "CSGO");
    message.member.removeRole(remove_csgo);
     const amembed = new Discord.RichEmbed()
       .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
       .setColor("#efb013")
       .setDescription(`Vous n'êtes plus affecté(e) au rôle, CSGO.`)
       .setTimestamp();
        channel.send(amembed)
        }
      if (message.content.startsWith(prefix + "lol")) {
    let lol = message.guild.roles.find("name", "LOL");
    message.member.addRole(lol);
     const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#13efc3")
     .setDescription(`Vous êtes maintenant affecté(e) au rôle, LOL.`)
     .setTimestamp();
     channel.send(amembed)
      }
      if (message.content.startsWith(prefix + "remove lol")) {
      let remove_lol = message.guild.roles.find("name", "LOL");
     message.member.removeRole(remove_lol);
      const amembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor("#efb013")
      .setDescription(`Vous n'êtes plus affecté(e) au rôle, LOL.`)
      .setTimestamp();
      channel.send(amembed)
       }
       if (message.content.startsWith(prefix + "ft")) {
      let ft = message.guild.roles.find("name", "Fortnite");
      message.member.addRole(ft);
      const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#13efc3")
     .setDescription(`Vous êtes maintenant affecté(e) au rôle, Fortnite.`)
     .setTimestamp();
     channel.send(amembed)
     }
     if (message.content.startsWith(prefix + "remove ft")) {
     let remove_ft = message.guild.roles.find("name", "Fortnite");
     message.member.removeRole(remove_ft);
     const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#efb013")
     .setDescription(`Vous n'êtes plus affecté(e) au rôle, Fortnite.`)
     .setTimestamp();
     channel.send(amembed)
      }
      if (message.content.startsWith(prefix + "gta5")) {
      let gta5 = message.guild.roles.find("name", "GTA V");
      message.member.addRole(gta5);
      const amembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor("#13efc3")
      .setDescription(`Vous êtes maintenant affecté(e) au rôle, GTA V.`)
      .setTimestamp();
      channel.send(amembed)
       }
      if (message.content.startsWith(prefix + "remove gta5")) {
      let remove_gta5 = message.guild.roles.find("name", "GTA V");
      message.member.removeRole(remove_gta5);
      const amembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor("#efb013")
      .setDescription(`Vous n'êtes plus affecté(e) au rôle, GTA V.`)
      .setTimestamp();
      channel.send(amembed) 
       }
      if (message.content.startsWith(prefix + "mc")) {
       let mc = message.guild.roles.find("name", "Minecraft");
      message.member.addRole(mc);
      const amembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor("#13efc3")
       .setDescription(`Vous êtes maintenant affecté(e) au rôle, Minecraft.`)
      .setTimestamp();
       channel.send(amembed)
       } 
      if (message.content.startsWith(prefix + "remove mc")) {
      let remove_mc = message.guild.roles.find("name", "Minecraft");
      message.member.removeRole(remove_mc);
      const amembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor("#efb013")
      .setDescription(`Vous n'êtes plus affecté(e) au rôle, Minecraft.`)
       .setTimestamp();
       channel.send(amembed)    
      }

//LES ROLES GLOBALS

     if (message.content.startsWith(prefix + "jpop")) {
     let jpop = message.guild.roles.find("name", "Jpop");
     message.member.addRole(jpop);
     const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#13efc3")
     .setDescription(`Vous êtes maintenant affecté(e) au rôle, Jpop.`)
     .setTimestamp();
     channel.send(amembed)
      }
     if (message.content.startsWith(prefix + "remove jpop")) {
       let remove_jpop = message.guild.roles.find("name", "Jpop");
     message.member.removeRole(remove_jpop);
      const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#efb013")
     .setDescription(`Vous n'êtes plus affecté(e) au rôle, Jpop.`)
     .setTimestamp();
     channel.send(amembed)
    }
    if (message.content.startsWith(prefix + "kpop")) {
     let kpop = message.guild.roles.find("name", "Kpop");
     message.member.addRole(kpop);
     const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#13efc3")
     .setDescription(`Vous êtes maintenant affecté(e) au rôle, Kpop.`)
     .setTimestamp();
     channel.send(amembed)
      }
     if (message.content.startsWith(prefix + "remove kpop")) {
       let remove_kpop = message.guild.roles.find("name", "Kpop");
     message.member.removeRole(remove_kpop);
      const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#efb013")
     .setDescription(`Vous n'êtes plus affecté(e) au rôle, Kpop.`)
     .setTimestamp();
     channel.send(amembed)
     }
     if (message.content.startsWith(prefix + "am")) {
     let am = message.guild.roles.find("name", "Amateur d'animes");
     message.member.addRole(am);
     const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#13efc3")
     .setDescription(`Vous êtes maintenant affecté(e) au rôle, Amateur d'animes.`)
     .setTimestamp();
     channel.send(amembed)
      }
     if (message.content.startsWith(prefix + "remove am")) {
       let remove_am = message.guild.roles.find("name", "Amateur d'animes");
     message.member.removeRole(remove_am);
      const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#efb013")
     .setDescription(`Vous n'êtes plus affecté(e) au rôle, Amateur d'animes.`)
     .setTimestamp();
     channel.send(amembed)
     }
     if (message.content.startsWith(prefix + "mtl")) {
     let mtl = message.guild.roles.find("name", "Métalleux");
     message.member.addRole(mtl);
     const amembed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setColor("#13efc3")
     .setDescription(`Vous êtes maintenant affecté(e) au rôle, Métalleux.`)
     .setTimestamp();
       channel.send(amembed)
        }
     if (message.content.startsWith(prefix + "remove mtl")) {
      let remove_mtl = message.guild.roles.find("name", "Métalleux");
     message.member.removeRole(remove_mtl);
      const amembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor("#efb013")
      .setDescription(`Vous n'êtes plus affecté(e) au rôle, Métalleux.`)
       .setTimestamp();
       channel.send(amembed)
    }
     if (message.content.startsWith(prefix + "ds")) {
    let ow = message.guild.roles.find("name", "Dessinateurs");
    message.member.addRole(ow);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#13efc3")
    .setDescription(`Vous êtes maintenant affecté(e) au rôle, Dessinateurs.`)
    .setTimestamp();
    channel.send(amembed)
     }
   if (message.content.startsWith(prefix + "remove ds")) {
    let remove_ow = message.guild.roles.find("name", "Dessinateurs");
    message.member.removeRole(remove_ow);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#efb013")
    .setDescription(`Vous n'êtes plus affecté(e) au rôle,Dessinateurs.`)
    .setTimestamp();
     channel.send(amembed)
      }    
       if (message.content.startsWith(prefix + "ms")) {
    let ow = message.guild.roles.find("name", "Musiciens");
    message.member.addRole(ow);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#13efc3")
    .setDescription(`Vous êtes maintenant affecté(e) au rôle, Musiciens.`)
    .setTimestamp();
    channel.send(amembed)
     }
   if (message.content.startsWith(prefix + "remove ms")) {
    let remove_ow = message.guild.roles.find("name", "Musiciens");
    message.member.removeRole(remove_ow);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#efb013")
    .setDescription(`Vous n'êtes plus affecté(e) au rôle,Musiciens.`)
    .setTimestamp();
     channel.send(amembed)
      } 
      if (message.content.startsWith(prefix + "pc")) {
    let pc = message.guild.roles.find("name", "Pc");
    message.member.addRole(pc);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#13efc3")
    .setDescription(`Vous êtes maintenant affecté(e) au rôle, Pc.`)
    .setTimestamp();
    channel.send(amembed)
     }
   if (message.content.startsWith(prefix + "remove pc")) {
    let remove_pc = message.guild.roles.find("name", "Pc");
    message.member.removeRole(remove_pc);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#efb013")
    .setDescription(`Vous n'êtes plus affecté(e) au rôle, Pc.`)
    .setTimestamp();
     channel.send(amembed)
      }   
      if (message.content.startsWith(prefix + "xb1")) {
    let xb1 = message.guild.roles.find("name", "Xb1");
    message.member.addRole(xb1);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#13efc3")
    .setDescription(`Vous êtes maintenant affecté(e) au rôle, Xbox one.`)
    .setTimestamp();
    channel.send(amembed)
     }
   if (message.content.startsWith(prefix + "remove xb1")) {
    let remove_xb1 = message.guild.roles.find("name", "Xb1");
    message.member.removeRole(remove_xb1);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#efb013")
    .setDescription(`Vous n'êtes plus affecté(e) au rôle, Xbox one.`)
    .setTimestamp();
     channel.send(amembed)
      }   
      if (message.content.startsWith(prefix + "ps4")) {
    let ps4 = message.guild.roles.find("name", "Ps4");
    message.member.addRole(ps4);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#13efc3")
    .setDescription(`Vous êtes maintenant affecté(e) au rôle, Ps4.`)
    .setTimestamp();
    channel.send(amembed)
     }
   if (message.content.startsWith(prefix + "remove ps4")) {
    let remove_ps4 = message.guild.roles.find("name", "Ps4");
    message.member.removeRole(remove_ps4);
    const amembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#efb013")
    .setDescription(`Vous n'êtes plus affecté(e) au rôle, Ps4.`)
    .setTimestamp();
     channel.send(amembed)
      }      
  });




bot.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
    
	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send(`Vous n'êtes pas dans un salon vocaux..`);
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send(`Je n'ai pas le droit de vous rejoindre :(`);
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send(`Donnez moi les droits de chanter, s'il vous plait..`);
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** vient d'être ajouté a la queue.`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send(`Vous n'êtes pas dans le salon ^^'`);
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	}else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send(`Vous n'êtes pas dans le salon ^^'`);
		if (!serverQueue) return msg.channel.send(`Il faudrait qu'une musique soit en cour si vous voulez l'arrêter..`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send(`Vous n'êtes pas dans le salon ^^'`);
		if (!serverQueue) return msg.channel.send(`Changer le volume n'y changerais rien si il n'y a pas de musique.....`);
		if (!args[1]) return msg.channel.send(`Le volume du son est à: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('Pas de musique en cour, veuillez m\'excuser..');
		return msg.channel.send(`🎶 Musique actuelle: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ La musique a était mise en pause ^^');
		}
		return msg.channel.send(`Pas de musique en cour ^^'`);
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ La musique vient de reprendre :)');
		}
		return msg.channel.send('Pas de musique en cour ^^');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}

bot.login('NDQxMjc2OTY0OTQzNDI5NjMz.DcubMg.SaeEV3ptbiQVUXKExvrVVd5jGGs'); //token
