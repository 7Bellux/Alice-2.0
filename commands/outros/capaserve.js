const Discord = require("discord.js");

module.exports = {
  config:{
    name:"servericon"
},

run: async (bot, message, args) => {

message.delete()

        let icone = new Discord.MessageEmbed() // Aqui irá ser a embed que o bot irá mostrar.
        .setTitle(`**🖼Capa do servidor:**`)
.setDescription(`**[Click aqui](${message.guild.iconURL()}) para baixar a capa do servidor**`)
        .setFooter(`● Comandos utilizado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

        .setColor(`#DA004E`)
        .setImage(message.guild.iconURL({ dynamic: true, size: 2048 })) // Aqui, colocamos dynamic: true, size: 2048, caso o servidor tenha um gif de icone e definimos o tamanho dela para 2048
        message.channel.send(icone)

  } 

}
