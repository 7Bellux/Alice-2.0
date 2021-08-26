const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

if (!message.member.permissions.has('MANAGE_MESSAGES')) {
		const My = new Discord.MessageEmbed().setDescription(
      `<@${message.author.id}> você não tem permissão para utilizar esse comando `)
			.setColor(`Dark_Blue`)
		return message.channel.send(My).then(m => m.delete({ timeout: 5000 }));

	
}
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};