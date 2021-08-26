const Discord = require('discord.js');
 
 exports.run = async (client, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const AliceEmbed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setThumbnail(icon)
  .setTitle('<:brescreverLC:868965426854506517> - Meus Comandos:')
  .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções. \n\n <a:Az_EstrelaTKF:868964332195680307><a:BP_setas_gif:868952511816532058> **Comandos Gerais.**\n\n <:staf:868961412544860240><a:BP_setas_gif:868952511816532058> **Comandos Staff.**\n\n <a:yellow_starzin:868963455988809830><a:BP_setas_gif:868952511816532058> **Comandos de Diversão**.\n\n <a:dance1:868965477764980817><a:BP_setas_gif:868952511816532058> **Comando de Música.**`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))
 
message.delete();
message.channel.send(AliceEmbed).then(msg => {
    msg.react('868964332195680307').then
     msg.react('868961412544860240').then
      msg.react('868963455988809830').then
       msg.react('868965477764980817').then
       


   const geralFilter = (reaction, user) => reaction.emoji.name === 'Az_EstrelaTKF' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === 'staf' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'yellow_starzin' && user.id === message.author.id;
      const musicFilter = (reaction, user) => reaction.emoji.name =='dance1' && user.id === message.author.id;
      
    const geral = msg.createReactionCollector(geralFilter);
      const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);
      const music = msg.createReactionCollector(musicFilter);

     
    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - GERAIS')
      .setThumbnail(icon)
       .addFields(
         {
           name:'Afk:',
           value:'```\nManda uma mensagem no chat de qualquer servidor que o usuário te marcou.\n```'
         },
         {
           name:'Avatar:',
           value:'```\nMostra o avatar do usuário mencionado.\n```'
         },
         {
           name:'Banner:',
           value:'```\nMostra o banner do usuário mencionado.\n```'
         },
         {
           name:'Capaserve',
           value:'```\nMostra a capa do servidor que o comando for ultilizado.\n```'
         },
         {
          name:'Mais comandos disponíveis em breve',
          value: 'Em Manutenção'
        }
      )
      .setColor('GREEN')
      msg.edit(embed);
      })
 
    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - STAFF')
      .setThumbnail(icon)
      .addFields(
        {
            name:'Addemoji:',
            value:'```\nRouba o emoji de qualquer servidor. Obs: O usuário precisa estar utilizando nitro.\n```'
        },
        {
          name: 'Clear:',
          value: '```\nApaga até 99 mensagens no canal que o comando for utilizado.\n```'
        },
        {
          name: 'Embed:',
          value: '```\nRepete a mensagem que você digitou depois do comando em Embed básica de cor aleatória.\n```'
          
        },
        {
          name:'Lock:',
          value:'```\nTranca um determinado canal.\n```'
        },
        {
          name:'Say:',
          value:'```\nRepete a mensagem que você digitou.\n```'
        },
        {
          name:'Totalserve:',
          value:'```\nMostra separadamente a quantidade de membros  e bots no servidor.\n```'
        },
        {
          name:'Unlock:',
          value:'```\nDestranca um determinado canal.\n```'
        },
        {
          name:'Mais comandos disponiveis em breve',
          value: 'Em Manutenção'
        }
      )
      .setColor('PURPLE')
      msg.edit(embed);
    })
 
    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - DIVERSÃO')
      .setThumbnail(icon)
      .addFields(
        {
          name:"Abraçar:",
          value:'```\nMostre seu carinho abraçando o usuário mencionado\n```'
        },
       {
          name:'Mais comandos disponivel em breve',
          value: 'Em Manutenção'
        }
      )
      .setColor('#1600f7')
      msg.edit(embed);
    })
 
 music.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - Música')
      .setThumbnail(icon)
      .addFields(
        {
          name:'play:',
          value: '```\nInicia uma música desejada.\n```'
        },
        {
        name: 'Volume:',
        value:'```\nRedefine o volume de uma música. Obs: Por segurança escolha números de 1 à 10.\n ```'
        },
        {
          name:'Leave:',
          value:'```\nRetira o bot do canal de voz atual.\n```'
        },
        {
          name:'Skip:',
          value:'```\nPula a música atual para a próxima da fila.\n```'
        },
        {
          name:'Fila:',
          value:'```\nMostram as músicas que faltam pra terminar na sequência.\n```'
        },
        {
          name:'InfoMusic:',
          value:'```\nMostra a letra da música que estar tocando atualmente e de onde a musica foi obtida. Obs: Algumas músicas não tem letras disponíveis.\n```'
        },
      {
      name:'Stop:',
      value:'```\nPara a música que estar tocando imediatamente.\n```'
      },
      {
      name:'Loop:',
      value:'```\nEm manutenção.\n```'
      },
      {
          name:'Pause:',
          value:'```\nPausa a música que estar tocando atualmente.\n```'
      },
      {
          name:'Resume:',
          value:'```\nContinua a música de onde foi pausada.\n```'
      },
      {
          name:'Search:',
          value: '```\nEm manutenção.\n```'
      }
        
      )
      .setColor('#1600f7')
      msg.edit(embed);
    })
   
})


}





