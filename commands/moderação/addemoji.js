const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `BLACK`;

module.exports = {
  name: "addemoji",
  category: "Administrators",
  run: async (client, message, args) => {
    
if (!message.member.permissions.has('MANAGE_EMOJIS')) {
		const My = new Discord.MessageEmbed().setDescription(
      `<@${message.author.id}> você não tem permissão para utilizar esse comando `)
			.setColor(`Dark_Blue`)
		return message.channel.send(My).then(m => m.delete({ timeout: 5000 }));

	}
    
    message.delete();
    
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Por favor, me envie o emoji.`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
        .setTitle(`Emoji adicionado com sucesso.`)
        .setColor(`#030303`)
        .setFooter(`Comando feito por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setDescription(
          `Dados do emoji adicionado:\n \n Nome do emoji: ${name || `${customemoji.name}`} \n Visualização : [Click aqui](${Link})`
        );

      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Por favor, envie um emoji valido.`);
      message.channel.send(
        `Você pode usar o emoji normal sem adicionar no servidor!`
      );
    }
  }
};
