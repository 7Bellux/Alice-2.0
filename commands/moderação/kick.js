const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  
    	if (!message.member.permissions.has('KICK_MEMBERS')) {
    	  const My = new Discord.MessageEmbed().setDescription(
    	      `<@${message.author.id}> você não tem permissão para utilizar esse comando `)
    	    .setColor(`Dark_Blue`)
    	  return message.channel.send(My).then(m => m.delete({ timeout: 5000 }))}

    let avatar = message.author.avatarURL({
		dynamic: true,
		format: 'gif',
		size: 1024
	});
    
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !")
    if(!member.kickable)
      return message.reply("Eu não posso kickar esse usuário, ele pode ter um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui kickar o membro devido o: ${error}`))

      message.channel
      message.delete()
      
      let pEmbed = new Discord.MessageEmbed()
          .setTitle("🚨", "**Kick ;**") 
          
         
      
          .addField("Membro Kickado:", `<@${member.user.id}>`)
          .addField("Kickado por:", `${message.author}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format:"png"}))
          .setColor("DARK_BLUE").setTimestamp()
.setThumbnail(message.author.displayAvatarURL({format:"png"}))
   	
          message.channel.send(pEmbed)
          
}

