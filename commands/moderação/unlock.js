const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	let motivo = args.slice(' ').join(' ');
	if (!motivo) motivo = 'Motivo não Informado';
	let avatar = message.author.avatarURL({
		dynamic: true,
		format: 'gif',
		size: 1024
	});
if (!message.member.permissions.has('MANAGE_CHANNELS')) {
		const My = new Discord.MessageEmbed().setDescription(
      `<@${message.author.id}> você não tem permissão para utilizar esse comando `)
			.setColor(`Dark_Blue`)
		return message.channel.send(My).then(m => m.delete({ timeout: 5000 }));

	}

	message.delete();
	message.channel.createOverwrite(message.guild.id, {
		SEND_MESSAGES: true,
		VIEW_CHANNEL: true
	});
	const embed = new Discord.MessageEmbed()
		.setTitle('CHAT DESTRANCADO')
		.setDescription(`Este chat foi desmutado.`)
		.addField('Trancar:', '  ***lock <Motivo>**')
		.addField('Destrancado por:', `${message.author}`)
		.addField('Motivo:', motivo)
		.setTimestamp()
		.setThumbnail(message.author.displayAvatarURL({format:"png"}))
   	.setColor('#6400b6');
	message.channel.send(embed);
};
