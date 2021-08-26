const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission(`MANAGE_MESSAGES`, `ADMINISTRATOR`)) {
        const bunnyEmbed = new Discord.MessageEmbed()
        .setColor(`#DA004E`)
        .setDescription(`${message.author}, **Você não tem permissão para usar este comando.**`)
       return message.channel.send(bunnyEmbed);
      }
  
         
    const sayMessage = new Discord.MessageEmbed()
      .setColor(`DARK_BLUE`)
      .setTitle('Pings')
     .setDescription(`**${args.join(` `)}**`)
      .setImage(`https://i.imgur.com/fbQ4Sgk.png`)

     
  message.delete().catch(O_o => { });


  message.channel.send(sayMessage).then (msg => {
msg.react('👨‍💻')
 msg.react('🀄')
  msg.react('🃏')
   msg.react('📺')
    msg.react('👾')
     msg.react('🤝')
  });
};