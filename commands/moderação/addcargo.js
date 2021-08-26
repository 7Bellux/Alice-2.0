const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'give-role',
    run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`Você não tem permissão de Gerenciar_Mensagens`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("Uso incorreto, é `<username || user id> <role name || id>`").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('O usuário já tem essa função').then(m => m.delete({ timeout: 5000 }));

          const MyAliceEmbed = new MessageEmbed()
                 .setTitle(`AddCargo:`)
      .setDescription(`${message.author} `)
      .addField(`**Deu um cargo para :**`, `${member.user}`)
      .addField(`**Cargo recebido: **`, `${roleName}`)
                .setColor(`PINK`)    .setThumbnail(member.user.author.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

           return member.roles.add(roleName).then(() => message.channel.send(MyAliceEmbed));
        } catch (e) {
            return message.channel.send(embed).then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        
    const embed = new Discord.MessageEmbed()
    .setDescription('Tente dar uma função que existe da próxima vez ...')
.setColor(`PINK`)

        }
    }
}
