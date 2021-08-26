const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");
exports.run = async(client, message, args) => {

  let channel = message.member.voice.channel;
    if(!channel) return message.channel.send('Você deve estar em um canal de voz para utlizar esse comando!')
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Não tem nada tocando no momento").catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `Não encontrei letras para essa ${queue.songs[0].title} :(`;
    } catch (error) {
      lyrics = `Não encontrei letras para essa ${queue.songs[0].title} :(`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle(`Letras da **__${queue.songs[0].title}__**`)
      .setDescription(lyrics)
      .setColor("GREEN")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
}