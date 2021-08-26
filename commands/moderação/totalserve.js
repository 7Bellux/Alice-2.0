const Discord = require("discord.js");

	
module.exports.run = async (client, message, args) => {
  
		if (!message.member.permissions.has('ADMINISTRATOR')) {
		const My = new Discord.MessageEmbed().setDescription(
      `<@${message.author.id}> você não tem permissão para utilizar esse comando `)
			.setColor(`Dark_Blue`)
		return message.channel.send(My).then(m => m.delete({ timeout: 5000 }));

	}

  
    let humans = message.guild.members.cache.filter(m => !m.user.bot).size;
    let bots = message.guild.members.cache.filter(m => m.user.bot).size;
   let icon = message.guild.iconURL;
  
message.delete();

  const embed = new Discord.MessageEmbed()
    .setTitle("Servidor:")
    .setColor("DARK_BLUE")
    .setThumbnail(message.author.displayAvatarURL({format:"png"}))
    .setDescription(`

**<@${message.author.id}> o servidor tem o total de:
**
**😎・Humanos: \ \ [${humans}]\ \ 
🤖 • Bots \ \ [${bots}]\ \ 
👨‍👩‍👧‍👦 • Resutando no total de \ \ [${message.guild.memberCount}]\ \ membros no servidor!**`);

  message.channel.send(embed);
}

