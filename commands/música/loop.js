const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const queue = client.distube.getQueue(message)

    

    if(!queue) return message.channel.send(EmbedBunny)


    let EmbedBunny = new Discord.MessageEmbed()
      .setTitle('**Desculpe**')
      .setDescription(`<@${message.author.id}> não a nenhuma música tocando no momento!`)
      .setColor('DARK_BLUE').then(m => m.delete({ timeout: 5000 }));

    let mode = null
    switch (args[0]) {
      case "off":
        mode = 0
        break
      case "atual":
        mode = 1
        break
      case "fila":
        mode = 2
        break
    }
    mode = client.distube.setRepeatMode(message, mode)
    mode = mode ? mode === 2 ? "loop fila" : "loop atual" : "Off"



    message.delete()

    if (args[0]) return message.channel.send(Cat)

    const Cat = new Discord.MessageEmbed()
      .setTitle('**Escolha uns dos modos**')
      .setDescription(`<@${message.author.id}> Digite ${config.prefix}loop <modo>`)
      .addField(`Modos:`, '`Fila`')
      .addField('`Atual`', '`Off`')
      .setColor('DARK_BLUE').then(m => m.delete({ timeout: 10000 }));

    const embed1 = new Discord.MessageEmbed()
      .setTitle('**🔁Loop atual:**')
      .setDescription(`Loop ${mode} Definido com sucesso!`)
      .setColor('DARK_BLUE')
      .setFooter(`Comando requisitado por:  ${message.author.username}`)

    message.channel.send(embed1)

  }
