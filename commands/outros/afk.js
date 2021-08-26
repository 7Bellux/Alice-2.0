const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  
const status = new db.table("AFKs");
let afk = await status.fetch(message.author.id);
    
    message.delete();
    
let embed1 = new Discord.MessageEmbed()
.setColor('Dark_Blue')
.setDescription(`**<@${message.author.id}> entrou em AFK.** \nPara sua conveniência o afk será desativado quando você falar no chat \n **Motivo:** \`${args.join(" ") ? args.join(" ") : "Não informado"}\``)
status.set(message.author.id, args.join(" ") || `AFK`)
if (!afk) return message.channel.send(embed1);


else {

    status.delete(message.author.id);
  }
    
    
  message.channel.send(embed)
}
