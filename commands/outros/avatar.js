const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let img = user.avatarURL({ dynamic: true, format: "jpg", size: 1024 });

  
message.delete();

  let embed = new Discord.MessageEmbed() 
    .setColor(`#DA004E`) 
    .setTitle(`📸 Avatar de ${user.username}:`)
    
    
        .setDescription(`**[Click aqui](${message.author.avatarURL()}) para baixar o avatar do <@${user.id}>**`)
    .setImage(img)
    .setFooter(`● Comandos utilizado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "gif"}));
    
 await message.channel.send(embed); 

};
