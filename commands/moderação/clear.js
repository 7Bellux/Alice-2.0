const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    
  if (!message.member.permissions.has('MANAGE_MESSAGES')) {
		const My = new Discord.MessageEmbed().setDescription(
      `<@${message.author.id}> você não tem permissão para utilizar esse comando `)
			.setColor(`Dark_Blue`)
		return message.channel.send(My).then(m => m.delete({ timeout: 5000 }));

	}

  
       

        message.delete();
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 100)
    return message.reply(
      "forneça um número de até **100 mensagens** a serem excluídas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};