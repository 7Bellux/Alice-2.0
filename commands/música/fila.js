const Discord = require('discord.js');
const distube = require('distube');

module.exports.run = async (Client, message, args, prefix) => {

  if (!message.content.startsWith(prefix)) return
  if (!message.member.voice.channel) return message.reply("Você precisa está em um canal de voice para usar esse comando")
  let queue = await Client.distube.getQueue(message)
  if (!queue) message.channel.send("Nenhuma música tocando atualmente")

  const fila = queue.songs.map((song, i) => `${i === 0 ? "Tocando agora:" : `${i}.`} ${song.name} - \`${song.formatteDuration}\``).join("\n")
  
  message.channel.send(fila)
}