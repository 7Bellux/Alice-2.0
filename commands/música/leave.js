const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.client.queue.get(message.guild.id)

  const bot = message.guild.me.voice.channel;
  let channel = message.member.voice.channel;
  if(!channel) return message.channel.send('Você deve estar em um canal de voz para utlizar esse comando!')
    
    if (!bot) return message.channel.send('Eu preciso estar em um **canal de voz!**');
    const sair = message.guild.me.voice.channel.leave();

       
       const embed = new Discord.MessageEmbed()
       .setTitle(`**Fui desconectada!**`)
       .setColor("RED")
       .setDescription(`**O ${message.author} me desconectou**`);
      await message.channel.send(embed);
       await sair
       await message.client.queue.delete(message.guild.id);
}