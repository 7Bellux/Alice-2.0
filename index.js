const mySecret = process.env['TOKEN'];
const express = require('express');
const DisTube = require('distube');
const db = require('quick.db');
const fs = require('fs');
const app = express();
const enmap = require('enmap');
//Constantes
const {token, prefix} = require('./config.js');

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online


const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comando


const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client({partials: ["MEMBER", "MESSAGE", "CHANNEL", "USER", "REACTION"]});


{
client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
  
  try {
        const commandFile = require(`./commands/outros/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  
      }
      
      try {
        const commandFile = require(`./commands/moderação/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  
      }
      
      try {
        const commandFile = require(`./commands/diversão/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  
      }
      
      
      });
      
      }//pasta de comandos
   {
	const settings = new enmap({
  name: "settings",
  autoFetch: true,
  cloneLevel: "deep",
  fetchAll: true
});
   }//Ticket base
{
client.on("guildMemberAdd", async (member) => {
  let ferinha_autorole = db.get(`ferinha_autorole_${member.guild.id}`);
  if (!ferinha_autorole === null) return;
  member.roles.add(ferinha_autorole)
});//Cargo automático
}//Cargos por reação client
   {
client.on("message", message => {

    if (message.author.bot) return;
    if (message.channel.type == '꧁༒Jibril༒꧂')
    return
    if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
  
  message.delete();
  
      const Embed = new Discord.MessageEmbed()
      .setDescription(`🔮 | Olá <@${message.author.id}>, veja meus comandos com **${config.prefix}help** !`)
      .setColor(`RANDOM`)
    message.channel.send(Embed).then(m => m.delete({ timeout: 10000 }));
 }
    });//Comando de resposta por menção
}//Resposta por menção 
{
	
	client.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

		
  if (command == "ticket") {

    let channel = message.mentions.channels.first();
    if (!channel) return message.reply("Use: `*ticket #channel`");

    let sent = await channel.send(new Discord.MessageEmbed()
      .setTitle("Ticket de sugestão e denuncias")
      .setDescription("**Reaja com :ticket: para abrir um ticket!**")
      .setFooter("Ticket System")
      .setColor("BLUE")
    );

    sent.react('🎫');
    settings.set(`${message.guild.id}-ticket`, sent.id);

    message.channel.send("Sistema de ticket ativado!")
  }

  if (command == "acabei") {
    if (!message.channel.name.includes("ticket-")) return message.channel.send("Você não pode usar aqui")
    message.channel.delete();
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (user.partial) await user.fetch();
  if (reaction.partial) await reaction.fetch();
  if (reaction.message.partial) await reaction.message.fetch();

  if (user.client) return;

  let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

  if (!ticketid) return;

  if (reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
    reaction.users.remove(user);

    reaction.message.guild.channels.create(`ticket-${user.username}`, {
      permissionOverwrites: [
        {
          id: user.id,
          allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
              },
        {
          id: reaction.message.guild.roles.everyone,
          deny: ["VIEW_CHANNEL"]
              }
          ],
      type: 'text'
    }).then(async channel => {
      channel.send(`<@${user.id}>`, new Discord.MessageEmbed()
        .setTitle(`<@${user.id}>. Bem-vindo ao ticket`)
        .setDescription("**Digite a sua dúvida ou sugestão aqui!**")
        .addField("Um moderador ira chegar seu ticket em breve", "Digite `acabei` para fechar 9 ticket.")
    .setColor("DARK_BLUE"))
    })
  }
});
}
   {
const activities_list = ['STREAMING',//Modo de status
'Light Novel +18',
'Estudando Gados'];//Frases ilimitadas

 // cria um arraylist contendo frases que você deseja que seu bot alterne
client.on('ready', () => {
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // gera um número aleatório entre 1 e o comprimento da lista da matriz de atividades (neste caso 5).
		client.user.setActivity(activities_list[index]); // define as atividades do bot para uma das frases no arraylist.
	}, 10000); // Executa a cada segundo desejado. Lembrando que a cada 1000 é 1 segundo.
client.user.setStatus(`idle`).catch(console.error);//Deixar o bot com os status desejado.
    console.log('Estou Online!'); //Frase que aparecerar no console avisando que o bot estar online
});
}//Status completo
{
client.on('ready', () => {
	let magiaAvatar = [
			`https://i.imgur.com/1WhWB3W.png`, //primeiro link
			`https://i.imgur.com/e8JMmpD.jpg`, //segundo link
			`https://i.imgur.com/H7dBjiU.jpg`, //terceiro link
			`https://i.imgur.com/ghiw4Kp.jpg`//quarto link 
		],
		i = 0;
	setInterval(
		() =>
			client.user.setAvatar(`${magiaAvatar[i++ % magiaAvatar.length]}`),
		100 * 600 //intervalo entre as fotos
	);
	console.log(`Trocando avatar de ${client.user.tag}`)
});
}//Troca de avatar
   {
client.on("message", async message => {

let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();
  
  if (mentioned) {
    let status = await afk.fetch(mentioned.id);
    
    if (status) {
      message.channel.send(`O Usúario **${mentioned.user.tag}** está AFK \nMotivo: **${status}**`).then(i => i.delete({timeout: 5000}));
    }
  }
  
  if (authorStatus) {
    message.channel.send(`**${message.author.tag}** não está mais AFK.`).then(i => i.delete({timeout: 5000}));
    afk.delete(message.author.id)
  }
})
}
{
  client.on("messageReactionAdd", async(reaction, user) => { /* ficou com dúvidas?? entre aqui: https://discord.gg/PEdmSZzCAv*/

  let ferinha_cargo = "863232642950627328"; //coloque o ID do cargo entre as ""
  let fera_emoji = "👨‍💻"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
  const fera = "message"; 
 
   if (reaction.message.partial) await reaction.message.fetch();
   if (reaction.partial) await reaction.fetch;
   if (user.bot) return;
   if (!reaction.message.guild) return;
   if (reaction.message.id === ferinha_msg){
     if(reaction.emoji.name === fera_emoji) {
       await reaction.message.guild.members.cache.get(user.id).roles.add(ferinha_cargo)
     }
   }
 });
 /* by fera!!!!!!! <3 tmj https://discord.gg/PEdmSZzCAv */
 client.on('messageReactionRemove', async(reaction, user) => {
 
  let ferinha_cargo = "863232642950627328"; //coloque o ID do cargo entre as ""
  let fera_emoji = "👨‍💻"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
 
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch;
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === ferinha_msg){
    if(reaction.emoji.name === fera_emoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(ferinha_cargo)
       }
   }
 });

client.on("messageReactionAdd", async(reaction, user) => { /* ficou com dúvidas?? entre aqui: https://discord.gg/PEdmSZzCAv*/

  let ferinha_cargo = "863232309980037161"; //coloque o ID do cargo entre as ""
  let fera_emoji = "🀄"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
  const fera = "message"; 
 
   if (reaction.message.partial) await reaction.message.fetch();
   if (reaction.partial) await reaction.fetch;
   if (user.bot) return;
   if (!reaction.message.guild) return;
   if (reaction.message.id === ferinha_msg){
     if(reaction.emoji.name === fera_emoji) {
       await reaction.message.guild.members.cache.get(user.id).roles.add(ferinha_cargo)
     }
   }
 });
 /* by fera!!!!!!! <3 tmj https://discord.gg/PEdmSZzCAv */
 client.on('messageReactionRemove', async(reaction, user) => {
 
  let ferinha_cargo = "863232309980037161"; //coloque o ID do cargo entre as ""
  let fera_emoji = "🀄"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
 
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch;
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === ferinha_msg){
    if(reaction.emoji.name === fera_emoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(ferinha_cargo)
       }
   }
 });

client.on("messageReactionAdd", async(reaction, user) => { /* ficou com dúvidas?? entre aqui: https://discord.gg/PEdmSZzCAv*/

  let ferinha_cargo = "863231521535557652"; //coloque o ID do cargo entre as ""
  let fera_emoji = "🃏"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
  const fera = "message"; 
 
   if (reaction.message.partial) await reaction.message.fetch();
   if (reaction.partial) await reaction.fetch;
   if (user.bot) return;
   if (!reaction.message.guild) return;
   if (reaction.message.id === ferinha_msg){
     if(reaction.emoji.name === fera_emoji) {
       await reaction.message.guild.members.cache.get(user.id).roles.add(ferinha_cargo)
     }
   }
 });
 /* by fera!!!!!!! <3 tmj https://discord.gg/PEdmSZzCAv */
 client.on('messageReactionRemove', async(reaction, user) => {
 
  let ferinha_cargo = "863231521535557652"; //coloque o ID do cargo entre as ""
  let fera_emoji = "🃏"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
 
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch;
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === ferinha_msg){
    if(reaction.emoji.name === fera_emoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(ferinha_cargo)
       }
   }
 });

client.on("messageReactionAdd", async(reaction, user) => { /* ficou com dúvidas?? entre aqui: https://discord.gg/PEdmSZzCAv*/

  let ferinha_cargo = "863233777210490912"; //coloque o ID do cargo entre as ""
  let fera_emoji = "📺"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
  const fera = "message"; 
 
   if (reaction.message.partial) await reaction.message.fetch();
   if (reaction.partial) await reaction.fetch;
   if (user.bot) return;
   if (!reaction.message.guild) return;
   if (reaction.message.id === ferinha_msg){
     if(reaction.emoji.name === fera_emoji) {
       await reaction.message.guild.members.cache.get(user.id).roles.add(ferinha_cargo)
     }
   }
 });
 /* by fera!!!!!!! <3 tmj https://discord.gg/PEdmSZzCAv */
 client.on('messageReactionRemove', async(reaction, user) => {
 
  let ferinha_cargo = "863233777210490912"; //coloque o ID do cargo entre as ""
  let fera_emoji = "📺"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
 
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch;
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === ferinha_msg){
    if(reaction.emoji.name === fera_emoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(ferinha_cargo)
       }
   }
 });

client.on("messageReactionAdd", async(reaction, user) => { 
  let ferinha_cargo = "863231875007119413"; //coloque o ID do cargo entre as ""
  let fera_emoji = "👾"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
  const fera = "message"; 
 
   if (reaction.message.partial) await reaction.message.fetch();
   if (reaction.partial) await reaction.fetch;
   if (user.bot) return;
   if (!reaction.message.guild) return;
   if (reaction.message.id === ferinha_msg){
     if(reaction.emoji.name === fera_emoji) {
       await reaction.message.guild.members.cache.get(user.id).roles.add(ferinha_cargo)
     }
   }
 });
 /* by fera!!!!!!! <3 tmj https://discord.gg/PEdmSZzCAv */
 client.on('messageReactionRemove', async(reaction, user) => {
 
  let ferinha_cargo = "863231875007119413"; //coloque ""o ID do cargo entre as ""
  let fera_emoji = "👾"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
 
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch;
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === ferinha_msg){
    if(reaction.emoji.name === fera_emoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(ferinha_cargo)
       }
   }
 });
 
client.on("messageReactionAdd", async(reaction, user) => { /* ficou com dúvidas?? entre aqui: https://discord.gg/PEdmSZzCAv*/

  let ferinha_cargo = "875488297030418532"; //coloque o ID do cargo entre as ""
  let fera_emoji = "🤝"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
  const fera = "message"; 
 
   if (reaction.message.partial) await reaction.message.fetch();
   if (reaction.partial) await reaction.fetch;
   if (user.bot) return;
   if (!reaction.message.guild) return;
   if (reaction.message.id === ferinha_msg){
     if(reaction.emoji.name === fera_emoji) {
       await reaction.message.guild.members.cache.get(user.id).roles.add(ferinha_cargo)
     }
   }
 });
 /* by fera!!!!!!! <3 tmj https://discord.gg/PEdmSZzCAv */
 client.on('messageReactionRemove', async(reaction, user) => {
 
  let ferinha_cargo = "875488297030418532"; //coloque o ID do cargo entre as ""
  let fera_emoji = "🤝"; //coloque o EMOJI entre as ""
  let ferinha_msg = "875933893855957034"; //coloque o ID da mensagem entre as ""
 
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch;
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === ferinha_msg){
    if(reaction.emoji.name === fera_emoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(ferinha_cargo)
       }
   }
 });

}//Cargos por reação 

{

client.config = require("./config.js")
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: true })
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.emotes = config.emoji

fs.readdir("./commands/música/", (err, files) => {
    if (err) return console.log("Não foi possivel encontrar este comando!")
    const jsFiles = files.filter(f => f.split(".").pop() === "js")
    if (jsFiles.length <= 0) return console.log("Não foi possivel encontrar este comando!")
    jsFiles.forEach(file => {
        const cmd = require(`./commands/música/${file}`)
        console.log(`${file} iniciado`)
        client.commands.set(cmd.name, cmd)
        if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
    })
})


client.on("ready", () => {
    console.log(`${client.user.tag} Está pronto para tocar música.`)
   
})

client.on("message", async message => {
    const prefix = config.prefix
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) 
    if (cmd.inVoiceChannel && !message.member.voice.channel)
    if (!message.member.voice.channel) { return message.channel.send(embexd)
     
      const embexd = new Discord.MessageEmbed()
        .setTitle('📳Ops...')
        .setDescription(`<@${message.author.id}>Você precisa estar em um canal de voice para usar esse comando`)
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        .setColor('BLUE').then(m => m.delete({ timeout: 5000 }))
    }
    try {
        cmd.run(client, message, args)
    } catch (e) {
        console.error(e)
        message.reply(`Error: ${e}`)
    }
})

const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `${client.emotes.play} | Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `${client.emotes.success} | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `${client.emotes.play} | Play \`${playlist.title}\` playlist (${playlist.total_items} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `${client.emotes.success} | Added \`${playlist.title}\` playlist (${playlist.total_items} songs) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0
        message.channel.send(jibril)
        
        const jibriljibr = new Discord.MessageEmbed ()
          .setTitle(`**Digite o número no lado da música desejada **`)
          .setDescription(`${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\``)
          .addField(`**A search será fechada em 60 segundos**`, `**Caso não queira fazer uma pesquisa digite ${config.prefix}play <URL> ou resultado da música!**`)
          .setColor(`DARK_BLUE`)
          
          })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", message => message.channel.send(`<@${message.authorut.id}> a procura foi cancelada`))
    .on("error", (message, err) => message.channel.send(`${client.emotes.error} | An error encountered: ${err}`))

}

client.login(process.env.TOKEN, config.token); //Ligando o Bot caso ele consiga acessar o token